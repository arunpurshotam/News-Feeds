import React from "react";

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span style={{zIndex:'1',left:'90%'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span></h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toUTCString()} </small> </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn btn-dark">
               Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
