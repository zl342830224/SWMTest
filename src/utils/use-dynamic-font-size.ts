import { useEffect } from "react";

const useDynamicFontSize = (baseFontSize: number): void => {
    const setRootFontSize = (): void => {
        const root = document.documentElement;
        const windowHeight = window.innerHeight;

        root.style.fontSize = `${baseFontSize * (windowHeight / 600)}px`;
    };

    useEffect(() => {
        setRootFontSize();

        window.addEventListener("resize", setRootFontSize);

        return () => {
            window.removeEventListener("resize", setRootFontSize);
        };
    });
};

export default useDynamicFontSize;
