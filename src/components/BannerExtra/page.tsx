import {Box, Button, Checkbox, FormControlLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function BannerExtra({pageName} : {pageName: string}) {
  const {control, setValue, getValues, register, trigger, watch} = useFormContext();
  const patternName = 'banner_extra';

  const pictureArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.picture.images` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.banner_extra[watch('platform')].find((item : any) => item.key === watch(`page.${pageName}.${patternName}.pattern`))?.name)
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
                LIST_TYPE_OF_PATTERN.banner_extra[watch('platform')].map((item : any, index : number) => (
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
          name={`page.${pageName}.${patternName}.description`}
          control={control}
          render={({ field }) => (
            <TextField helperText={`Số kí tự: ${field.value.length}`} {...field} label="Mô tả" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />

     <Controller
       name={`page.${pageName}.${patternName}.opacity`}
       control={control}
       render={({ field }) => (
         <FormControlLabel
           control={<Checkbox {...field} checked={field.value} />}
           label="Lớp phủ"
         />
       )}
     />
      </Box>

      <Typography mb={1}>Banner 4/4</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {pictureArray.fields.map((item, index) => (
          <Controller
            key={index}
            name={`page.${pageName}.${patternName}.picture.images.${index}.src`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth sx={{ mb: 1 }} />
            )}
          />
        ))}
      </Box>
    </Box>
  )
}