import {
  Box, Button,
  FormControl, FormControlLabel,
  MenuItem, Radio, RadioGroup,
  Select, TextField,
  Typography
} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {ALL_FONT, LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";
import {useEffect} from "react";

export default function Header({pageName} : {pageName: string}) {
  const {control, setValue, getValues} = useFormContext();
  const patternName = 'header';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const imagesArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.images` });

  const appendPicture = () => {
    if (imagesArray.fields.length >= 1) {return }
    imagesArray.append({
      alt: `ảnh ${imagesArray.fields.length + 1}`,
      src: ""
    });
  };

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.header[platform].find((item : any) => item.key === patternChange)?.name)
  }, [patternChange])

  return (
    <Box >
      <Box display="flex" gap={2} mb={2}>
        <Controller
          name={`page.${pageName}.${patternName}.pattern`}
          control={control}
          defaultValue="style1"
          render={({ field }) => (
            <Select {...field} sx={{ width: '200px' }} size="small">
              {
                // @ts-ignore
                LIST_TYPE_OF_PATTERN.header[platform].map((item : any, index : number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <FormControl component="fieldset">
        <Controller
          name={`page.${pageName}.${patternName}.logo_type_active`}
          control={control}
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel value="image" control={<Radio />} label="Logo hình ảnh" />
              <FormControlLabel value="text" control={<Radio />} label="Logo văn bản" />
            </RadioGroup>
          )}
        />
      </FormControl>

      <Box display="flex" gap={2} my={2}>
        <Controller
          name={`page.${pageName}.${patternName}.logo_text`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.text_style.color`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Màu văn bản" variant="outlined" size="small" fullWidth />
          )}
        />
      </Box>

      <Box display="flex" gap={2}>
        <Controller
          name={`page.${pageName}.${patternName}.text_style.font-size`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Cỡ chữ" variant="outlined" size="small" fullWidth />
          )}
        />
        <Typography>16→31</Typography>
        <Controller
          name={`page.${pageName}.${patternName}.text_style.font-family`}
          control={control}
          defaultValue="style1"
          render={({ field }) => (
            <Select {...field} sx={{ width: '100%' }} size="small">
              {
                ALL_FONT.map((item : any, index : number) => (
                  <MenuItem key={index} value={item}>{item}</MenuItem>
                ))
              }
            </Select>
          )}
        />

      </Box>

      <Box mt={2}>
        <Controller
          name={`page.${pageName}.${patternName}.logo.src`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
          )}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography mb={1}>Ảnh {getValues(`page.${pageName}.${patternName}.images`).length}/12</Typography>
        <Button color="primary" onClick={appendPicture}>Thêm link ảnh</Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mt: 2 }}>
        {imagesArray.fields.map((item, index) => (
          <Box key={index} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: '#eeeeee', p: 2 }}>
            <Controller
              name={`page.${pageName}.${patternName}.images.${index}.src`}
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