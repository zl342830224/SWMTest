import React from "react";
import Article from "../components/Article";
import { NewsProps } from "../types/news-props";
import {
    NewsContainer,
    MainNewsContainer,
    HeadNewsContainer,
    BodyNewsContainer,
    BodyNewsItem,
    SideNewsContainer,
    SideNewsItem,
    ListNewsContainer,
    ListNewsItem,
} from "../styles/news";

const News: React.FC<NewsProps> = ({ articles }) => {
    return (
        <NewsContainer>
            <MainNewsContainer>
                <HeadNewsContainer>
                    <Article key={articles[0].id} {...articles[0]} isHeadArticle={true} />
                </HeadNewsContainer>
                <BodyNewsContainer>
                    <BodyNewsItem>
                        <Article key={articles.slice(-1)[0].id} {...articles.slice(-1)[0]} />
                    </BodyNewsItem>
                    <BodyNewsItem>
                        <Article key={articles[2].id} {...articles[2]} hideImage={true} />
                        <Article key={articles[3].id} {...articles[3]} hideImage={true} />
                    </BodyNewsItem>
                    <BodyNewsItem>
                        <Article key={articles[4].id} {...articles[4]} />
                    </BodyNewsItem>
                </BodyNewsContainer>
            </MainNewsContainer>
            <SideNewsContainer>
                <SideNewsItem>
                    <Article
                        key={articles[1].id}
                        {...articles[1]}
                        noTeaser={true}
                        bylineCenter={true}
                    />
                </SideNewsItem>
                <ListNewsContainer>
                    {articles.slice(-6, -1).map((article) => (
                        <ListNewsItem key={article.id}>
                            <Article
                                key={article.id}
                                {...article}
                                teaserOnly={true}
                                hideImage={true}
                            />
                        </ListNewsItem>
                    ))}
                </ListNewsContainer>
            </SideNewsContainer>
        </NewsContainer>
    );
};

export default News;
