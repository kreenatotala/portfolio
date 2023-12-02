import React from 'react';
import { Animation } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/Slider';
import { ArticleCardSkeleton } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/components/ArticleCard';
import { ArticleCard } from '../../components/ArticleCard';
import { useSiteMetadata } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata';
import { useLocalDataSource, useMediumFeed } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/sections/Articles/data';
import { PageSection } from '../../../../node_modules/gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css';

// enum ArticleSource {
//     Medium = 'medium',
//     Blog = 'blog',
// }

// interface ArticleSourceConfiguration {
//     [ArticleSource.Medium]?: {
//         profileUrl: string;
//     };
//     [ArticleSource.Blog]?: {
//         valid: boolean;
//     };
// }

// interface ArticlesSectionProps extends PageSection {
//     sources: ArticleSource[];
// }

export function ArticlesSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const [articles, setArticles] = React.useState<ArticleCard[]>([]);
    // const configuration = validateAndConfigureSources(props.sources);

    async function collectArticlesFromSources(): Promise<ArticleCard[]> {
        // const mediumConfig = configuration[ArticleSource.Medium];
        // const blogConfig = configuration[ArticleSource.Blog];
        const articleList: ArticleCard[] = [];

        articleList.push({
            category: "Chewy",
            title: "Software Development Co-op",
            publishedAt: "July 2023 - Dec 2023,\nJuly 2022 - Dec 2022", // https://stackoverflow.com/a/5646753
            link: "blank",
        });

        // articleList.push({
        //     category: "Chewy",
        //     title: "Software Development Co-op",
        //     publishedAt: "July 2022 - Dec 2022", // https://stackoverflow.com/a/5646753
        //     link: "blank",
        // });

        articleList.push({
            category: "Khoury College of Computer Sciences",
            title: "Teaching Assistant",
            publishedAt: "Sept 2021 - July 2023", // https://stackoverflow.com/a/5646753
            link: "blank",
        });

        // articleList.push({
        //     category: "FirstByte",
        //     title: "Lead Website Developer",
        //     publishedAt: "Sept 2021 - April 2023", // https://stackoverflow.com/a/5646753
        //     link: "blank",
        // });

        articleList.push({
            category: "mHealth Research Group",
            title: "ML Research Assistant",
            publishedAt: "Jan 2021 - April 2021", // https://stackoverflow.com/a/5646753
            link: "blank",
        });

        // if (mediumConfig !== undefined) {
        //     const mediumArticles = await useMediumFeed(mediumConfig.profileUrl);
        //     if (mediumArticles.length > 0) {
        //         mediumArticles.forEach((article) => {
        //             articleList.push({
        //                 category: article.categories[0],
        //                 title: article.title,
        //                 publishedAt: new Date(article.pubDate.replace(/-/g, '/')), // https://stackoverflow.com/a/5646753
        //                 link: article.link,
        //             });
        //         });
        //     }
        // }

        // if (blogConfig !== undefined) {
        //     const blogArticles = response.allArticle.articles;
        //     if (blogArticles.length > 0) {
        //         blogArticles.forEach((article) => {
        //             articleList.push({
        //                 category: article.categories[0],
        //                 title: article.title,
        //                 publishedAt: new Date(article.date.replace(/-/g, '/')),
        //                 link: article.slug,
        //                 readingTime: article.readingTime.text,
        //             });
        //         });
        //     }
        // }

        return articleList;
    }

    React.useEffect(() => {
        (async function () {
            setArticles(await collectArticlesFromSources());
        })();
    }, []);

    return (
        <Animation type="fadeUp" delay={1000}>
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Articles]}>
                    {articles.length > 0
                        ? articles.slice(0, 3).map((article, key) => {
                              return <ArticleCard key={key} data={article} />;
                          })
                        : [...Array(3)].map((_, key) => {
                              return <ArticleCardSkeleton key={key} />;
                          })}
                </Slider>
            </Section>
        </Animation>
    );
}

// validateAndConfigureSources: Sources for articles can be defined as props (e.g. sources=["Medium"])
// Currently, only Medium can be used as a source but it is thinkable to extend this approach to other
// sources (e.g. an integrated Markdown blog). To collect all articles from the source, there is a
// specific configuration needed for each source type. For example, to collect articles from Medium,
// we need the profile URL. This function is responsible for validating that at least one source is
// defined. It than adds the needed configuration properties to each source and returns the config.

// function validateAndConfigureSources(sources: ArticleSource[]): ArticleSourceConfiguration {
//     const configuration: ArticleSourceConfiguration = {};

//     if (sources.length > 0) {
//         // Configure Medium
//         if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Medium)) {
//             const siteMetadata = useSiteMetadata();
//             configuration[ArticleSource.Medium] = { profileUrl: siteMetadata.social.medium };
//         }

//         // Configure Blog (actually no real configuration is required yet)
//         if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Blog)) {
//             configuration[ArticleSource.Blog] = { valid: true };
//         }
//     } else {
//         throw new Error('No Source for Articles defined.');
//     }

//     return configuration;
// }
