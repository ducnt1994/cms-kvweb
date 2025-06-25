import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function Review({pageName} : {pageName: string}) {
  const {control, setValue, getValues, register, trigger, watch} = useFormContext();
  const patternName = 'review';

  const listServiceArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.list` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.review[watch('platform')].find((item : any) => item.key === watch(`page.${pageName}.${patternName}.pattern`))?.name)
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
                LIST_TYPE_OF_PATTERN.review[watch('platform')].map((item: any, index: number) => (
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
            <TextField helperText={`Số kí tự: ${field.value.length}`} {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.background.image.src`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.poster`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {listServiceArray.fields.map((item, index) => (
          <Box key={index} mb={2}>
            <Typography mb={1}>{`Đánh giá ${index + 1}`}</Typography>
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.author`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Tên khách hàng" variant="outlined" size="small" fullWidth sx={{ mb: 1 }} />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.feedback`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Văn bản" variant="outlined" size="small" fullWidth multiline rows={2} sx={{ mb: 1 }} />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.image.src`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}