import {Box, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Controller, useFieldArray, useFormContext, useWatch} from "react-hook-form";
import {useEffect} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";

export default function BlogPost({pageName} : {pageName: string}) {
  const {control, setValue, getValues} = useFormContext();
  const patternName = 'blog_post';

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});

  const blockArr = useFieldArray({ control, name: `page.${pageName}.${patternName}.blog_posts.blogPosts` });


  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.blog_post[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.blog_post[platform].map((item : any, index : number) => (
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
          <Typography mb={1}>{`Bài viết ${index + 1}`}</Typography>
          <Box display="flex" gap={2} mb={1}>
            <Controller
              name={`page.${pageName}.${patternName}.blog_posts.blogPosts.${index}.title`}
              control={control}
              render={({ field }) => (
                <TextField helperText={`Số kí tự: ${field.value.length}`} {...field} label="Tiêu đề" variant="outlined" size="small" fullWidth />
              )}
            />
            <Controller
              name={`page.${pageName}.${patternName}.blog_posts.blogPosts.${index}.category_name`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Tên cate" variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
          <Box display="flex" gap={2}>
            <Controller
              name={`page.${pageName}.${patternName}.blog_posts.blogPosts.${index}.thumbnail`}
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Link thumb" variant="outlined" size="small" fullWidth />
              )}
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
}