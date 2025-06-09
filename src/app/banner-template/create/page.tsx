"use client";
import {useParams, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {
  Typography,
  Box, TextField, FormControlLabel, Checkbox, RadioGroup, Radio, Button, Select, MenuItem,
} from '@mui/material';
import {Controller, FormProvider, useForm} from "react-hook-form";
import {BannerTemplateDto} from "@/types/response/bannerTemplate.response.dto";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {LIST_PLATFORM, PLATFORM_RETAIL} from "@/constants/pageBuilder";

interface ICategory {
  name: string
  _id: string;
}

export default function CreateBannerTemplate() {
  const [platform, setPlatform] = useState<string>(PLATFORM_RETAIL);
  const [listCategories, setListCategories] = useState<ICategory[]>([]);
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // create yup schema for validation
  const schema = yup.object().shape({

  });

  const defaultData = {
    name: "",
    category: "",
    backgroundImage : "",
    thumb: "",
    textAlign: "",
    width: 0,
    height: 0,
    title: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0
    },
    description: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0
    },
    button: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0,
      isActive: false,
      backgroundColor: ""
    },
    ratio: '',
    category_id: '',
  }

  const methods = useForm<BannerTemplateDto>({
    shouldUnregister: false,
    shouldFocusError: false,
    defaultValues: defaultData,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const {control, setValue, getValues, reset, watch, formState: { errors }, handleSubmit} = methods;

  const watchCategory = watch('category');

  const onSubmit = async () => {
    const data = reGenerateData(getValues());
    setIsLoading(true);
    try {

      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/banner-gallery/templates/create`, data);
      if(res){
        router.push('/banner-template');
      }
    } catch (e) {
      alert('Có lỗi xảy ra khi tạo banner, vui lòng thử lại sau');
    } finally {
      setIsLoading(false);
    }
  }

  const reGenerateData = (data:  any) => {
    const listFieldsToChange = ['title', 'description', 'button'];
    const listKeyToChange = ['fontSize', 'fontWeight', 'lineHeight', 'maxWidth'];
    const clonedData = {...data};
    listFieldsToChange.forEach(field => {
      if (clonedData[field]) {
        listKeyToChange.forEach(key => {
          if (clonedData[field][key]) {
            clonedData[field][key] = parseInt(clonedData[field][key]); // default font size, font weight, line height, max width
          }
        });
      }
    });
    return clonedData
  }

  const loadChips = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/banner-gallery/categories`, {
      platform
    });
    setListCategories(res.data);
  }

  useEffect(() => {
    loadChips()
  }, [platform])

  useEffect(() => {
    if (watchCategory) {
      const category = listCategories.find(item => item.name === watchCategory);
      if (category) {
        setValue('category_id', category._id);
      } else {
        setValue('category_id', '');
      }
    }
  }, [watchCategory])

  useEffect(() => {
    if(Object.keys(errors).length > 0) {
      alert('Nhập đủ trường đi -_-')
    }
  }, [errors])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="main"
          className="MainContent"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
            <Typography variant="h4" component="h1">
              Tạo mới banner
            </Typography>
            <Button loading={isLoading} type={'submit'} variant={'contained'}>Tạo mới</Button>
          </Box>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Select
                value={platform}
                size={'small'}
                displayEmpty
                sx={{
                  height: '40px'
                }}
                onChange={(e) => {
                  setPlatform(e.target.value as string);
                }}
              >
                {
                  LIST_PLATFORM.map((item, index) => (
                    <MenuItem key={index} value={item}>{item.toUpperCase()}</MenuItem>
                  ))
                }
              </Select>

              <Controller
                name={`category`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    sx={{
                      height: '40px'
                    }}
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    <MenuItem value={''}>--Chọn danh mục--</MenuItem>
                    {
                      listCategories.map((item, index) => (
                        <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                      ))
                    }
                  </Select>
                )}
              />

              <Controller
                name={`name`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tên ảnh" placeholder={'VD: hotel_1'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`backgroundImage`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Link ảnh nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`thumb`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Link ảnh mẫu" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`ratio`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tỉ lệ ảnh" placeholder={'VD: 3:1'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />

              <Controller
                name={`textAlign`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    sx={{
                      height: '40px'
                    }}
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    <MenuItem value={''}>--Chọn vị trí--</MenuItem>
                    <MenuItem value={'left'}>Trái</MenuItem>
                    <MenuItem value={'center'}>Giữa</MenuItem>
                    <MenuItem value={'right'}>Phải</MenuItem>
                  </Select>
                )}
              />

              <Controller
                name={`width`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Chiều dài" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`height`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Chiều rộng" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>

            <Typography sx={{mt: 3}} variant={'h5'}>Tiêu đề</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`title.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>


            <Typography sx={{mt: 3}} variant={'h5'}>Mô tả</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`description.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>

            <Typography sx={{mt: 3}} variant={'h5'}>Button</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`button.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.backgroundColor`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.isActive`}
                control={control}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel value="true" control={<Radio size="small" />} label="Active" />
                    <FormControlLabel value="false" control={<Radio size="small" />} label="Not active" />
                  </RadioGroup>
                )}
              />
            </Box>
        </Box>
      </form>
    </>
  )
}