import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }
  async componentDidMount() {
    this.updateNews();
  }

  capitalizeFirstLetter= (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f87d689e2b50488fa5434d1d1e28a036&page=${this.state.page}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlebNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlebPreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <h2 className="text-center my-3">NewsLetter - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles?.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          style={{overflow:'hidden'}}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((ele) => {
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
  }
}
