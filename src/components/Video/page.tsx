import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function Video({pageName} : {pageName: string}) {
  const {control, setValue, getValues, watch} = useFormContext();
  const patternName = 'video';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});
  const isBlur = watch(`page.${pageName}.${patternName}.is_blur`);
  const isFullScreen = watch(`page.${pageName}.${patternName}.is_full_screen`);

  const subVideos = useFieldArray({ control, name: `page.${pageName}.${patternName}.sub_videos` });

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.video[platform].find((item : any) => item.key === patternChange)?.name)
  }, [patternChange])

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
                LIST_TYPE_OF_PATTERN.video[watch('platform')].map((item: any, index: number) => (
                  <MenuItem key={index} value={item.key}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )}
        />
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2
      }}>
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
          name={`page.${pageName}.${patternName}.thumbnail`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link ảnh nền video" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.video_link`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link video" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.background.image.src`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Ảnh nền" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.is_blur`}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={isBlur} size="small" />}
              label="Lớp phủ"
              sx={{ mb: 2 }}
            />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.is_full_screen`}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={isFullScreen} size="small" />}
              label="Full screen"
              sx={{ mb: 2 }}
            />
          )}
        />
      </Box>

      <Box mb={2} sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2
      }}>
        {subVideos.fields.map((item, index) => {
          return <Box key={index} display="flex" flexDirection={'column'} gap={2} >
            <Typography>{`Video phụ ${index + 1}`}</Typography>
            <Controller
              name={`page.${pageName}.${patternName}.sub_videos.${index}.title`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Tên" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.sub_videos.${index}.description`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Mô tả video phụ" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.sub_videos.${index}.video_link`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Link video phụ" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.sub_videos.${index}.thumbnail`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Link ảnh thumb phụ" variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
        })}
      </Box>
    </Box>
  )
}