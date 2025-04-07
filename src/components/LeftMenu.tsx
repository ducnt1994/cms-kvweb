'use client'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Collapse, IconButton } from '@mui/material';
import { Home, Create, Palette, ExpandLess, ExpandMore, Add, Brush, Style, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const drawerWidth = 240;
const collapsedDrawerWidth = 65;

const menuItems = [
  { text: 'Home', icon: <Home />, path: '/' },

  {
    text: 'Themes',
    icon: <Palette />,
    subItems: [
      { text: 'Tạo theme', icon: <Brush />, path: '/create' },
      { text: 'Danh sách', icon: <Style />, path: '/themes' },
      { text: 'Ngành hàng', icon: <Style />, path: '/theme-categories' },
    ]
  },
];

export default function LeftMenu() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    Create: false,
    Themes: false,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMenuClick = (text: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  const isItemSelected = (path: string) => pathname === path;
  const isParentSelected = (subItems: any[]) => subItems?.some(item => isItemSelected(item.path));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          transition: 'width 0.2s ease-in-out',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
      }}>
        {!isCollapsed && (
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            CMS Dashboard
          </Typography>
        )}
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <Box key={item.text}>
              {item.subItems ? (
                <>
                  <ListItemButton
                    onClick={() => handleMenuClick(item.text)}
                    selected={isParentSelected(item.subItems)}
                    sx={{
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.12)',
                        },
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {!isCollapsed && (
                      <>
                        <ListItemText primary={item.text} />
                        {openMenus[item.text] ? <ExpandLess /> : <ExpandMore />}
                      </>
                    )}
                  </ListItemButton>
                  {!isCollapsed && (
                    <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem) => (
                          <ListItemButton
                            key={subItem.text}
                            component={Link}
                            href={subItem.path}
                            selected={isItemSelected(subItem.path)}
                            sx={{
                              pl: 4,
                              '&.Mui-selected': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                },
                              },
                            }}
                          >
                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                            <ListItemText primary={subItem.text} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </>
              ) : (
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={isItemSelected(item.path)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                      },
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {!isCollapsed && <ListItemText primary={item.text} />}
                </ListItemButton>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
} 