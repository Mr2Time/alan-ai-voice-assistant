import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards";
function App() {

  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(0)

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if(command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1); 
        }
      },
    });
  }, []);

  return (
    <div className="h-full w-full border-box overscroll-auto">
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;


