import React, { useState, useEffect } from "react";
import "./Article.scss";

const Article = ({ content }) => {
  const [article, setArticle] = useState([]);

  const createParagraphs = (content) => {
    return content.reduce((accumulator, item) => {
      let paragraph = (
        <p key={item} className="article__paragraph">
          {item}
        </p>
      );

      accumulator.push(paragraph);
      return accumulator;
    }, []);
  };

  const createAssets = (content) => {
    return content.reduce((accumulator, item) => {
      let image = (
        <img key={item} className="article__image" src={item} alt={item} />
      );
      accumulator.push(image);
      return accumulator;
    }, []);
  };

  useEffect(() => {
    let title = (
      <h1 key={`article-${content.title}`} className="article__title">
        {content.title}
      </h1>
    );

    let themeContent = createParagraphs(content.content);

    let themeAssets = createAssets(content.assets);

    let subThemes;

    if (content.subContent.length) {
      subThemes = content.subContent.reduce((accumulator, item) => {
        let subThemeTitle = (
          <h2 key={item.title} className="article__subtitle">
            {item.title}
          </h2>
        );
        let subThemeParagraphs = createParagraphs(item.content);
        let subThemeAssets = createAssets(item.assets);

        accumulator.push(subThemeTitle, subThemeParagraphs, subThemeAssets);
        return accumulator;
      }, []);
    }

    setArticle([title, themeContent, themeAssets, subThemes]);
  }, []);

  return <article className="article">{article}</article>;
};

export default Article;
