import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";
import {useEffect} from "react";

export default function OutstandingService({pageName} : {pageName: string}) {
  const {control, setValue, getValues, register, trigger, watch} = useFormContext();
  const patternName = 'outstanding_service';

  const listServiceArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.list` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.outstanding_service[watch('platform')].find((item : any) => item.key === watch(`page.${pageName}.${patternName}.pattern`))?.name)
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
                LIST_TYPE_OF_PATTERN.outstanding_service[watch('platform')].map((item : any, index : number) => (
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
            <TextField {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.description`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Mô tả" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.poster`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh poster" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
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
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.price`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Giá ${index + 1}`} variant="outlined" size="small" fullWidth sx={{ mb: 1 }} />
              )}
            />

          </Box>
        ))}
      </Box>
    </Box>
  )
}