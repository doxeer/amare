import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './data';
import './BlogList.css';  // Import CSS file

function BlogList() {
  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <div className="card-container">
        {blogPosts.map(post => (
          <div className="card" key={post.id}>
            <h3 className="card-title">{post.title}</h3>
            <Link to={`/blog/${post.id}`} className="card-link">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
