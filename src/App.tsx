import React from "react";
import { GlobalStyle } from "./styles/globalStyle";
import News from "./screens/News";
import newsData from "./news.json";
import useDynamicFontSize from "./utils/use-dynamic-font-size";

const App: React.FC = () => {
    useDynamicFontSize(8);

    return (
        <>
            <GlobalStyle />
            <News articles={newsData.articles} />;
        </>
    );
};

export default App;
