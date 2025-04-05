import {Box, Button, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function Service({pageName} : {pageName: string}) {
  const {control, setValue, getValues} = useFormContext();
  const patternName = 'service';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const blockArr = useFieldArray({ control, name: `page.${pageName}.${patternName}.blocks` });


  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.service[platform].find((item : any) => item.key === patternChange)?.name)
  }, [patternChange])

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
                LIST_TYPE_OF_PATTERN.service[platform].map((item : any, index : number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <Controller
        name={`page.${pageName}.${patternName}.background.color`}
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
        )}
      />

      {blockArr.fields.map((item, index) => (
        <Box key={index} mb={2}>
          <Typography mb={1}>{`Dịch vụ ${index + 1}`}</Typography>
          <Box display="flex" gap={2} mb={1}>
            <Controller
              name={`page.${pageName}.${patternName}.blocks.${index}.title`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.blocks.${index}.subTitle`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Mô tả" variant="outlined" size="small" fullWidth multiline rows={2} />
              )}
            />
          </Box>
          <Box display="flex" gap={2}>
            <Controller
              name={`page.${pageName}.${patternName}.blocks.${index}.icon.code`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Tên icon" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.blocks.${index}.src`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
          <Box display="flex" gap={2}>
            <Controller
              name={`page.${pageName}.${patternName}.blocks.${index}.active_type_service`}
              control={control}
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel value="image" control={<Radio />} label="Loại Ảnh" />
                  <FormControlLabel value="icon" control={<Radio />} label="Loại Icon" />
                </RadioGroup>
              )}
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
}