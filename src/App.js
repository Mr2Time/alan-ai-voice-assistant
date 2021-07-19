import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards";

function App() {

  const [newsArticles, setNewsArticles] = useState([])

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
        }
      },
    });
  }, []);

  return (
    <div className="h-full w-full border-box overscroll-auto">
      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;


