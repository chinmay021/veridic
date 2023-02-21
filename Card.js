import React from "react";

const Card = ({ post }) => {
  console.log(post);

  return (
    <>
      <a href={post.link} target="_blank">
        <div className="card-wrapper">
          <div className="image-wrapper">
            <img src={post.parselyMeta["parsely-image-url"]} alt="image"></img>
          </div>
          <div className="card-details">
            <p className="card-title">{post.title.rendered}</p>
            <div className="card-date-tag-wrapper">
              <span className="card-date">{post.date.slice(0, 10)}</span>
              <span className="card-category">
                {post.parselyMeta["parsely-section"]}
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
