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

export default function Banner({pageName} : {pageName: string}) {
  const {control, setValue, getValues} = useFormContext();
  const patternName = 'banner';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const pictureArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.picture.images` });
  const bannerSmallArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.bannerSmall.images` });

  const appendPicture = () => {
    if (pictureArray.fields.length >= getValues(`page.${pageName}.${patternName}.picture.max_number_picture`)) {return }
    pictureArray.append({
      alt: `ảnh ${pictureArray.fields.length + 1}`,
      embbed_link: "",
      number: pictureArray.fields.length + 1,
      src: ""
    });
  };

  const removePicture = (index: number) => {
    if(pictureArray.fields.length === 1) {
      return
    }
    pictureArray.remove(index);
  };

  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.banner[platform].find((item : any) => item.key === patternChange)?.name)
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
               LIST_TYPE_OF_PATTERN.banner[platform].map((item : any, index : number) => (
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
         name={`page.${pageName}.${patternName}.description`}
         control={control}
         render={({ field }) => (
           <TextField helperText={`Số kí tự: ${field.value?.length}`} {...field} label="Mô tả" variant="outlined" size="small" fullWidth />
         )}
       />
     </Box>

     <Box display="flex" gap={2} mb={2}>
       <Controller
         name={`page.${pageName}.${patternName}.title`}
         control={control}
         render={({ field }) => (
           <TextField
              helperText={`Số kí tự: ${field.value?.length}`}
             {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth />
         )}
       />
       <Controller
         name={`page.${pageName}.${patternName}.button_navigation.title`}
         control={control}
         render={({ field }) => (
           <TextField {...field} label="Tên nút" variant="outlined" size="small" fullWidth />
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
       <Controller
         name={`page.${pageName}.${patternName}.text_color`}
         control={control}
         render={({ field }) => (
           <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth placeholder={'black hoặc white'}/>
         )}
       />

     </Box>
     <Controller
       name={`page.${pageName}.${patternName}.background.type`}
       control={control}
       render={({ field }) => (
         <RadioGroup row {...field}>
           <FormControlLabel value="color" control={<Radio />} label="Nền màu" />
           <FormControlLabel value="image" control={<Radio />} label="Nền ảnh" />
         </RadioGroup>
       )}
     />

     <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
       <Box>
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
           <Typography>Banner slide {getValues(`page.${pageName}.${patternName}.picture.images`).length}/6</Typography>
           <Button color="primary" onClick={appendPicture}>Thêm link ảnh</Button>
         </Box>
         <Box bgcolor={'grey.100'} p={2} display="flex" flexDirection={'column'} gap={2}>
           {pictureArray.fields.map((item, index) => (
             <Box key={index} display="flex" gap={2}>
               <Controller
                 name={`page.${pageName}.${patternName}.picture.images.${index}.src`}
                 control={control}
                 render={({ field }) => (
                   <TextField sx={{flex: 1}} {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth />
                 )}
               />
               <Button color="error" onClick={() => removePicture(index)}>Xóa</Button>
             </Box>
           ))}
         </Box>
       </Box>

       <Box>
         <Typography mb={1}>Banner phụ 2/2</Typography>
         <Box p={2} bgcolor="grey.100">
           {bannerSmallArray.fields.map((item, index) => (
             <Box key={index} display="flex" gap={2} mb={2}>
               <Controller
                 name={`page.${pageName}.${patternName}.bannerSmall.images.${index}.src`}
                 control={control}
                 render={({ field }) => (
                   <TextField {...field} label={`Link ảnh ${index + 1}`} variant="outlined" size="small" fullWidth />
                 )}
               />
             </Box>
           ))}
         </Box>
       </Box>
     </Box>
   </Box>
  )
}
