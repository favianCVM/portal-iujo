import React, { useState, useEffect, useRef } from "react";
import "./Article.scss";
import Navigator from "../Navigator/Navigator";

const Article = ({ content, objective, contentIndex }) => {
  const [article, setArticle] = useState([]);
  const scroll = useRef(null);

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

  const displayAndScroll = async (array) => {
    await setArticle(array);
    if (scroll.current) scroll.current.scrollIntoView();
  };

  useEffect(() => {
    if (content) {
      let title;
      if (!objective) {
        title = (
          <h2
            key={`article-${content.title}`}
            ref={scroll}
            className="article__title"
          >
            {content.title}
          </h2>
        );
      } else {
        title = (
          <h2 key={`article-${content.title}`} className="article__title">
            {content.title}
          </h2>
        );
      }

      let themeContent = createParagraphs(content.content);

      let themeAssets = createAssets(content.assets);

      let subThemes;

      if (content.subContent.length) {
        subThemes = content.subContent.reduce((accumulator, item) => {
          let subThemeTitle;
          if (objective === item.title) {
            subThemeTitle = (
              <h2 key={item.title} ref={scroll} className="article__subtitle">
                {item.title}
              </h2>
            );
          } else {
            subThemeTitle = (
              <h2 key={item.title} className="article__subtitle">
                {item.title}
              </h2>
            );
          }
          let subThemeParagraphs = createParagraphs(item.content);
          let subThemeAssets = createAssets(item.assets);

          accumulator.push(subThemeTitle, subThemeParagraphs, subThemeAssets);
          return accumulator;
        }, []);
      }

      displayAndScroll([title, themeContent, themeAssets, subThemes]);
    } else {
      setArticle(null);
    }
  }, [content, objective]);

  return (
    <article className="article">
      {article}
      {<Navigator contentIndex={contentIndex} />}
    </article>
  );
};

export default Article;
