import {Box, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function Catalog({pageName} : {pageName: string}) {
  const {control, setValue} = useFormContext();
  const patternName = 'catalog';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const blockArr = useFieldArray({ control, name: `page.${pageName}.${patternName}.categories` });


  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.catalog[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.catalog[platform].map((item : any, index : number) => (
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


        <Box mb={2} sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2
        }}>
          {blockArr.fields.map((item, index) => {
            return <Box key={index} display="flex" flexDirection={'column'} gap={2} >
              <Typography>{`Nhóm hàng ${index + 1}`}</Typography>
              <Controller
                name={`page.${pageName}.${patternName}.categories.${index}.name`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tên" variant="outlined" size="small" fullWidth />
                )}
              />
              <Controller
                name={`page.${pageName}.${patternName}.categories.${index}.thumbnail`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
                )}
              />
            </Box>
          })}
        </Box>
    </Box>
  )
}