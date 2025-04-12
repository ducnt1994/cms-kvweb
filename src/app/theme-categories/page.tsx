'use client';
import {
  Box, Button,
  IconButton, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import {useEffect, useState} from "react";
import {getListThemeCategories} from "@/api/theme-category";
import {IThemeCategoriesProps} from "@/constants/theme-categories";
import {useRouter} from "next/navigation";

export default function ThemeCategories() {
  const router = useRouter()
  const [listThemeCategories, setListThemeCategories] = useState<IThemeCategoriesProps[]>([]);

  const loadThemeCategories = async () => {
    const res = await getListThemeCategories()
   setListThemeCategories(res.reverse());
  }

  useEffect(() => {
    loadThemeCategories()
  }, []);

  return <>
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
      <Box display={'flex'} mb={3} alignItems={'center'}>
        <Typography flex={1} variant="h4" component="h1">
          Danh sách ngành hàng
        </Typography>
        <Button variant={'outlined'} onClick={() => {
          router.push('/theme-categories/create')
        }}>Thêm mới</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  sx={{fontWeight: 600}}>Tên</TableCell>
              <TableCell  sx={{fontWeight: 600}}>Platform</TableCell>
              <TableCell  sx={{fontWeight: 600}}>Ngách hàng</TableCell>
              <TableCell align="right" sx={{fontWeight: 600}}>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              listThemeCategories.map((category, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell >{category.platform}</TableCell>
                  <TableCell >
                    <ul>
                      {
                        category.child_categories.map((childCategory) => (
                          <li key={childCategory}>
                            <Typography sx={{fontSize: '12px'}}>{childCategory}</Typography>
                          </li>
                        ))
                      }
                    </ul>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => {
                      router.push(`/theme-categories/${category._id}`)
                    }}><BorderColorIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
}