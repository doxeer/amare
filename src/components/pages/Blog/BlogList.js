import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "./data";
import "./BlogList.css";

function BlogList() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`/blogs/${link}`);
  };

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <div className="card-container">
        {blogPosts.map((post) => (
          <div className="card" key={post.id}>
            <img src={post.imageURL}/>
            <div className="card-right">
              <h3 className="card-title">{post.title}</h3>
              <div
                onClick={() => handleNavigate(post.link)}
                className="card-link"
              >
                Read More
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
