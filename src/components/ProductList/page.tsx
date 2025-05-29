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
import {useEffect, useRef, useState} from "react";
import {LIST_TYPE_OF_PATTERN} from "@/constants/pageBuilder";
import * as XLSX from "xlsx";

export default function ProductList({pageName} : {pageName: string}) {
  const {control, setValue, getValues} = useFormContext();
  const patternName = 'product_list';
  const [fileCount, setFileCount] = useState({
    fileName: "",
    totalProducts: 0,
  });

  const fileInputRef = useRef(null);

  const platform = useWatch({name: 'platform'});
  const patternChange = useWatch({name: `page.${pageName}.${patternName}.pattern`});
  const handleButtonClick = () => {
    // @ts-ignore
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event : any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // @ts-ignore
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Assuming the first sheet is the one we want
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON
      // @ts-ignore
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).filter(item => item.length > 0);
      const columnName = jsonData[0];
      const data : any = []
      jsonData.splice(0,1)
      jsonData.forEach((item) => {
        const obj = {}
        // @ts-ignore
        columnName.forEach((column, index) => {
          // @ts-ignore
          obj[column] = item[index]
        })
        data.push(obj)
      })
      // get file name
      const fileName = file.name;
      setFileCount({
        fileName: fileName,
        totalProducts: data.length,
      })
      setValue(`page.${pageName}.${patternName}.excel_products`, data)
    };

    reader.readAsBinaryString(file);
  };

  const pictureArray = useFieldArray({ control, name: `page.${pageName}.${patternName}.posters` });

  const appendPicture = () => {
    pictureArray.append("");
  };

  const removePicture = (index: number) => {
    pictureArray.remove(index);
  };


  useEffect(() => {
    // @ts-ignore
    setValue(`page.${pageName}.${patternName}.pattern_name`, LIST_TYPE_OF_PATTERN.product_list[platform].find((item : any) => item.key === patternChange)?.name)
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
                LIST_TYPE_OF_PATTERN.product_list[platform]?.map((item : any, index : number) => (
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
          name={`page.${pageName}.${patternName}.poster`}
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Ảnh thumb danh mục" variant="outlined" size="small" fullWidth />
          )}
        />

      {/*  input type file upload*/}

        <input
          type="file"
          accept={`.xlsx`}
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Upload File
        </Button>
      </Box>

      {
        getValues(`page.${pageName}.${patternName}.posters`) && <>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography mb={1}>Ảnh {getValues(`page.${pageName}.${patternName}.posters`).length}/12</Typography>
            <Button color="primary" onClick={appendPicture}>Thêm link ảnh với dạng có nhiều poster</Button>
          </Box>

          <Box p={2} bgcolor="grey.100">
            {pictureArray.fields.map((item, index) => (
              <Box key={index} display="flex" gap={2} mb={1}>
                <Controller
                  name={`page.${pageName}.${patternName}.posters.${index}`}
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label={`Link ảnh`} variant="outlined" size="small" fullWidth />
                  )}
                />
                <Button color="error" onClick={() => removePicture(index)}>Xóa</Button>
              </Box>
            ))}
          </Box>
        </>
      }


      <Box>
        <Typography variant="body2" fontSize={16} sx={{
          mt: 2,
          fontWeight: "bold"
        }} color="textSecondary">
          {fileCount.fileName ? `File: ${fileCount.fileName} - Số lượng sản phẩm: ${fileCount.totalProducts}` : ''}
        </Typography>
      </Box>

    </Box>
  )
}