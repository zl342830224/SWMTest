import React from "react";
import {
    ArticleContainer,
    ArticleHead,
    ArticleByline,
    ArticleTeaser,
    ArticleImage,
    HeadArticleInfo,
    ArticleInfo,
} from "../styles/article";
import { ArticleProps } from "../types/article-props";

const Article: React.FC<ArticleProps> = ({
    head,
    teaser,
    image,
    byline,
    hideImage,
    imageRight,
    imageTop,
    teaserOnly,
    noTeaser,
    isHeadArticle,
    bylineCenter,
}) => {
    const imagePath = `./assets/${image.includes("/") ? image.split("/").pop() : image}`;

    return (
        <ArticleContainer
            data-isheadarticle={isHeadArticle}
            data-hideimage={hideImage}
            data-teaseronly={true}
        >
            {isHeadArticle ? (
                <>
                    <HeadArticleInfo>
                        <ArticleHead data-isheadarticle={isHeadArticle}>{head}</ArticleHead>
                        {!teaserOnly && !noTeaser && <ArticleTeaser>{teaser}</ArticleTeaser>}
                        <ArticleByline>{byline.text}</ArticleByline>
                    </HeadArticleInfo>
                    {!hideImage && image && (
                        <ArticleImage
                            src={imagePath}
                            data-isheadarticle={isHeadArticle}
                            alt="Article Image"
                        />
                    )}
                </>
            ) : (
                <>
                    {!hideImage && image && <ArticleImage src={imagePath} alt="Article Image" />}
                    <ArticleInfo data-hideimage={hideImage}>
                        <ArticleHead>{head}</ArticleHead>
                        {!teaserOnly && !noTeaser && <ArticleTeaser>{teaser}</ArticleTeaser>}
                        {!teaserOnly && (
                            <ArticleByline data-bylinecenter={bylineCenter}>
                                {byline.text}
                            </ArticleByline>
                        )}
                    </ArticleInfo>
                </>
            )}
        </ArticleContainer>
    );
};

export default Article;
