'use client';
import {
  Box, FormControl, MenuItem, Paper, Select, TextField,
  Typography, Checkbox, Button, IconButton,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Controller, useForm} from "react-hook-form";
import {LIST_PLATFORM, NGANH_HANG} from "@/constants/pageBuilder";
import {useEffect} from "react";
import {addThemeCategory} from "@/api/theme-category";
import {ICreateThemeDto} from "@/constants/theme-categories";
import {useRouter} from "next/navigation";

export default function CreateThemeCategory() {
  const router = useRouter()

  // render a form
  const {control, handleSubmit, watch, setValue} = useForm<ICreateThemeDto>({
    defaultValues: {
      platform: '',
      name: '',
      child_categories: [],
    }
  });

  // watch field name
  const watchName = watch('name');

  const submitData = async (data : ICreateThemeDto) => {
    data.username = 'kvweb'
    data.password = 'eyaH9dn54ZLbEjCq'
    try {
      const res = await addThemeCategory(data)
      if (res) {
        alert('Thêm mới thành công');
        router.push('/theme-categories')
      }
    } catch (e : any) {
      if(e?.status === 409){
        alert('Ngành hàng đã tồn tại');
        return;
      }
      alert(e?.message)
    }

  }

  useEffect(() => {
    // add to field child_categories with record name
    if (watchName) {
      const newChildCategories = [watchName]
      setValue('child_categories', newChildCategories);
    }
  },[watchName]);

  return <>
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
      <Typography variant="h4" component="h1">
        Tạo ngành hàng mới
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(submitData)();
        }}>
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
              <Typography sx={{ mb: 1 }}>Tên ngành hàng</Typography>
              <FormControl fullWidth variant="outlined">
                <Controller
                  name={`name`}
                  control={control}
                  render={({field}) => (
                    <TextField
                      {...field}
                      size={'small'}
                      fullWidth
                      placeholder="Tên ngành hàng"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
            </Box>

            <Box>
              <Box sx={{
                display: 'flex',
                gap: 1,
                flexDirection: 'column',
                mb: 2
              }}>
                <Typography>Ngách ngành</Typography>
                <Button variant={'outlined'} size={'small'} onClick={() => {
                  setValue('child_categories', [...watch('child_categories'), '']);
                }}>Thêm mới ngách hàng</Button>
              </Box>
              {/*render form control with checkbox*/}
              <FormControl fullWidth variant="outlined">
                <Controller
                  name={`child_categories`}
                  control={control}
                  render={({field}) => (
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                      {
                        field.value.map((item, index) => (
                          <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                              {...field}
                              value={item}
                              checked={field.value.includes(item)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  field.onChange([...field.value, item]);
                                } else {
                                  field.onChange(field.value.filter((value: string) => value !== item));
                                }
                              }}
                            />
                            <TextField
                              size={'small'}
                              fullWidth
                              placeholder="Tên ngách hàng"
                              variant="outlined"
                              value={item}
                              onChange={(e) => {
                                const newChildCategories = [...field.value];
                                newChildCategories[index] = e.target.value;
                                field.onChange(newChildCategories);
                              }}/>
                            <IconButton onClick={() => {
                              const newChildCategories = [...field.value];
                              newChildCategories.splice(index, 1);
                              field.onChange(newChildCategories);
                            }}>
                              <DeleteIcon></DeleteIcon>
                            </IconButton>
                          </Box>
                        ))
                      }
                    </Box>
                  )}
                />
              </FormControl>
            </Box>
          </Box>
          <Button type={'submit'} variant={'contained'} sx={{mt: 3}}>Thêm mới</Button>
        </form>
      </Paper>
    </Box>
  </>
}