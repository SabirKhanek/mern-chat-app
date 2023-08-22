import React, { useCallback, useEffect } from "react";

export const useResponsive = () => {
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [windowHeight, setWindowHeight] = React.useState(0);
    const [screenType, setScreenType] = React.useState("INITIAL");

    const updateWindowDimensions = useCallback(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

        if (window.innerWidth >= 1024) {
            setScreenType("XLAPTOP");
        } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
            setScreenType("LAPTOP");
        } else if (window.innerWidth < 768 && window.innerWidth > 425) {
            setScreenType("TABLET")
        } else {
            setScreenType("MOBILE");
        }
    }, [windowWidth]);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);

        return function cleanup() {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, [updateWindowDimensions]);

    return {
        windowWidth,
        windowHeight,
        screenType
    };
};
