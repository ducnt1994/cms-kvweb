import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box, Button,
  FormControl, FormControlLabel,
  MenuItem, Radio, RadioGroup,
  Select, TextField,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function BannerTop({pageName} : {pageName: string}) {
  const {control, setValue} = useFormContext();
  const patternName = 'banner_top';
  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.banner_top[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.banner_top[platform].map((item : any, index : number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <Box sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
        <Controller
          name={`page.${pageName}.${patternName}.background_color`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.content`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.link`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Đường dẫn url với type image" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.picture.src`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.text_color`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth />
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
    </Box>
  )
}