import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?sources=techcrunch&apiKey=f87d689e2b50488fa5434d1d1e28a036&pageSize=18";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false,
    });
  }

  handlebNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=f87d689e2b50488fa5434d1d1e28a036&page=${
      this.state.page + 1
    }&pageSize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  handlebPreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=f87d689e2b50488fa5434d1d1e28a036&page=${
      this.state.page - 1
    }&pageSize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-3">TechPegion - Top HeadLines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                {!this.state.loading && (
                  <NewsItem
                    title={ele.title}
                    discription={ele.description}
                    imgUrl={ele.urlToImage}
                    newsUrl={ele.url}
                  />
                )}
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlebPreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResult / 18)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handlebNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
