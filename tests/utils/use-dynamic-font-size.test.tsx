import { renderHook } from "@testing-library/react-hooks";
import useDynamicFontSize from "../../src/utils/use-dynamic-font-size";

describe("useDynamicFontSize", () => {
    it("should set the root font size based on window height", () => {
        const baseFontSize = 16;

        renderHook(() => useDynamicFontSize(baseFontSize));

        expect(document.documentElement.style.fontSize).toBe(
            `${baseFontSize * (window.innerHeight / 600)}px`
        );
    });
});
