import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";
import {useEffect} from "react";

export default function GroupService({pageName} : {pageName: string}) {
  const {control, setValue, getValues, register, trigger, watch} = useFormContext();
  const patternName = 'group_service';

  const listServiceArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.list` });
  const appendPicture = () => {
    if (listServiceArray.fields.length >= 9) {return }
    listServiceArray.append({
      image: {
        src: '',
        alt: `group service ${listServiceArray.fields.length + 1}`,
      },
      name: ''
    });
  };

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.group_service[watch('platform')].find((item : any) => item.key === watch(`page.${pageName}.${patternName}.pattern`))?.name)
  }, [watch(`page.${pageName}.${patternName}.pattern`)])

  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <Controller
          name={`page.${pageName}.${patternName}.pattern`}
          control={control}
          render={({ field }) => (
            <Select {...field} sx={{ width: '200px' }} size="small">
              {
                // @ts-ignore
                LIST_TYPE_OF_PATTERN.group_service[watch('platform')].map((item : any, index : number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        <Controller
          name={`page.${pageName}.${patternName}.background.color`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.title`}
          control={control}
          render={({ field }) => (
            <TextField helperText={`Số kí tự: ${field.value?.length}`} {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.description`}
          control={control}
          render={({ field }) => (
            <TextField helperText={`Số kí tự: ${field.value?.length}`} {...field} label="Mô tả" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
      </Box>

      <Box display={'flex'} gap={2} alignItems={'center'}>
        <Typography flex={1}>Group service {getValues(`page.${pageName}.${patternName}.list`).length}/9</Typography>
        <Button onClick={appendPicture} variant={'contained'} size={'small'}>Thêm nhóm hàng hoá</Button>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mt: 2 }}>
        {listServiceArray.fields.map((item, index) => (
          <Box key={index} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: '#eeeeee', p: 2 }}>
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.name`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Tên ${index + 1}`} variant="outlined" size="small" fullWidth sx={{ mb: 1 }} />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.image.src`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth sx={{ mb: 1 }} />
              )}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
