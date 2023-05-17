import React from "react";

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
            <h1 style={textStyle}>{props.children}</h1>
        </div>
    );
};

export default ShootName;

