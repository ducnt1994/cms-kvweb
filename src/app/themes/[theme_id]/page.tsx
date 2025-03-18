'use client';
import {
  Box,
  Button,
  Container, Divider, MenuItem, Select, Snackbar, TextField,
  Typography
} from "@mui/material";
import Common from "@/components/Common/page";
import {useForm, FormProvider, useWatch,} from "react-hook-form";
import {getDefaultDataByPattern} from "@/utils/getDefaultDataByPattern";
import {LIST_PATTERN_BY_PLATFORM} from "@/constants/pageBuilder";
import {JSX, lazy, useEffect, useState} from "react";
import dataText from "@/utils/output.json"
import axios from "axios";
import FeaturedProduct from "@/components/FeaturedProduct/page";
import Breadcumb from "@/components/Breadcumb/page";
import {useParams, useSearchParams} from "next/navigation";

interface IFormInput {
  username: string;
  password: string;
  code: string;
  name: string;
  description: string;
  category: string;
  color: string;
  position: number
  thumbnail: string;
  platform: string;
  category_name: string;
  category_thumbnail: string;
  theme_info_detail: any[]
  theme_feature_outstanding: any[]
  page: any
  font_family: any
  child_category: string
  rank: any,
  page_information : {
    [key: string]: string
  }
}

