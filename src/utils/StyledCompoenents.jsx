import styled from "@mui/material/styles/styled";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";



export const Div = styled('div')({});
export const port = "http://localhost:3000"
export const header = {
    "Content-Type": "appication/json"
}

export const DisplayFlex = {
    display: "flex !important",
    alignItems: "center",
}

export const formatIndianNumber = (number) => {
    if (isNaN(number)) {
        return 0;
    }
    const numericValue = parseFloat(number);
    return new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericValue);
};

export const avatarColors = [
    "#8e44ad", // Deep purple
    "#e91e63", // Deep pink
    "#e67d21", // Deep orange
    "#2196f3", // Deep blue
    "#198754", // Deep green
    "#6610f2", // Deep indigo
    "#dc3545", // Deep red
    "#0dcaf0", // Deep cyan
    "#20c997", // Deep Teal
    "#6673FC", //
];

export const avatarLightColors = [
    "#3686FF", // Light blue
    "#7C47F7", // Light indigo
    "#8E6AC1", // Light purple
    "#EB5F9F", // Light pink
    "#FF6B77", // Light red
    "#FFA14E", // Light orange
    "#2BB673", // Light green
    "#31D9FF", // Light cyan
    "#45E8B6", // Light teal
    "#7785FF", // Light
];
export const lightColors = [
    "#f0f8ff", // AliceBlue
    "#faebd7", // AntiqueWhite
    "#f0ffff", // Azure
    "#f5f5dc", // Beige
    "#ffe4c4", // Bisque
    "#faf0e6", // Linen
    "#fff5ee", // Seashell
    "#f5fffa", // MintCream
    "#f0fff0", // Honeydew
    "#f0f8ff", // AliceBlue
];


export const PrymidColor = [
    "#1F3A93", // Deep Blue
    "#22A7F0", // Vivid Sky Blue
    "#26C281", // Emerald Green
    "#F5D76E", // Bright Gold
    "#E87E04", // Rich Amber
    "#BF55EC", // Amethyst Purple
];

export const colorCode = {
    textPurple: {
        color: "#9675ce",
    },
    textWhite: {
        color: "#ffffff",
    },
    textSuccess: {
        color: "#36c6d3",
    },
    textInfo: {
        color: "#659be0",
    },
    textWarning: {
        color: "#f1c40f",
    },
    textDanger: {
        color: "#f44336",
    },
    headerBadgeColor1: {
        backgroundColor: "#ff4081",
    },
    headerBadgeColor2: {
        backgroundColor: "#28a745",
    },
    orangeBgcolor: {
        backgroundColor: "#c46210",
    },
    purpleBgcolor: {
        backgroundColor: "#673ab7",
    },
    blueBgcolor: {
        backgroundColor: "#2196f3",
        color: "#fff",
    },
    cyanBgcolor: {
        backgroundColor: "#36c6d3",
        color: "#fff",
    },
    deepPinkBgcolor: {
        backgroundColor: "#e91e63",
        color: "#fff",
    },
    lightDarkBgcolor: {
        background: "linear-gradient(45deg, #708090, #7c8ea0)",
        color: "#fff",
    },
    bgPrimary: {
        color: "#fff",
        backgroundColor: "#9c78cd",
    },
    bgWarning: {
        color: "#fff",
        backgroundColor: "#ffd200",
    },
    bgSuccess: {
        background: "#5fc29d",
        color: "#fff",
    },
    bgInfo: {
        color: "#fff",
        backgroundColor: "#6bd3f3",
    },
    bgDanger: {
        color: "#fff",
        backgroundColor: "#e55957",
    },
    bgDark: {
        color: "#fff",
        backgroundColor: "#2b2b2c",
    },
    bgOrange: {
        background: "#e67d21",
        color: "#fff",
    },
    bgBlue: {
        background: "#3598dc",
        color: "#fff",
    },
    bgPurple: {
        background: "#8e44ad",
        color: "#fff",
    },
    bgBDanger: {
        background: "linear-gradient(45deg, #f30c41, #eb66dd)",
    },
    bgBBlue: {
        background: "linear-gradient(45deg, #1a77e2, #bfd6f1)",
    },
    bgBGreen: {
        background: "linear-gradient(45deg, #2ed8b6, #59e0c5)",
    },
    bgBOrange: {
        background: "linear-gradient(45deg, #fda582, #f7cf68)",
    },
    bgBPurple: {
        background: "linear-gradient(45deg, #a52dd8, #e29bf1)",
    },
    bgBCyan: {
        background: "linear-gradient(45deg, #40ffed, #29b5af)",
    },
    bgBBlack: {
        background: "linear-gradient(45deg, #708090, #7c8ea0)",
    },
    bgBYellow: {
        background: "linear-gradient(45deg, #ffb64d, #ffcb80)",
    },
    bgBPink: {
        background: "linear-gradient(45deg, #ff5370, #ff869a)",
    },
    red: {
        color: "#fff",
        backgroundColor: "#f44336",
    },
    pink: {
        backgroundColor: "#ff1493",
        color: "#fff",
    },
    yellow: {
        backgroundColor: "#f1c500",
        color: "#fff",
    },
    greenColor: {
        color: "green",
    },
};

export default function useResponsive(query, key, start, end) {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(key));

    const mediaDown = useMediaQuery(theme.breakpoints.down(key));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

    if (query === 'up') {
        return mediaUp;
    }

    if (query === 'down') {
        return mediaDown;
    }

    if (query === 'between') {
        return mediaBetween;
    }

    if (query === 'only') {
        return mediaOnly;
    }
    return null;
}


export const StarRating = ({ rating, maxRating = 5 }) => {
    const stars = Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        return (
            <StarIcon
                key={starValue}
                sx={{
                    color: starValue <= rating ? 'gold' : 'gray',
                    fontSize: '16px',
                }}
            />
        );
    });

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {stars}
            </Box>
        </Box>
    );
};


export const CustomScrollbar = styled(Box)(({
    scrollWidth = "100%",
    scrollHeight = "100%",
    overflowX = false,
    overflowY = false
}) => ({
    width: scrollWidth,
    height: scrollHeight,
    overflowX: overflowX ? 'hidden' : 'auto',
    overflowY: overflowY ? 'hidden' : 'auto',
    position: 'relative',
    transition: 'overflow 0.3s linear',

    '&:hover': {
        overflowX: overflowX ? 'auto' : 'hidden',
        overflowY: overflowY ? 'auto' : 'hidden',
    },

    '&:hover::-webkit-scrollbar': {
        opacity: 1,
    },
    '&::-webkit-scrollbar': {
        height: overflowX ? '7px' : '0px',
        width: overflowY ? '7px' : '0px',
        transition: 'opacity 0.3s ease',
        opacity: 0,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#CFCFCF',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#CFCFCF',
        cursor: 'grabbing'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#fff',
    },
}));