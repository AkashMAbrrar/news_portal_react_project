import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-300 text-sm">
        {news.length} News Found On This Category
      </p>
      <div>
        {news?.map((singeNews) => (
          <NewsCard key={singeNews._id} news={singeNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
