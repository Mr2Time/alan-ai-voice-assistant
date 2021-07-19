import React from "react";
import NewsCard from "./NewsCard";
import alanAiImage from "../Images/alan-ai.jpg";

function NewsCards({ articles }) {
  const infoCards = [
    { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
    {
      color: "#1565c0",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What's up with PlayStation 5",
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from CNN",
    },
  ];

  if (!articles.length) {
    return (
      <div className="w-full h-screen">
        <div className="grid grid-cols-1 place-items-center">
          <img src={alanAiImage} className="w-96 m-4 rounded" alt="alan logo" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {infoCards.map((IF) => (
            <div
              class="flex justify-center rounded-lg m-4 h-60"
              style={{ backgroundColor: IF.color }}
              key={IF.color}
            >
              <div className="space-y-4">
                <h1 className="text-xl text-white font-serif mt-4 text-center">
                  {IF.title}
                </h1>

                <h1 className="text-xl text-white font-serif text-center">
                  <strong>
                    {IF.info ? IF.title.split(" ")[2] + ":" : null}
                  </strong>
                  <br />
                  {IF.info}
                </h1>
                <h1 className="text-xl text-white font-serif text-center">
                  Try Saying: <br /> {IF.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 place-items-center">
        <img src={alanAiImage} className="w-96 m-4 rounded" alt="alan logo" />
      </div>
      <div className="grid grid-cols-1 grid-flow-row place-items-center col-span-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {articles.map((article, i = 1) => (
          <NewsCard article={article} i={i} />
        ))}
      </div>
    </div>
  );
}

export default NewsCards;
