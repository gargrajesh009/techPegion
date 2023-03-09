import React from "react";

const NewsItem =(props)=> {
    let { title, discription, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",marginLeft:"-45px"}}>
            {source}
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text-primary">
              <small className="text-primary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}


export default NewsItem