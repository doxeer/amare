import React from "react";
import {  useNavigate } from "react-router-dom";
import { blogPosts } from "./data";
import { Helmet } from "react-helmet-async";

import "./BlogList.css";

function BlogList() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`/blogs/${link}`);
  };

  return (
    <div className="blog-list">
       <Helmet>
        <title>Blog Posts - Amare Wellness Products</title>
        <meta
          name="description"
          content="Discover our latest blog posts on health and wellness. Read insightful articles and stay updated with our latest content."
        />
        <meta
          name="keywords"
          content="blog, health, wellness, articles, Amare Wellness Products"
        />
      </Helmet>
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
