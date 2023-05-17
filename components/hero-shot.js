import React from "react";

const HeroShot = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <img
                src="https://v5.airtableusercontent.com/v1/17/17/1684252800000/1OOwqgTLKHFVjc1dDLkUwQ/fTHDgb3DeY4yPdV1mgduIuwS-BuEPWB8okJB26DbKofaEGFGjOtXcxA5W2XJ4xLSyrQyDiMQeTglQfMTeoaHnQ/66HL_kaM3P8fGPIKgcrv0hQyrUbsV5Ayudv76q1PuLo"
                alt="Hero Shot"
                style={{ width: '75%', height: 'auto' }}
            />
        </div>
    );
};

const ShootName = (props) => {
    const getRandomColor = () => {
        const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800080", "#FFA500", "#008000", "#FFC0CB"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const rectangleStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: getRandomColor(),
        width: "400px", // Set the width to 400 pixels
        height: "200px", // Set the height to 200 pixels
        marginRight: "10px", // Add margin to the right side of the rectangle
        maxWidth: "calc(100% - 20px)", // Limit the maximum width to ensure it doesn't touch the right-hand side
        overflow: "hidden", // Hide any text that overflows the block
    };

    const textStyle = {
        fontFamily: "Times New Roman",
        fontSize: "32px",
        color: "black",
        margin: "0",
        wordBreak: "break-all", // Allow long words to break and wrap within the block
        textAlign: "center", // Center-align the text
    };

    return (
        <div style={rectangleStyle}>
            <HeroShot />
            <h1 style={textStyle}>{props.children}</h1>
        </div>
    );
};

export default ShootName;
