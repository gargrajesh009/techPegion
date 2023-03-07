import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,discription,imgUrl,newsUrl,author,date} = this.props
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem"}}>
          <img src={imgUrl?imgUrl:'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <p className="card-text"><small>By {author?author:'Unknown'} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
