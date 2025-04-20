import {Box, Button, FormControl, MenuItem, Paper, Select, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import {availableCoupleFont, LIST_COLOR_BY_PLATFORM, LIST_PLATFORM, NGANH_HANG} from "@/constants/pageBuilder";
import {useParams} from "next/navigation";
import {IThemeCategoriesProps} from "@/constants/theme-categories";
import {getListThemeCategories} from "@/api/theme-category";


export default function Common() {
  const params = useParams()
  const themeId = params.theme_id
  const {control, setValue, watch} = useFormContext();
  const platform = useWatch({name: 'platform'});
  const categoryName = useWatch({name: 'category_name'});
  const thumbnail = useWatch({name: 'thumbnail'});
  const [listThemeCategory, setListThemeCategory] = useState<IThemeCategoriesProps[]>([])

  function getChildCategory() {
    // @ts-ignore
    return platform && categoryName ? NGANH_HANG[platform].find(item => item.name === categoryName)?.child_cate : []
  }

  useEffect(() => {
    const fetchThemeCategory = async () => {
      const res = await getListThemeCategories()
      setListThemeCategory(res)
    }
    fetchThemeCategory()
  }, [])

  useEffect(() => {
    if(platform && categoryName && !themeId) {
      const time = new Date().getTime()
      // @ts-ignore
      setValue('code', listThemeCategory.find(item => item.platform === watch('platform') && item.name === watch('category_name'))?.code + `_${time}`)
    }
  },[categoryName, platform])

  useEffect(() => {
    if(thumbnail) {
      // @ts-ignore
      setValue('category_thumbnail', thumbnail)
    }
  }, [thumbnail])

  return (
    <>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Thông tin chung
        </Typography>

        <Box sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)'
        }}>
          <Box>
            <Typography sx={{ mb: 1 }}>Nền tảng</Typography>
            <FormControl fullWidth variant="outlined">
              <Controller
                name={`platform`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    readOnly={!!themeId}
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    {
                      LIST_PLATFORM.map((item, index) => (
                        <MenuItem key={index} value={item}>{item.toUpperCase()}</MenuItem>
                      ))
                    }
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <Typography sx={{ mb: 1 }}>Ngành hàng</Typography>
            <FormControl fullWidth variant="outlined">
              <Controller
                name={`category_name`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    {
                      // @ts-ignore
                      watch('platform') && listThemeCategory.filter(item => item.platform === watch('platform')).map((item, index) => (
                        <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                      ))
                    }
                  </Select>
                )}
              />
            </FormControl>
          </Box>

          <Box>
            <Typography sx={{ mb: 1 }}>Ngách ngành</Typography>
            <FormControl fullWidth variant="outlined">
              <Controller
                name={`child_category`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    {
                      // @ts-ignore
                      watch('platform') && watch('category_name') && listThemeCategory.find(item => item.platform === watch('platform') && item.name === watch('category_name'))?.child_categories.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                      ))
                    }
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box >
            <Typography sx={{ mb: 1 }}>Tên theme</Typography>
            <Controller
              name={`name`}
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  size={'small'}
                  fullWidth
                  placeholder="Tên theme"
                  variant="outlined"
                />
              )}
            />

          </Box>
          <Box >
            <Typography sx={{ mb: 1 }}>Code theme</Typography>
            <Controller
              name={`code`}
              control={control}
              render={({field}) => (
                <TextField
                  {...field}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                  size={'small'}
                  fullWidth
                  placeholder="Code theme"
                  variant="outlined"
                />
              )}
            />

          </Box>

          <Box>
            <Typography sx={{ mb: 1 }}>Màu sắc</Typography>
            <Controller
              name={`color`}
              control={control}
              render={({field}) => (
                <Select
                  sx={{
                    width: '100%'
                  }}
                  {...field}
                  size={'small'}
                  displayEmpty
                >
                  {
                    // @ts-ignore
                    watch('platform') && LIST_COLOR_BY_PLATFORM[watch('platform')].map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                          <Box sx={{
                            width: 20,
                            height: 20,
                            backgroundColor: item.value,
                            borderRadius: 5
                          }}></Box>
                          <Typography>{item.name}</Typography>
                        </Box>
                      </MenuItem>
                    ))
                  }
                </Select>
              )}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 1 }}>Font</Typography>
            <FormControl fullWidth variant="outlined">
              <Controller
                name={`font_family`}
                control={control}
                render={({field}) => (
                  // select
                  <Select
                    {...field}
                    size={'small'}
                    displayEmpty
                  >
                    {
                      availableCoupleFont.map((item, index) => (
                        <MenuItem key={index} value={item[0] + '-' + item[1]}>{item[0] + ' - ' + item[1]}</MenuItem>
                      ))
                    }
                  </Select>
                )}
              />
            </FormControl>
          </Box>

          <Box>
            <Typography sx={{ mb: 1 }}>Link ảnh thumbnail</Typography>
            <FormControl fullWidth variant="outlined">
              <Controller
                name={`thumbnail`}
                control={control}
                render={({field}) => (
                  <TextField
                    {...field}
                    size={'small'}
                    fullWidth
                    placeholder="Ảnh thumbnail"
                    variant="outlined"
                  />
                )}
              />

            </FormControl>
          </Box>
        </Box>
      </Paper>

    </>
  )
}