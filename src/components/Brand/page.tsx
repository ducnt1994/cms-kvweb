import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function Brands({pageName} : {pageName: string}) {

  const {control, setValue, getValues, watch} = useFormContext();
  const patternName = 'brands';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const pictureArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.picture` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.brands[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.brands[platform].map((item : any, index : number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <Typography mb={1}>Brand</Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2
      }} p={2} border={1} borderColor="blue.300" borderRadius={2} bgcolor="grey.100">
        {pictureArray.fields.map((item, index) => (
          <Controller
            key={item.id}
            name={`page.${pageName}.${patternName}.picture.${index}.src`}
            control={control}
            render={({ field }) => (
              <TextField {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth />
            )}
          />
        ))}
      </Box>
    </Box>
  )
}