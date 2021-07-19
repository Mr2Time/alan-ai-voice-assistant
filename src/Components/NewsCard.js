import React, { useState, useEffect, createRef } from "react";

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) {

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
  },[])

  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle])
    }
  },[i, activeArticle, elRefs])

  let activeItem =
    activeArticle === i
      ? "max-w-sm rounded overflow-hidden shadow-lg border-b-8 border-blue-500"
      : "max-w-sm rounded overflow-hidden shadow-lg";

  return (
    <div className={activeItem} ref={elRefs[i]}>
      <div className="hover:bg-gray-100">
        <img
          className="w-full"
          src={urlToImage}
          alt="Sunset in the mountains"
        />
        <div className="flex justify-between w-full py-3 px-4">
          <p className="italic text-gray-500">
            {new Date(publishedAt).toDateString()}
          </p>
          <p className="italic text-gray-600">{source.name}</p>
        </div>
        <div className="px-3 py-2">
          <div>
            <p className="font-gray-800 text-xl mb-2">{title}</p>
          </div>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 m-2">
        <a href={url} className="text-blue-500 hover:text-red-500">
          Learn more
        </a>
        <p className="text-xl text-gray-500">{i + 1}</p>
      </div>
    </div>
  );
}

export default NewsCard;
