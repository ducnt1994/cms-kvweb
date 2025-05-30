"use client";
import {useParams, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {
  Typography,
  Box, TextField, FormControlLabel, Checkbox, RadioGroup, Radio, Button,
} from '@mui/material';
import {Controller, FormProvider, useForm} from "react-hook-form";
import {BannerTemplateDto} from "@/types/response/bannerTemplate.response.dto";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";


export default function CreateBannerTemplate() {

  // create yup schema for validation
  const schema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    backgroundImage: yup.string().required(),
    thumb: yup.string().required(),
    textAlign: yup.string().required(),
    width: yup.number().required(),
    height: yup.number().required(),
    title: yup.object().shape({
      text: yup.string().required(),
      color: yup.string().required(),
      fontSize: yup.number().required(),
      fontWeight: yup.number().required(),
      fontFamily: yup.string().required(),
      lineHeight: yup.number().required(),
      maxWidth: yup.number().required(),
    }).required(),
    description: yup.object().shape({
      text: yup.string().required(),
      color: yup.string().required(),
      fontSize: yup.number().required(),
      fontWeight: yup.number().required(),
      fontFamily: yup.string().required(),
      lineHeight: yup.number().required(),
      maxWidth: yup.number().required(),
    }).required(),
    button: yup.object().shape({
      text: yup.string().required(),
      color: yup.string().required(),
      fontSize: yup.number().required(),
      fontWeight: yup.number().required(),
      fontFamily: yup.string().required(),
      lineHeight: yup.number().required(),
      maxWidth: yup.number().required(),
      isActive: yup.boolean().required(),
      backgroundColor: yup.string().required(),
    }).required(),
    ratio: yup.string().required(),
  });

  const defaultData = {
    name: "",
    category: "",
    backgroundImage : "",
    thumb: "",
    textAlign: "",
    width: 0,
    height: 0,
    title: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0
    },
    description: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0
    },
    button: {
      text: "",
      color: "",
      fontSize: 0,
      fontWeight: 0,
      fontFamily: '',
      lineHeight: 0,
      maxWidth: 0,
      isActive: false,
      backgroundColor: ""
    },
    ratio: ''
  }

  const methods = useForm<BannerTemplateDto>({
    shouldUnregister: false,
    shouldFocusError: false,
    defaultValues: defaultData,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const {control, setValue, getValues, reset, watch, formState: { errors }, handleSubmit} = methods;

  const onSubmit = async () => {
    const data = getValues();
    const res = await axios.put('http://localhost:3007/api/v2/page-builder/banner-gallery/templates/create', data);
    console.log("res", res);
  }

  useEffect(() => {
    if(Object.keys(errors).length > 0) {
      alert('Nhập đủ trường đi -_-')
    }
  }, [errors])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="main"
          className="MainContent"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
            <Typography variant="h4" component="h1">
              Tạo mới banner
            </Typography>
            <Button type={'submit'} variant={'contained'}>Tạo mới</Button>
          </Box>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`name`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tên ảnh" placeholder={'VD: hotel_1'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`category`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tên danh mục" placeholder={'VD: hotel'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`backgroundImage`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Link ảnh nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`thumb`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Link ảnh mẫu" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`ratio`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Tỉ lệ ảnh" placeholder={'VD: 3:1'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />

              <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Vị trí</Typography>
                <Controller
                  name={`textAlign`}
                  control={control}
                  render={({ field }) => (
                    <RadioGroup row {...field}>
                      <FormControlLabel value="left" control={<Radio size="small" />} label="Trái" />
                      <FormControlLabel value="center" control={<Radio size="small" />} label="Giữa" />
                      <FormControlLabel value="right" control={<Radio size="small" />} label="Phải" />
                    </RadioGroup>
                  )}
                />
              </Box>

              <Controller
                name={`width`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Chiều dài" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`height`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Chiều rộng" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>

            <Typography sx={{mt: 3}} variant={'h5'}>Tiêu đề</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`title.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`title.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>


            <Typography sx={{mt: 3}} variant={'h5'}>Mô tả</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`description.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`description.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
            </Box>

            <Typography sx={{mt: 3}} variant={'h5'}>Button</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2
            }}>
              <Controller
                name={`button.text`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Nội dung" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.color`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontSize`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Cỡ chữ" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontWeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Font weight" type={'number'} variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.fontFamily`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Loại font chữ" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.lineHeight`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Line height" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.maxWidth`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} type={'number'} label="Max width" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.backgroundColor`}
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Màu nền" variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
                )}
              />
              <Controller
                name={`button.isActive`}
                control={control}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel value="true" control={<Radio size="small" />} label="Active" />
                    <FormControlLabel value="false" control={<Radio size="small" />} label="Not active" />
                  </RadioGroup>
                )}
              />
            </Box>
        </Box>
      </form>
    </>
  )
}