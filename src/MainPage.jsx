import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Div } from './utils/StyledCompoenents';
import Home from './components/Home/Home';
import { useThemeContext } from './contexts/MainContext';
import ContactLists from './components/Contacts/ContactLists';
import { GoSidebarCollapse } from 'react-icons/go';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth - 65}px`,
        marginRight: `${drawerWidth - 170}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const MainPage = () => {

    const theme = useTheme();
    const { open, setOpen } = useThemeContext()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    console.log("opensss", { open, theme });

    return (
        <BrowserRouter>
            <Div className="App">
                <IconButton
                    onClick={handleDrawerOpen}
                    sx={{ marginLeft: "80px", mt: 1 }}
                >
                    <GoSidebarCollapse />
                </IconButton>
                <Box sx={{ display: 'flex' }}>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <Div className="sidebar" sx={{ width: "100%", height: "99.8%" }}>
                            <Sidebar />
                        </Div>
                    </Drawer>
                    <Main open={open} sx={{width: window.innerWidth - drawerWidth}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/Contacts' element={<ContactLists />} />
                        </Routes>
                    </Main>
                </Box>
            </Div>
        </BrowserRouter>
    )
}

export default MainPage
