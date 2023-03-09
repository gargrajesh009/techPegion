import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f87d689e2b50488fa5434d1d1e28a036&page=${page}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  });

  const fetchMoreData = () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <>
      <h2 className="text-center my-3">
        NewsLetter - Top {capitalizeFirstLetter(props.category)} HeadLines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  {
                    <NewsItem
                      title={ele.title}
                      discription={ele.description}
                      imgUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={ele.author}
                      date={ele.publishedAt}
                      source={ele.source.name}
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
