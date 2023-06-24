import styled from "styled-components";
import React from "react";

export const NewsContainer = styled.div`
    height: calc(100vh - 50px);
    margin: 0 auto;
    display: flex;
    padding: 20px;

    @media (max-width: 767px) {
        height: auto;
    }
`;

export const MainNewsContainer = styled.div`
    width: 75%;
    height: 100%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const HeadNewsContainer = styled.div`
    width: calc(100% - 17px);
    height: 45%;
    padding-right: 15px;
    border-right: 2px solid #dfe1e6;

    @media (max-width: 767px) {
        border: none;
        width: 100%;
        height: 60%;
    }
`;

export const BodyNewsItem = styled.div`
    height: calc(100% - 30px);
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 2px solid #dfe1e6;

    & > :first-child {
        ${(props) =>
            React.Children.count(props.children) === 2 ? `border-bottom: 1px solid #dfe1e6;` : ""}
    }

    @media (max-width: 767px) {
        height: auto;
        border: none;
        padding: 20px 0px 0px 0px;
        border-top: 2px solid #dfe1e6;
    }
`;

export const BodyNewsContainer = styled.div`
    height: 55%;
    width: 100%;
    margin-top: 30px;
    display: flex;

    & > :first-child {
        padding-left: 0;
    }

    @media (max-width: 767px) {
        height: auto;
        flex-direction: column;
        margin-top: 20px;
        & > :last-child {
            border: none;
        }
    }
`;

export const SideNewsContainer = styled.div`
    width: 25%;
    height: 100%;
    padding-left: 15px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SideNewsItem = styled.div`
    width: 100%;
    height: 45%;
    border-bottom: 1px solid #dfe1e6;

    & > :nth-child(3) {
        position: static;
        bottom: auto;
    }
`;

export const ListNewsContainer = styled.div`
    height: 55%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;

    & > :not(:first-child) {
        border-top: 1px solid #dfe1e6;
    }
`;

export const ListNewsItem = styled.div`
    flex: 1;
`;
