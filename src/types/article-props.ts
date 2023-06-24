export interface ArticleProps {
    head: string;
    teaser: string;
    image: string;
    byline: {
        text: string;
    };
    hideImage?: boolean;
    imageRight?: boolean;
    imageTop?: boolean;
    teaserOnly?: boolean;
    noTeaser?: boolean;
    isHeadArticle?: boolean;
    bylineCenter?: boolean;
}
