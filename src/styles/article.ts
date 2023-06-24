import styled from "styled-components";
import { ArticleContainerProps } from "../types/article-container-props";

export const ArticleContainer = styled.div<ArticleContainerProps>`
    width: 100%;
    height: ${({
        "data-teaseronly": teaseronly,
        "data-hideimage": hideimage,
    }: ArticleContainerProps) => (teaseronly ? "100%" : hideimage ? "100%" : "50%")};

    display: flex;
    flex-direction: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "row" : "column"};

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ArticleHead = styled.div<ArticleContainerProps>`
    font-size: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "3.5em" : "2em"};
    line-height: 1.2;
    font-weight: 500;
    margin-top: 10px;
    max-height: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "8.4em" : "7.2em"};
    display: -webkit-box;
    -webkit-line-clamp: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "2" : "3"};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "3em" : "1.5em"};
        max-height: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "7.2em" : "3.6em"};
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "2.2em" : "1.2em"};
        max-height: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "6em" : "3em"};
        -webkit-line-clamp: 2;
    }

    @media (max-width: 767px) {
        font-size: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "2em" : "2em"};
    }
`;

export const ArticleByline = styled.p<ArticleContainerProps>`
    display: block;
    font-size: 1.2em;
    position: ${({ "data-bylinecenter": bylinecenter }: ArticleContainerProps) =>
        bylinecenter ? "static" : "absolute"};
    bottom: 0;

    @media (min-width: 1024px) and (max-width: 1366px) {
        font-size: 1.1em;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1em;
    }

    @media (max-width: 767px) {
        position: static;
    }
`;

export const ArticleTeaser = styled.p`
    max-height: 5.85em;
    font-size: 1.3em;
    line-height: 1.5;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 1024px) and (max-width: 1366px) {
        font-size: 1.1em;
        max-height: 4.95em;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1em;
        max-height: 4.5em;
    }
`;

export const ArticleImage = styled.img<ArticleContainerProps>`
    width: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "55%" : "100%"};
    height: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
        isheadarticle ? "100%" : "52%"};
    display: block;

    @media (max-width: 767px) {
        height: ${({ "data-isheadarticle": isheadarticle }: ArticleContainerProps) =>
            isheadarticle ? "100%" : "40%"};
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 48%;
    }
`;

export const HeadArticleInfo = styled.div`
    flex: 1;
    width: 100%;
    height: calc(100% - 1px);
    padding: 0px 10px;
    border-bottom: 1px solid #dfe1e6;
    display: block;
    position: relative;

    @media (max-width: 767px) {
        border: none;
        padding: 0px;
    }
`;

export const ArticleInfo = styled.div<ArticleContainerProps>`
    padding: 5px 10px;
    height: ${({ "data-hideimage": hideimage }: ArticleContainerProps) =>
        hideimage ? "100%" : "48%"};
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 767px) {
        height: ${({ "data-hideimage": hideimage }: ArticleContainerProps) =>
            hideimage ? "100%" : "60%"};
    }
`;
