import {
  Box,
  Button,
  FormControl,
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

export default function Menu({pageName} : {pageName: string}) {
  const {control, setValue} = useFormContext();
  const patternName = 'menu';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});
  const blockArr = useFieldArray({ control, name: `page.${pageName}.${patternName}.list` });

  const appendPicture = () => {
    if (blockArr.fields.length >= 12) {return }
    blockArr.append({
      src: "",
      alt: `Menu ${blockArr.fields.length + 1}`,
    });
  }

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.menu[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.menu[platform].map((item : any, index : number) => (
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
        <FormControl component="fieldset">
          <Controller
            name={`page.${pageName}.${patternName}.button_navigation.type`}
            control={control}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value="phone" control={<Radio />} label="Điều hướng SĐT" />
                <FormControlLabel value="link" control={<Radio />} label="Điều hướng url" />
              </RadioGroup>
            )}
          />
        </FormControl>
        <Controller
          name={`page.${pageName}.${patternName}.background.color`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth />
          )}
        />
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
        <Controller
          name={`page.${pageName}.${patternName}.description`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Tiêu đề phụ" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.button_navigation.title`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Tiêu đề nút điều hướng" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.button_navigation.link`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Link nút điều hướng" variant="outlined" size="small" fullWidth />
          )}
        />
        <Controller
          name={`page.${pageName}.${patternName}.button_navigation.phone`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="SĐT nút điều hướng" variant="outlined" size="small" fullWidth />
          )}
        />

      </Box>

      <Box display={'flex'} gap={2} mt={2} alignItems={'center'}>
        <Typography fontSize={14} fontWeight={600}>Danh sách ảnh</Typography>
        <Button
          onClick={appendPicture}
          variant={'text'}>Thêm ảnh / món ăn</Button>
      </Box>
      <Box mb={2} sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2
      }}>
        {blockArr.fields.map((item, index) => {
          return <Box key={index} display="flex" flexDirection={'column'} gap={2} sx={{
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '4px'
          }}>
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.src`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.name`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Tên món ${index + 1}`} variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.list.${index}.price`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label={`Giá món ${index + 1}`} variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
        })}
      </Box>
    </Box>
  )
}