'use client';

import {Box, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

export default function Breadcumb() {
  const router = useRouter()
  return (
    <Box display={'flex'} gap={2} alignItems={'center'} sx={{
      mb: 3,
      p: 2,
      backgroundColor: 'grey.200',
    }}>
      <Typography onClick={() => {
        router.push('/themes')
      }} sx={{
        cursor: 'pointer',
      }} fontSize={16} fontWeight={600}>Danh sách theme</Typography>
      <Typography onClick={() => {
        router.push('/create')
      }} sx={{
        cursor: 'pointer',
      }} fontSize={16} fontWeight={600}>Tạo mới theme</Typography>
    </Box>
  )
}