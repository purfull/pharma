import React, { useState } from 'react'
import useResponsive, { avatarLightColors, Div } from '../../utils/StyledCompoenents'
import { routesPath } from '../../Routes'
import { IconButton, Slide, Typography } from '@mui/material'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/MainContext'
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { GoSidebarExpand } from 'react-icons/go'

const Sidebar = () => {
    const [activeColor, setActiveColor] = useState([]);

    const theme = useTheme();
    const { open, setOpen, currentColor } = useThemeContext()

    let isMobile = useResponsive("down", "sm");

    const handleDrawerClose = () => {
        setOpen(false);
    };

    console.log("routesPath", routesPath);

    return (
        <Div sx={{ fontSize: "15px !important", width: "100%" }}>
            <Div sx={{ width: '100%', height: "55px", display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                {/* <Typography variant='h4'>LOGO</Typography> */}
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' && <GoSidebarExpand />}
                </IconButton>
            </Div>
            {routesPath?.map((menu, index) => {
                return (
                    <React.Fragment key={index + 10}>
                        <Slide
                            direction="right"
                            in={true}
                            timeout={{ enter: 500 * (index + 1) }}
                            key={index}
                        >
                            <Div>
                                <Link to={menu?.path}
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                                >
                                    <Div
                                        hover
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            cursor: "pointer",
                                            alignItems: "center",
                                            transition: "all 0.5s ease",
                                            height: "38px",
                                            mt: 0.7,
                                            width: "100% !important",
                                            backgroundColor:
                                                activeColor[0] === index ? currentColor : "#fff",
                                            color:
                                                activeColor[0] === index ? "white !important" : "black",
                                            borderBottom: "2px solid #d6dedf",
                                            boxShadow: "2px 2px 5px 0px #d6dedf",
                                            "&:hover": {
                                                backgroundColor: `${currentColor} !important`,
                                                color: "white !important",
                                            },
                                            "&::before": {
                                                content: '""',
                                                display: "block",
                                                width: "5px",
                                                height: "100%",
                                                backgroundColor:
                                                    activeColor[0] === index
                                                        ? `#000 !important`
                                                        : `${currentColor} !important`,
                                            },
                                            "&:hover::before": {
                                                backgroundColor: `#000 !important`,
                                            },
                                            zIndex: 99999,
                                            borderRadius: "4px"
                                        }}
                                        onClick={(e) => {
                                            activeColor[0] !== index
                                                ? setActiveColor([index])
                                                : setActiveColor([]);
                                        }}
                                    >
                                        <Div sx={{ fontSize: "14px", fontWeight: 600, width: "100%" }}>
                                            <Div sx={{
                                                ml: 1,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                fontWeight: 600,
                                            }}
                                            >
                                                <Div sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography sx={{ ml: 1 }}>
                                                        {menu?.icon}
                                                    </Typography>
                                                    <Typography sx={{ ml: 1, fontSize: "12px !important" }}>
                                                        {menu?.title}
                                                    </Typography>
                                                </Div>
                                                <IconButton size="small">
                                                    {menu?.sublinks ? <>
                                                        {activeColor[0] === index ? (
                                                            <IoIosArrowDown
                                                                size={17}
                                                                style={{
                                                                    display: !isMobile ? "" : "none",
                                                                    margin: "0px 8px 0 0",
                                                                    color: "white",
                                                                }}
                                                            />
                                                        ) : (
                                                            <IoIosArrowForward
                                                                size={16}
                                                                style={{
                                                                    display: !isMobile ? "" : "none",
                                                                    margin: "0px 8px 0 0",
                                                                    color: "black",
                                                                }}
                                                            />
                                                        )}
                                                    </> :
                                                        <Div>

                                                        </Div>
                                                    }
                                                </IconButton>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Link>

                                {/* Accordion row */}
                                {activeColor[0] === index &&
                                    menu?.sublinks &&
                                    menu?.sublinks?.length > 0 &&
                                    menu?.sublinks?.map((sideManu, index1) => {
                                        return (
                                            <Link
                                                key={index1 + 10}
                                                to={sideManu?.path}
                                                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                                            >
                                                <Div
                                                    sx={{
                                                        display: activeColor[0] === index ? "flex" : "none",
                                                        cursor: "pointer",
                                                        alignItems: "center",
                                                        height: "35px",
                                                        width: "100% !important",
                                                        borderTopRightRadius:
                                                            activeColor[0] === index && activeColor[1] === index1
                                                                ? "2%"
                                                                : "",
                                                        borderBottomRightRadius:
                                                            activeColor[0] === index && activeColor[1] === index1
                                                                ? "2%"
                                                                : "",
                                                        boxShadow: "2px 2px 5px 0px #d6dedf",
                                                        backgroundColor:
                                                            activeColor[0] === index && activeColor[1] === index1
                                                                ? "#d6dedf"
                                                                : "#fff",
                                                        color: "black",
                                                        transition: "all 0.5s ease",
                                                        "&::before": {
                                                            content: '""',
                                                            display: "block",
                                                            width: "5px",
                                                            height: "100%",
                                                            backgroundColor:
                                                                activeColor[0] === index &&
                                                                    activeColor[1] === index1
                                                                    ? `${avatarLightColors[5]} !important`
                                                                    : `${avatarLightColors[5]} !important`,
                                                        },
                                                        "&:hover": {
                                                            backgroundColor:
                                                                activeColor[0] === index
                                                                    ? `#d6dedf !important`
                                                                    : " ",
                                                        },
                                                        marginTop: "4px !important",
                                                        marginBottom:
                                                            menu.sublinks.length - 1 == index1 ? "4px" : " ",
                                                    }}
                                                >

                                                    <Div
                                                        sx={{
                                                            ml: 1,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            fontSize: '12px',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        <Typography sx={{ ml: 1, fontSize: '12px !important' }}>
                                                            {sideManu?.icon}
                                                        </Typography>
                                                        <Typography sx={{ ml: 1, fontSize: '12px !important' }}>
                                                            {sideManu?.type}
                                                        </Typography>
                                                    </Div>
                                                </Div>
                                            </Link>
                                        );
                                    })
                                }
                            </Div>
                        </Slide>
                    </React.Fragment>
                )
            })}
        </Div >
    )
}

export default Sidebar
