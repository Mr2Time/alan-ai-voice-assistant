import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {

  const [newsArticles, setNewsArticles] = useState([])

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") {
          setNewsArticles(articles)
        }
      },
    });
  }, []);

  return (
    <div className="h-screen w-screen border-box overscroll-auto">
      <h1>Alan AI NEWS APP</h1>
    </div>
  );
}

export default App;