export default function Edit() {
  const searchParams = useParams()
  const themeId = searchParams.theme_id
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: 'success',
    message: ""
  })
  const [newPage, setNewPage] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);

  const defaultData = {
    username: 'kvweb',
    password: 'eyaH9dn54ZLbEjCq',
    code: '',
    name: '',
    description: '',
    category: '',
    child_category: "",
    color: '',
    position: 0,
    thumbnail: '',
    platform: '',
    category_name: '',
    category_thumbnail: '',
    theme_info_detail: [],
    theme_feature_outstanding: [],
    rank: {
      homepage: []
    },
    page: {
      homepage: {}
    },
    page_information: {
      // about_1_page: "đức béo"
    },
    font_family: "Inter-Inter"
  }

  const methods = useForm<IFormInput>({
    shouldUnregister: false,
    shouldFocusError: false,
    defaultValues: defaultData
  });
  const {control, setValue, getValues, reset, watch} = methods;
  const onSubmit = async () => {
    // setLoadingCreate(true);
    const data = getValues();
    const fontFamilyExplode = data.font_family.split('-')
    data.font_family = {
      title: fontFamilyExplode[0],
      description: fontFamilyExplode[1]
    }
    data.page.homepage.header.text_style = JSON.stringify(data.page.homepage.header.text_style)
    data.page.homepage.footer.text_style = JSON.stringify(data.page.homepage.footer.text_style)

    // add header-footer vào rank của các page custom
    const newRank = {...data.rank}
    for (const pageItem in data.page) {
      if(pageItem === 'homepage') continue
      newRank[pageItem] = ['header', ...newRank[pageItem], 'footer']
    }
    data.rank = newRank

    // add header-footer vào page của các page custom
    const newPage = {...data.page}
    for (const pageItem in data.page) {
      if(pageItem === 'homepage') continue
      newPage[pageItem].header = data.page.homepage.header
      newPage[pageItem].footer = data.page.homepage.footer
    }
    data.page = newPage


    // const res = await axios.post('https://gateway.dev-kiotvietweb.fun/api/v2/page-builder/cms/themes', data)
    // if(res){
    //   setLoadingCreate(false);
    //   setSnackbar({
    //     open: true,
    //     type: 'success',
    //     message: "Create theme success"
    //   })
    // }
  };

  const platform = useWatch({name: 'platform', control});
  const pageData = useWatch({name: 'page', control});
  const field_category_name = useWatch({name: 'category_name', control});
  const field_child_category = useWatch({name: 'child_category', control});

  // useEffect(() => {
  //   const newDefault = {...defaultData}
  //   newDefault.platform = platform
  //   reset(newDefault)
  // }, [platform])

  const deletePageCustom = (pageName: string) => {
    // xoá ở rank
    const rank = {...getValues('rank')}
    delete rank[pageName]
    setValue('rank', rank)

    // xoá ở page_information
    const pageInformation = {...getValues('page_information')}
    delete pageInformation[pageName]
    setValue('page_information', pageInformation)

    // xoá ở page
    const page = {...getValues('page')}
    delete page[pageName]
    setValue('page', page)
  }

  const addPatternToPage = (page: string) => {
    // @ts-ignore
    const getAllPatternByPlatform = page === 'homepage' ? LIST_PATTERN_BY_PLATFORM[platform].map(item => item) : LIST_PATTERN_BY_PLATFORM[platform].filter(item => !['header', 'footer'].includes(item.key))
    const patternExistInPage = Object.keys(watch(`page.${page}`)).map(item => {
      return item
    })

    // @ts-ignore
    const arrDiffPattern = getAllPatternByPlatform.filter(item => !patternExistInPage.includes(item.key));
    if(arrDiffPattern.length === 0) {
      setSnackbar({
        open: true,
        type: 'error',
        message: "Vkl hết rồi còn bấm cái gì nữa"
      })
      return
    }
    const defaultData = getDefaultDataByPattern(arrDiffPattern[0].key, getValues('platform'));
    const newData = {...getValues(`page.${page}`)}
    // @ts-ignore
    newData[arrDiffPattern[0].key] = getDataTextDefault({
      patternName: arrDiffPattern[0].key,
      // @ts-ignore
      defaultDataWithoutText: defaultData[arrDiffPattern[0].key]
    })
    setValue(`page.${page}`,newData)

    // add to rank
    const newRank = [...getValues(`rank.${page}`)]
    newRank.push(arrDiffPattern[0].key)
    setValue(`rank.${page}`, newRank)
  }

  const getDataTextDefault = ({patternName, defaultDataWithoutText}: {patternName: string, defaultDataWithoutText: any}) => {
    console.log("platform", platform)
    console.log("field_category_name", field_category_name)
    console.log("field_child_category", field_child_category)
    // @ts-ignore
    const dataTextByPattern = dataText[platform][field_category_name][field_child_category][patternName]
    console.log("defaultDataWithoutText", defaultDataWithoutText)
    if(!dataTextByPattern) {
      return defaultDataWithoutText
    }
    switch (patternName) {
      case "banner_top":
        return {
          ...defaultDataWithoutText,
          content: dataTextByPattern.content
        }
      case "introduction":
      case "image_gallery":
      case "banner":
      case "video":
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          description: dataTextByPattern.description
        }
      case "review":
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          list: dataTextByPattern.list.map((item: any, index: number) => {
            return {
              author: item.author,
              feedback: item.feedback,
              image: {
                src: "",
                alt: `Review ${index + 1}`
              },
              star: 5
            }
          })
        }
      case "service":
        return {
          ...defaultDataWithoutText,
          blocks: dataTextByPattern.blocks.map((item: any, index: number) => {
            return {
              active_type_service: "image",
              alt: `Service image ${index + 1}`,
              icon: {
                code: "",
                size: 20
              },
              number: 1,
              src: "",
              subTitle: item.subTitle,
              title: item.title
            }
          })
        }
      case "blog_post":
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          blog_posts: {
            blogPosts: dataTextByPattern.blog_posts.blogPosts.map((item: any, index: number) => {
              return {
                id: index + 1,
                title: item.title,
                thumbnail: "",
                handler: {},
                category_name: item.category_name,
              }
            })
          }
        }
      case "menu" :
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          subTitle: dataTextByPattern.title,
        }
      case "group_service":
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          description: dataTextByPattern.description,
          list: dataTextByPattern.list.map((item: any, index: number) => {
            return {
              name: item.name,
              image: {
                src: '',
                alt: `group service ${index + 1}`,
              },
            }
          })
        }
      case "outstanding_service":
        return {
          ...defaultDataWithoutText,
          title: dataTextByPattern.title,
          description: dataTextByPattern.description || "",
          list: dataTextByPattern.list.map((item: any, index: number) => {
            return {
              image: {
                src: "",
                alt: `Outstanding service ${index + 1}`
              },
              name: item.name,
              price: item.price,
            }
          })
        }
      default:
        return defaultDataWithoutText
    }
  }

  // @ts-ignore
  const getPatternByName = (patternName, pageName: string) => {
    switch (patternName) {
      case 'header':
        return <Header pageName={pageName} />
      case 'banner_top':
        return <BannerTop pageName={pageName} />
      case 'banner':
        return <Banner pageName={pageName}/>
      case 'introduction':
        return <Introduction pageName={pageName}/>
      case 'group_service':
        return <GroupService pageName={pageName}/>
      case 'brands':
        return <Brand pageName={pageName}/>
      case 'image_gallery':
        return <ImageGallery pageName={pageName}/>
      case 'service':
        return <Service pageName={pageName}/>
      case 'review':
        return <Review pageName={pageName}/>
      case 'banner_extra':
        return <BannerExtra pageName={pageName}/>
      case 'video':
        return <Video pageName={pageName}/>
      case 'outstanding_service':
        return <OutstandingService pageName={pageName}/>
      case "blog_post":
        return <BlogPost pageName={pageName}/>
      case "footer":
        return <Footer pageName={pageName}/>
      case "catalog":
        return <Catalog pageName={pageName}/>
      case "menu":
        return <Menu pageName={pageName}/>
      case "product_list":
        return <ProductList pageName={pageName}/>
      case "featured_product":
        return <FeaturedProduct pageName={pageName}/>
      default:
    }
  }

  const handleChangePatternName = ({
    patternName,
    pageName,
    index,
    currentPatternName
  } : {
    patternName: string,
    pageName: string,
    index: number
    currentPatternName: string
  }) => {
    // check patternName is exist in page
    const page = getValues(`page.${pageName}`)
    if (page[patternName]) {
      setSnackbar({
        open: true,
        type: 'error',
        message: "Có pattern này rồi"
      })
      return
    }
    // thay đổi trong rank
    const rank = [...getValues(`rank.${pageName}`)]
    const currentIndexByPatternRank = rank.findIndex(item => item === currentPatternName)
    if (currentIndexByPatternRank !== -1) {
      rank.splice(currentIndexByPatternRank, 1, patternName)
    }
    setValue(`rank.${pageName}`, rank)

    // thay đổi trong page
    const defaultData = getDefaultDataByPattern(patternName, getValues('platform'))
    const entries = Object.entries(page);

    if (index !== -1) {
      // @ts-ignore
      entries[index] = [patternName, getDataTextDefault({
        patternName: patternName,
        // @ts-ignore
        defaultDataWithoutText: defaultData[patternName]
      })]; // thay bằng pattern mới và data mới
    }

    const newObj = Object.fromEntries(entries);
    setValue(`page.${pageName}`, {...newObj});
    return;
  }

  const handleDeletePattern = ({
    patternName,
    pageName,
  } :{
    patternName: string,
    pageName: string
  }) => {
    const page = getValues(`page.${pageName}`)
    if (!page[patternName]) {
      setSnackbar({
        open: true,
        type: 'error',
        message: "Có pattern này đâu mà xoá"
      })
      return
    }

    // thay đổi trong rank
    const rank = [...getValues(`rank.${pageName}`)]
    const currentIndexByPatternRank = rank.findIndex(item => item === patternName)
    if(currentIndexByPatternRank !== -1) {
      rank.splice(currentIndexByPatternRank, 1)
    }
    setValue(`rank.${pageName}`, rank)

    // thay đổi trong page
    const patternInPage = {...page}
    delete patternInPage[patternName]
    setValue(`page.${pageName}`, patternInPage)
  }

  const handleAddNewPage = () => {
    if(!newPage){
      setSnackbar({
        open: true,
        type: 'danger',
        message: "Nhập tên page đi đã -_-"
      })
      return;
    }
    // get all value page_information
    const allPageNameInPageInformation = Object.values(getValues('page_information'))

    if(allPageNameInPageInformation.includes(newPage)) {
      setSnackbar({
        open: true,
        type: 'danger',
        message: "Trùng tên rồi"
      })
      return;
    }

    const page = getValues('page')

    //get all key in object page_information
    const allPageInformation = Object.keys(getValues('page_information'))
    const newCustomPage = `about_${allPageInformation.length}_page`
    setValue(`page_information`, {
      ...getValues('page_information'),
      ...{[newCustomPage] : newPage}
    })
    page[newCustomPage] = {}
    setValue('page', page)
    // add to rank
    setValue(`rank.${newCustomPage}`, [])

  }

  const loadThemeDetails = async () => {
    const res = await axios.get(`https://gateway.dev-kiotvietweb.fun/api/v2/page-builder/cms/themes/${themeId}`)
    const data = res.data
    setValue('platform', data.platform)
    setValue('category_name', data.category_name)
    setValue('child_category', data.child_category)
    setValue('code', data.code)
    setValue('name', data.name)
    setValue('color', data.color)
    setValue('thumbnail', data.thumbnail)
    setValue('font_family', `${data.font_family.title}-${data.font_family.description}`)
    setValue('description', data.description)
    setValue('page_information', data.page_information)

    // rank
    let newRank = {}
    Object.keys(data.rank).map((item, index) => {
      if(item === 'homepage') {
        newRank[item] = data.rank[item]
      } else {
        // delete header and footer in array
        newRank[item] = data.rank[item].filter(item => !['header', 'footer'].includes(item))
      }
    })
    setValue('rank', newRank)

    // page
    let newPage = data.page;
    newPage.homepage.header.text_style = JSON.parse(newPage.homepage.header.text_style)
    newPage.homepage.footer.text_style = JSON.parse(newPage.homepage.footer.text_style)
    setValue('page', newPage)

  }

  useEffect(() => {
    loadThemeDetails()
  }, [])

  return (
      <>
        <Breadcumb/>
        <FormProvider {...methods}>
          <Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <Typography variant="h4" component="h1">
                Thêm theme mới
              </Typography>
              <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  // onClick={handleSave}
                  sx={{ px: 3 }}
                >
                  Lưu nháp
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                  sx={{ px: 3 }}
                  disabled={loadingCreate}
                  loading={loadingCreate}
                >
                  Publish
                </Button>
              </Box>
            </Box>

            <Common/>

            {/*render page.homepage*/}
            <Box sx={{
              p: 2,
              border: '1px solid red',
              borderRadius: 4,
              mt: 3,
              display: platform ? 'block' : 'none'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: 'space-between',
              }}>
                <Typography variant="h5" component="h2">
                  Homepage
                </Typography>
                {
                  field_child_category && field_category_name && <Button
                    onClick={() => addPatternToPage('homepage')}
                    variant={'contained'} size={'small'}>Thêm section homepage</Button>
                }

              </Box>
              {
                Object.keys(getValues('page.homepage')).map((patternName, index) => (
                  <ItemPattern
                    // @ts-ignore
                    listPattern={LIST_PATTERN_BY_PLATFORM[platform]}
                    key={index}
                    patternName={patternName}
                    pattern={getPatternByName(patternName, 'homepage') as JSX.Element}
                    changePatternName={(newPatternName: string) => {
                      handleChangePatternName({
                        patternName: newPatternName,
                        pageName: 'homepage',
                        index,
                        currentPatternName: patternName
                      })
                    }}
                    deletePattern={() => {
                      handleDeletePattern({
                        patternName,
                        pageName: 'homepage'
                      })
                    }}
                  />
                ))
              }


            </Box>

            <Divider sx={{
              mt: 2,
              mb: 2
            }}/>

            <Box sx={{display: platform ? 'block' : 'none'}}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Button onClick={handleAddNewPage} variant={'contained'} size={'small'}>Thêm trang mới</Button>
                <TextField
                  sx={{ width: '200px' }}
                  size={'small'}
                  value={newPage}
                  onChange={(e) => {
                    e.stopPropagation();
                    setNewPage(e.target.value);
                  }}
                  placeholder="Enter page name"
                />
              </Box>

              <Box>
                {
                  Object.keys(pageData).map((pageName, index) => {
                    if(pageName === 'homepage') return null
                    return (
                      <Box key={index} sx={{
                        border: '1px solid green',
                        padding: 2,
                        borderRadius: 4,
                        mt: 2
                      }}>
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 2
                        }}>
                          <Typography variant="h5" component="h2">
                            {getValues(`page_information[${pageName}]`)}
                          </Typography>
                          <Button
                            onClick={() => addPatternToPage(pageName)}
                            variant={'contained'} size={'small'}>Thêm section {getValues(`page_information[${pageName}]`)}</Button>
                          <Button
                            onClick={() => deletePageCustom(pageName)}
                            variant={'contained'} color={'error'} size={'small'}>Xoá {getValues(`page_information[${pageName}]`)}</Button>
                        </Box>
                        {
                          getValues(`rank.${pageName}`).filter(item => !['header', 'footer'].includes(item)).map((patternName : string, index : number) => (
                            <ItemPattern
                              // @ts-ignore
                              listPattern={LIST_PATTERN_BY_PLATFORM[platform].filter(pattern => !['header', 'footer'].includes(pattern.key))}
                              key={index}
                              patternName={patternName}
                              pattern={getPatternByName(patternName, pageName) as JSX.Element}
                              changePatternName={(newPatternName: string) => {
                                handleChangePatternName({
                                  patternName: newPatternName,
                                  pageName: pageName,
                                  index,
                                  currentPatternName: patternName
                                })
                              }}
                              deletePattern={() => {
                                handleDeletePattern({
                                  patternName,
                                  pageName: pageName
                                })
                              }}
                            />
                          ))
                        }

                      </Box>
                    )
                  })
                }
              </Box>
            </Box>
          </Box>
        </FormProvider>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          color={snackbar.type}
          onClose={() => {
            setSnackbar({
              ...snackbar,
              open: false
            })
          }}
          message={snackbar.message}
        />
      </>
  )
}

const Header = lazy(() => import("@/components/Header/page"));
const BannerTop = lazy(() => import("@/components/BannerTop/page"));
const Banner = lazy(() => import("@/components/Banner/page"));
const Introduction = lazy(() => import("@/components/Introduction/page"));
const GroupService = lazy(() => import("@/components/GroupService/page"));
const Brand = lazy(() => import("@/components/Brand/page"));
const ImageGallery = lazy(() => import("@/components/ImageGallery/page"));
const Service = lazy(() => import("@/components/Service/page"));
const Review = lazy(() => import("@/components/Review/page"));
const BannerExtra = lazy(() => import("@/components/BannerExtra/page"));
const OutstandingService = lazy(() => import("@/components/OutstandingService/page"));
const Video = lazy(() => import("@/components/Video/page"));
const ItemPattern = lazy(() => import("@/components/ItemPattern/page"));
const BlogPost = lazy(() => import("@/components/BlogPost/page"));
const Footer = lazy(() => import("@/components/Footer/page"));
const Catalog = lazy(() => import("@/components/Catalog/page"));
const Menu = lazy(() => import("@/components/Menu/page"));
const ProductList = lazy(() => import("@/components/ProductList/page"));