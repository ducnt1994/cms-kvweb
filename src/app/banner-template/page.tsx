"use client";
import {useParams, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";
import {
  Table,
  Select,
  MenuItem,
  Typography,
  Box,
  IconButton,
  Stack,
  CircularProgress, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function BannerTemplate() {
  const params = useParams()
  const router = useRouter()

  const ruleId = params.rule_id as string;
  const [listLogs, setListLogs] = useState<any[]>([]);
  const [totalLogs, setTotalLogs] = useState<number>(0);
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle page size change
  const handlePageSizeChange = (event : any, newValue : number) => {
    setPageSize(newValue);
    setCurrentPage(1); // Reset to first page when changing page size
  };


  const goToDetail = (logId: any) => {
    router.push(`/banner-template/${logId}`);
  }

  const loadBanner = async () => {
    setIsLoading(true);
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/banner-gallery/templates/cms`, {
      params: {
        page: currentPage,
        limit: pageSize,
      }
    })
    console.log("res", res)
    setIsLoading(false);
    setListLogs(res.data.data)
    setTotalPages(res.data.total_page)
  }

  const handleDelete = async (theme_id: any) => {
    // alert to confirm
    const isConfirm = confirm('Xóa là mất?');
    if (!isConfirm) return;
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/page-builder/banner-gallery/templates/cms/delete/${theme_id}`)
    loadBanner()
  }

  useEffect(() => {
    loadBanner()
  }, [pageSize, currentPage]);



  return (
    <>
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
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}>
          <Typography variant="h4" component="h1">
            Danh sách banner tạo trên CMS
          </Typography>
          <Button variant={'contained'} onClick={() => {
            router.push('/banner-template/create')
          }}>Thêm banner</Button>
        </Box>
        {
          isLoading ? (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên</TableCell>
                    <TableCell >Platform</TableCell>
                    <TableCell >Ảnh</TableCell>
                    <TableCell align="right">Hành động</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listLogs.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell >{JSON.stringify(row.platforms)}</TableCell>
                      <TableCell >
                        <img alt={`Ảnh`} src={row.backgroundImage} width={80} height={40}/>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => goToDetail(row._id)}><BorderColorIcon /></IconButton>
                        <IconButton onClick={() => handleDelete(row._id)}><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }

        {/* Pagination controls */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontSize={12}>Tổng số trang: {totalPages}</Typography>
            <IconButton
              size="small"
              aria-label="previous page"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography fontSize={13}>{currentPage}</Typography>
            <IconButton
              size={'small'}
              aria-label="next page"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  )
}