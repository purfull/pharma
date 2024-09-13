import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../../contexts/MainContext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useResponsive, { avatarColors, avatarLightColors, CustomScrollbar, DisplayFlex, Div, formatIndianNumber, StarRating } from '../../utils/StyledCompoenents';
import { bestSellerData, brandsData, carousalData, newArrivalsData, offersData, productsData, termsData } from './HomeDatas';
import { Button, Grid, Grow, Typography } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';

const Home = () => {

    const { open, theme, currentColor } = useThemeContext()
    console.log("contectValuesss", open, theme);

    const isMobile = useResponsive("down", "md")

    const [currentDates, setcurrentDates] = useState({
        day: "",
        hours: "",
        minutes: "",
        seconds: ""
    })

    const twoDigitFormat = (value) => String(value).padStart(2, '0');
    const updateDateTime = () => {
        const date = new Date();
        setcurrentDates({
            day: twoDigitFormat(date.getDate()),
            hours: twoDigitFormat(date.getHours()),
            minutes: twoDigitFormat(date.getMinutes()),
            seconds: twoDigitFormat(date.getSeconds())
        })
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateDateTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Div>
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0', padding: 0 }}
                {...(true ? { timeout: 500 } : {})}
            >
                <Div>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Dashboard
                    </Typography>
                    <Div sx={{ minHeight: isMobile ? "auto" : "400px", mt: 3 }}>
                        <Carousel dynamicHeight={false} infiniteLoop showThumbs={false} autoPlay>
                            {carousalData?.map((src, index) => (
                                <div key={index} style={{ position: 'relative' }}>
                                    <img
                                        src={carousalData[index]}
                                        alt={`Carousel image ${index + 1}`}
                                        style={{
                                            maxHeight: '400px',
                                            width: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <p
                                        style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '20px',
                                            color: '#fff',
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            padding: '10px',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        Get the best quality products at the lowest prices
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </Div>

                    <Div sx={{ borderTop: "2px solid #dedede"}}>
                        <Grid container columnSpacing={2} sx={{ mt: 1, px: 1, display: "flex", alignItems: "center" }}>
                            {termsData?.map((item, idx) => {
                                return (
                                    <Grid key={idx * 10} item xs={12} md={3} className='p-1'>
                                        <Div sx={{ my: 1, height: "120px" }}>
                                            <Div sx={{
                                                borderRadius: "10px",
                                                p: 2,
                                                backgroundColor: "#fff",
                                                height: "100% !important",
                                                boxSizing: "border-box !important",
                                                // boxShadow: "2px 2px 4px #e8e8e8"
                                            }}>
                                                <Div sx={[DisplayFlex, { height: "100% !important" }]}>
                                                    <Div sx={[DisplayFlex,
                                                        {
                                                            justifyContent: "center",
                                                            height: "100% !important",
                                                            width: "60px",
                                                            // borderRight: "2px solid lightgray",
                                                        },
                                                    ]}>
                                                        <img src={item?.icon} alt={item?.heading} width={idx === 0 ? 35 : 40} height={idx === 0 ? 35 : 40} />
                                                    </Div>
                                                    <Div sx={{ width: "70%" }}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: "11px !important", sm: "14px !important" },
                                                                transform: "translateY(-5px) !important",
                                                                // color: avatarLightColors[6],
                                                                fontWeight: "600 !important",
                                                            }}
                                                        >
                                                            {item?.heading}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px !important",
                                                                color: "gray"
                                                            }}
                                                        >
                                                            {item?.text}
                                                        </Typography>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Grid>
                                )
                            })}
                        </Grid>

                        <Grid container columnSpacing={2} sx={{ mt: 1, px: 1, display: "flex", alignItems: "center" }}>
                            {productsData?.map((item, idx) => {
                                return (
                                    <Grid key={idx * 10} item xs={12} md={3} className='cardHover p-1'>
                                        <Div sx={{
                                            my: 1,
                                            height: "165px",
                                            backgroundImage: `url(${item?.icon})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: "8px",
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${item?.icon})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                zIndex: -1,
                                                filter: 'brightness(80%)',
                                            },
                                        }}>
                                            <Div sx={{
                                                borderRadius: "10px",
                                                p: 2,
                                                height: "100% !important",
                                                boxSizing: "border-box !important",
                                                boxShadow: "2px 2px 4px #e8e8e8",
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                            }}>
                                                <Div sx={[DisplayFlex, { gap: "10px", height: "100% !important" }]}>
                                                    <Div>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "11px !important",
                                                                transform: "translateY(-10px) !important",
                                                                color: avatarColors[2],
                                                                fontWeight: "600 !important",
                                                            }}
                                                        >
                                                            {item?.offerText}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: "11px !important", sm: "14px !important" },
                                                                transform: "translateY(-10px) !important",
                                                                color: "#000",
                                                                fontWeight: "600 !important",
                                                                mt: 1
                                                            }}
                                                        >
                                                            {item?.heading}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px !important",
                                                                color: "gray"
                                                            }}
                                                        >
                                                            {item?.text}
                                                        </Typography>
                                                        <Button sx={[DisplayFlex, {
                                                            mt: 2,
                                                            bgcolor: "#fff",
                                                            color: "#000",
                                                            fontSize: { xs: "12px !important", sm: "10px !important" },
                                                            fontWeight: "600 !important",
                                                            p: 1,
                                                            outline: "none",
                                                            borderRadius: "65px",
                                                            height: "29px",
                                                            border: "none",
                                                            outline: "none",
                                                            borderRadius: "60px",
                                                            width: { xs: "130px !important", md: "110px !important" },
                                                            textTransform: "capitalize"
                                                        }]}>
                                                            Shop Now <IoIosArrowRoundForward size={26} />
                                                        </Button>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Div>

                    <Div>
                        <Div sx={[DisplayFlex, { justifyContent: "space-between", px: 1 }]}>
                            <Div sx={[{ display: { xs: "block", md: "flex" }, alignItems: "center", gap: "27px" }]}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "13px !important", sm: "14px !important" },
                                        fontWeight: "600 !important",
                                    }}
                                >
                                    New Arrivals
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px !important",
                                        color: "gray"
                                    }}
                                >
                                    Don't miss this this opportunity at a special discount just for this week.
                                </Typography>
                            </Div>
                            <Div>
                                <Button sx={[DisplayFlex, {
                                    mt: 2,
                                    bgcolor: "#fff",
                                    color: "#000",
                                    fontSize: { xs: "11px !important", sm: "10px !important" },
                                    fontWeight: "600 !important",
                                    p: 1,
                                    outline: "none",
                                    borderRadius: "65px",
                                    height: "29px",
                                    border: "2px solid #e8e8e8",
                                    outline: "none",
                                    borderRadius: "60px",
                                    width: {xs:"100px",md:"82px"},
                                    textTransform: "capitalize"
                                }]}>
                                    View All <IoIosArrowRoundForward size={22} />
                                </Button>
                            </Div>
                        </Div>

                        {/* scrollWidth={!isMobile && (open ? "1200px" : "1380px")}  */}
                        <CustomScrollbar scrollWidth={!isMobile && (open ? "100%" : "100%")} overflowX={true} overflowY={true}>
                            <Div sx={{ mt: 1, px: 1, display: { xs: "block", md: "flex" }, alignItems: "center" }}>
                                {newArrivalsData?.map((item, idx) => {
                                    return (
                                        <Div key={idx * 10} item xs={12} md={2.4} className='cardHover p-1'>
                                            <Div sx={{ my: 1, width: { xs: "auto", md: "260px" }, height: { xs: "auto", md: "350px" } }}>
                                                <Div sx={{
                                                    borderRadius: "10px",
                                                    p: 2,
                                                    backgroundColor: "#fff",
                                                    height: "100% !important",
                                                    boxSizing: "border-box !important",
                                                    boxShadow: "2px 2px 4px #e8e8e8",
                                                }}>
                                                    <Div sx={[{ height: "100% !important" }]}>
                                                        <Div sx={[
                                                            {
                                                                height: "60% !important",
                                                                width: "100&",
                                                                borderRadius: "8px"
                                                            },
                                                        ]}>
                                                            <img
                                                                src={item?.icon}
                                                                alt={item?.heading}
                                                                width="100%"
                                                                height="100%"
                                                                style={{
                                                                    borderRadius: "8px",
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat'
                                                                }}
                                                            />
                                                        </Div>
                                                        <Div sx={{ mt: 2 }}>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: { xs: "11px !important", sm: "14px !important" },
                                                                    transform: "translateY(-10px) !important",
                                                                    color: avatarLightColors[6],
                                                                    fontWeight: "600 !important",
                                                                }}
                                                            >
                                                                {item?.heading}
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: "12px !important",
                                                                    color: "gray"
                                                                }}
                                                            >
                                                                {item?.text}
                                                            </Typography>

                                                            <Div sx={{ mt: 1, display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                                                <StarRating rating={idx + 1 > 5 ? 4 : idx + 1} maxRating={5} />
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "13px !important",
                                                                        color: "red",
                                                                        fontWeight: 600
                                                                    }}
                                                                >
                                                                    $ {idx * 19 / 4}
                                                                </Typography>
                                                            </Div>

                                                            <Div sx={{ mt: 1 }}>
                                                                <Button sx={{
                                                                    fontSize: { xs: "12px !important", sm: "9px !important" },
                                                                    fontWeight: "600 !important",
                                                                    p: 1,
                                                                    outline: "none",
                                                                    borderRadius: "65px",
                                                                    height: "29px",
                                                                    outline: "none",
                                                                    borderRadius: "45px",
                                                                    width: { xs: "130px !important", md: "110px !important" },
                                                                    textTransform: "capitalize"
                                                                }}
                                                                    variant="outlined"
                                                                    endIcon={<FaPlus size={10} />}
                                                                    onClick={() => { }}
                                                                >
                                                                    Add to cart
                                                                </Button>
                                                            </Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    )
                                })}
                            </Div>
                        </CustomScrollbar>
                    </Div>

                    <Div>
                    <Div sx={[{ display:  "flex" , alignItems: "center", gap: "27px" }]}>
                    <Div sx={[DisplayFlex, { gap: "27px" , width: '100%'}, ]}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "11px !important", sm: "14px !important" },
                                        fontWeight: "600 !important",
                                    }}
                                >
                                    Featured Brands
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px !important",
                                        color: "gray"
                                    }}
                                >
                                    Checkout Our Latest Brans
                                </Typography>
                            </Div>
                            <Div>
                                <Button sx={[DisplayFlex, {
                                    mt: 2,
                                    bgcolor: "#fff",
                                    color: "#000",
                                    fontSize: { xs: "11px !important", sm: "10px !important" },
                                    fontWeight: "600 !important",
                                    p: 1,
                                    outline: "none",
                                    borderRadius: "65px",
                                    height: "29px",
                                    border: "2px solid #e8e8e8",
                                    outline: "none",
                                    borderRadius: "60px",
                                    width: {xs:"100px",md:"100px"},
                                    textTransform: "capitalize"
                                }]}>
                                    View All <IoIosArrowRoundForward size={22} />
                                </Button>
                            </Div>
                        </Div>
                                {/* {!isMobile && (open ? "1200px" : "1380px")} */}
                        <CustomScrollbar scrollWidth={!isMobile && (open ? "100%" : "100%")} overflowX={true} overflowY={true}>
                            <Div sx={{ mt: 1, px: 1,display: { xs: "block", md: "flex" }, flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
                                {brandsData?.map((item, idx) => {
                                    return (
                                        <Div key={idx * 10} item xs={12} md={2.4} className='cardHover p-1'>
                                            <Div sx={{ my: 1,marginLeft:isMobile &&idx%2==0 ?"130px":"", width: { xs: "50%", md: "100px !important" }, height: { xs: "180px", md: "100px !important" } }}>
                                                <Div sx={{
                                                    borderRadius: "50%",
                                                    p: 1.2,
                                                    backgroundColor: "#fff",
                                                    height: "100% !important",
                                                    boxSizing: "border-box !important",
                                                    boxShadow: "2px 2px 4px #e8e8e8",
                                                }}>
                                                    <Div sx={[
                                                        {
                                                            height: "100% !important",
                                                            width: "100&",
                                                            borderRadius: "8px"
                                                        },
                                                    ]}>
                                                        <img
                                                            src={item?.icon}
                                                            alt={item?.heading}
                                                            width="100%"
                                                            height="100%"
                                                            style={{
                                                                borderRadius: "50%",
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                backgroundRepeat: 'no-repeat'
                                                            }}
                                                        />
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                    )
                                })}
                            </Div>
                        </CustomScrollbar>
                    </Div>

                    <Div sx={{ mt: 2 }}>
                    {/* {!isMobile && (open ? "1200px" : "1380px")} */}
                        <CustomScrollbar scrollWidth={!isMobile && (open ? "100%" : "100%")} overflowX={true} overflowY={true}>
                            <Div sx={{ mt: 1, px: 1, display: { xs: "block", md: "flex" }, flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
                                {offersData?.map((item, idx) => {
                                    return (
                                        <Div key={idx * 10} item xs={12} md={2.4} className='cardHover p-1'>                                <Div sx={{
                                            my: 1,
                                            height: "250px",
                                            width: { xs: "100%", md: "300px" },
                                            backgroundImage: `url(${item?.icon})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: "8px",
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${item?.icon})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                zIndex: -1,
                                                filter: 'brightness(80%)',
                                            },
                                        }}>
                                            <Div sx={{
                                                borderRadius: "10px",
                                                p: 2,
                                                height: "100% !important",
                                                boxSizing: "border-box !important",
                                                boxShadow: "2px 2px 4px #e8e8e8",
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                            }}>
                                                <Div sx={[DisplayFlex, { alignItems: "flex-start", mt: 1, height: "100% !important" }]}>
                                                    <Div>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "11px !important",
                                                                transform: "translateY(-10px) !important",
                                                                color: avatarColors[2],
                                                                fontWeight: "600 !important",
                                                            }}
                                                        >
                                                            {item?.offerText}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: "11px !important", sm: "14px !important" },
                                                                transform: "translateY(-10px) !important",
                                                                color: "#000",
                                                                fontWeight: "600 !important",
                                                                mt: 1
                                                            }}
                                                        >
                                                            {item?.heading}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px !important",
                                                                color: "gray"
                                                            }}
                                                        >
                                                            {item?.text}
                                                        </Typography>
                                                        <Button sx={[DisplayFlex, {
                                                            mt: 2,
                                                            bgcolor: "#fff",
                                                            color: "#000",
                                                            fontSize: { xs: "12px !important", sm: "10px !important" },
                                                            fontWeight: "600 !important",
                                                            p: 1,
                                                            outline: "none",
                                                            borderRadius: "65px",
                                                            height: "29px",
                                                            border: "none",
                                                            outline: "none",
                                                            borderRadius: "60px",
                                                            width: { xs: "130px !important", md: "110px !important" },
                                                            textTransform: "capitalize"
                                                        }]}>
                                                            Shop Now <IoIosArrowRoundForward size={26} />
                                                        </Button>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        </Div>
                                        </Div>
                                    )
                                })}
                            </Div>
                        </CustomScrollbar>
                    </Div>

                    <Div>
                        <Div sx={[DisplayFlex, { justifyContent: "space-between", px: 1 }]}>
                            <Div sx={[DisplayFlex, { gap: "27px" }]}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "11px !important", sm: "14px !important" },
                                        fontWeight: "600 !important",
                                    }}
                                >
                                    Best Sellers
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px !important",
                                        color: "gray"
                                    }}
                                >Don't Miss This Offer Untill This December
                                </Typography>
                            </Div>
                            <Div>
                                <Button sx={[DisplayFlex, {
                                    mt: 2,
                                    bgcolor: "#fff",
                                    color: "#000",
                                    fontSize: { xs: "11px !important", sm: "10px !important" },
                                    fontWeight: "600 !important",
                                    p: 1,
                                    outline: "none",
                                    borderRadius: "65px",
                                    height: "29px",
                                    border: "2px solid #e8e8e8",
                                    outline: "none",
                                    borderRadius: "60px",
                                    width: {xs:"100px",md:"82px"},
                                    textTransform: "capitalize"
                                }]}>
                                    View All <IoIosArrowRoundForward size={22} />
                                </Button>
                            </Div>
                        </Div>

                        <Div
                            sx={{
                                mt: 1,
                                px: 1,
                                display: { xs: "block", md: "grid" },
                                gridTemplateColumns: { md: "repeat(3, 1fr)" },
                                gridGap: { xs: "5px", md: "16px" },
                                alignItems: "center"
                            }}>
                            {bestSellerData?.map((item, idx) => {
                                return (
                                    <Div
                                        key={idx * 10}
                                        className='p-1'
                                        sx={{
                                            gridRow: item.status ? "span 4" : "auto",
                                            width: '100%'
                                            
                                        }}
                                    >
                                        {!item.status ?
                                            <Div sx={{ my: 1, }}>
                                                <Div sx={{
                                                    borderRadius: "10px",
                                                    p: 2,
                                                    backgroundColor: "#fff",
                                                    height: "100% !important",
                                                    boxSizing: "border-box !important",
                                                    boxShadow: "2px 2px 4px #e8e8e8"
                                                }}>
                                                    <Div sx={[DisplayFlex, { gap: "20px", height: "80% !important" }]}>
                                                        <Div sx={[DisplayFlex,
                                                            {
                                                                justifyContent: "center",
                                                                height: "100% !important",
                                                                width: "60px",
                                                                borderRight: "2px solid lightgray",
                                                                width: "40%",
                                                                position: "relative"
                                                            },
                                                        ]}>
                                                            <img src={item?.icon} alt={item?.heading} width={70} height={100} style={{
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                backgroundRepeat: 'no-repeat',
                                                                borderRadius: "10px",
                                                            }} />
                                                            <Div sx={[DisplayFlex, { justifyContent: "space-between", width: "100%", position: "absolute", top: 0, px: 0.8 }]}>
                                                                <Div sx={{ display: "inline", fontSize: "12px", backgroundColor: "red", color: "#fff", px: 0.8, borderRadius: "7px" }}>75%</Div>
                                                                <Div>
                                                                    <CiHeart size={24} />
                                                                </Div>
                                                            </Div>
                                                        </Div>
                                                        <Div sx={{ width: "60%" }}>
                                                            <Div sx={{ mb: 1 }}>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: { xs: "12px !important", sm: "14px !important" },
                                                                        transform: "translateY(-5px) !important",
                                                                        fontWeight: "600 !important",
                                                                    }}
                                                                >
                                                                    {item?.heading}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "12px !important",
                                                                        color: "gray"
                                                                    }}
                                                                >
                                                                    {item?.text}
                                                                </Typography>
                                                            </Div>
                                                            <StarRating rating={idx + 1 > 5 ? 4 : idx + 1} maxRating={5} />
                                                            <Div sx={[DisplayFlex, { gap: "10px", mt: 1 }]}>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "15px !important",
                                                                        color: "red",
                                                                        fontWeight: 600
                                                                    }}
                                                                >
                                                                    $ {idx * 19 / 4}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "12px !important",
                                                                        fontWeight: 600,
                                                                        textDecoration: "line-through"
                                                                    }}
                                                                >
                                                                    $ {idx * 19 / 4}
                                                                </Typography>
                                                            </Div>
                                                            <Div sx={{ mt: 1 }}>
                                                                <Button sx={{
                                                                    fontSize: { xs: "12px !important", sm: "10px !important" },
                                                                    fontWeight: "600 !important",
                                                                    p: 1,
                                                                    outline: "none",
                                                                    borderRadius: "65px",
                                                                    height: "29px",
                                                                    outline: "none",
                                                                    borderRadius: "45px",
                                                                    width: "136px",
                                                                    textTransform: "capitalize",
                                                                    display: "flex",
                                                                    justifyContent: "space-around",
                                                                    alignItems: "center"
                                                                }}
                                                                    variant="outlined"
                                                                    onClick={() => { }}
                                                                >
                                                                    Add to cart
                                                                    <FaPlus size={10} />
                                                                </Button>
                                                            </Div>
                                                        </Div>
                                                    </Div>
                                                    <Div sx={[DisplayFlex, { gap: "10px", fontSize: "13px", mt: 1.5, fontWeight: 600 }]}>
                                                        <Div sx={{ display: "inline", backgroundColor: "#e8e8e8", p: 0.6, borderRadius: "7px" }}>{currentDates?.day}</Div>
                                                        <Div sx={{ display: "inline", backgroundColor: "#e8e8e8", p: 0.6, borderRadius: "7px" }}>{currentDates?.hours}</Div>
                                                        <Div sx={{ display: "inline", backgroundColor: "#e8e8e8", p: 0.6, borderRadius: "7px" }}>{currentDates?.minutes}</Div>
                                                        :
                                                        <Div sx={{ display: "inline", backgroundColor: "#e8e8e8", p: 0.6, borderRadius: "7px" }}>{currentDates?.seconds}</Div>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px !important",
                                                                color: "gray"
                                                            }}
                                                        >
                                                            Remains until the end of the offer
                                                        </Typography>
                                                    </Div>
                                                </Div>
                                            </Div>
                                            :
                                            <Div sx={{
                                                my: 1, height: "720px", border: "4px solid #e93737",
                                                borderRadius: "10px"
                                            }}>
                                                <Div sx={{
                                                    borderRadius: "10px",
                                                    p: 4,
                                                    backgroundColor: "#fff",
                                                    height: "100% !important",
                                                    boxSizing: "border-box !important",
                                                }}>
                                                    <Div sx={[{ height: "100% !important" }]}>
                                                        <Div sx={[
                                                            {
                                                                height: "60% !important",
                                                                width: "100&",
                                                                borderRadius: "8px"
                                                            },
                                                        ]}>
                                                            <img
                                                                src={item?.icon}
                                                                alt={item?.heading}
                                                                width="100%"
                                                                height="100%"
                                                                style={{
                                                                    backgroundSize: 'cover',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    borderRadius: "10px",
                                                                }}
                                                            />
                                                        </Div>
                                                        <Div sx={{ mt: 2 }}>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: { xs: "11px !important", sm: "14px !important" },
                                                                    transform: "translateY(-10px) !important",
                                                                    // color: avatarLightColors[6],
                                                                    fontWeight: "600 !important",
                                                                }}
                                                            >
                                                                {item?.heading}
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: "12px !important",
                                                                    color: "gray"
                                                                }}
                                                            >
                                                                {item?.text}
                                                            </Typography>

                                                            <Div sx={{ mt: 1, display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                                                <StarRating rating={idx + 1 > 5 ? 4 : idx + 1} maxRating={5} />
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "13px !important",
                                                                        color: "red",
                                                                        fontWeight: 600
                                                                    }}
                                                                >
                                                                    $ {idx * 19 / 4}
                                                                </Typography>
                                                            </Div>

                                                            <Typography sx={{ fontSize: "12px !important", mt: 1 }}>
                                                                This product is about to run out
                                                            </Typography>

                                                            <Div sx={{ height: "8px", background: "linear-gradient(90deg, rgba(255,231,0,1) 0%, rgba(255,10,10,1) 100%)", borderRadius: "10px" }}>
                                                            </Div>

                                                            <Typography sx={{ fontSize: "13px !important", mt: 1 }}>
                                                                Available Only : <span style={{ fontWeight: 600 }}>40</span>
                                                            </Typography>

                                                            <Div sx={{
                                                                mt: 2,
                                                                fontSize: { xs: "11px !important", sm: "13px !important" },
                                                                fontWeight: "600 !important",
                                                                p: 2.5,
                                                                outline: "none",
                                                                borderRadius: "65px",
                                                                height: "29px",
                                                                outline: "none",
                                                                borderRadius: "10px",
                                                                width: "100%",
                                                                bgcolor: avatarLightColors[6],
                                                                color: "#fff",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "15px",
                                                                cursor: "pointer"
                                                            }}>
                                                                <BsCart size={18} />  Add to cart
                                                            </Div>
                                                        </Div>
                                                    </Div>
                                                </Div>
                                            </Div>
                                        }
                                    </Div>
                                );
                            })}
                        </Div>
                    </Div>
                </Div>
            </Grow>
        </Div>
    )
}

export default Home
