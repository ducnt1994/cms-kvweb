import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";
import {useEffect} from "react";

export default function Introduction({pageName} : {pageName: string}) {
  const {control, setValue, getValues, register, trigger, watch} = useFormContext();
  const patternName = 'introduction';

  const pictureArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.small_images` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.introduction[watch('platform')].find((item : any) => item.key === watch(`page.${pageName}.${patternName}.pattern`))?.name)
  }, [watch(`page.${pageName}.${patternName}.pattern`)])

  return (
    <Box>
        <Box display="flex" gap={2} mb={2}>
          <Controller
            name={`page.${pageName}.${patternName}.pattern`}
            control={control}
            defaultValue="style1"
            render={({ field }) => (
              <Select {...field} sx={{ width: '200px' }} size="small">
                {
                  // @ts-ignore
                  LIST_TYPE_OF_PATTERN.introduction[watch('platform')].map((item : any, index : number) => (
                    <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                  ))
                }
              </Select>
            )}
          />
        </Box>

        <Box display="flex" gap={2} mb={2}>
          <Controller
            name={`page.${pageName}.${patternName}.background.color`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth />
            )}
          />
          <Controller
            name={`page.${pageName}.${patternName}.image.src`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
            )}
          />
        </Box>

        <Box display="flex" gap={2} mb={2}>
          <Controller
            name={`page.${pageName}.${patternName}.title`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth />
            )}
          />
          <Controller
            name={`page.${pageName}.${patternName}.subTitle`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Tiêu đề phụ" variant="outlined" size="small" fullWidth />
            )}
          />
        </Box>

        <Box display="flex" gap={2}>
          <Controller
            name={`page.${pageName}.${patternName}.description`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Mô tả" variant="outlined" size="small" fullWidth multiline rows={2} />
            )}
          />
          <Controller
            name={`page.${pageName}.${patternName}.background.image.src`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Ảnh nền" variant="outlined" size="small" fullWidth />
            )}
          />
        </Box>

      <Box display="flex" gap={2}>
        <Controller
          name={`page.${pageName}.${patternName}.background.overlay`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Lớp phủ đen" variant="outlined" type={"number"} size="small"
                       slotProps={{
                         htmlInput: {
                           min: 0,
                           max: 100,
                           step: 1
                         }
                       }}
                       fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.background.opacity`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Opacity ảnh nền" variant="outlined" type={"number"}
                       slotProps={{
                         htmlInput: {
                           min: 0,
                           max: 100,
                           step: 1
                         }
                       }}
                       size="small" fullWidth />
          )}
        />
      </Box>

        <Box p={2} mt={2} bgcolor="grey.100">
          <Typography fontSize={14} fontWeight={600} sx={{mb: 2}}>Ảnh phụ 2/2</Typography>
          {pictureArray.fields.map((item, index) => (
            <Box key={index} display="flex" gap={2} mb={1}>
              <Controller
                name={`page.${pageName}.${patternName}.small_images.${index}.src`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label={`Link ảnh`} variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
          ))}
        </Box>
      </Box>
  )
}