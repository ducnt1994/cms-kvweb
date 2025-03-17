import {Box, Button} from "@mui/material";

export default function HeaderBreadcumb() {
  return (
    <Box display={'flex'} gap={2}>
      <Button variant={'contained'}>Danh sách theme</Button>
      <Button variant={'contained'}>Tạo theme</Button>
    </Box>
  )
}