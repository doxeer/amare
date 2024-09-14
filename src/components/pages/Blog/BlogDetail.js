import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './data';
import './BlogDetail.css'; 

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="blog-detail">
      <div className="blog-header">
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span>{post.date}</span>
        </div>
      </div>
      
      {post.featuredImage && (
        <div className="blog-image">
          <img src={post.featuredImage} alt={post.title} />
        </div>
      )}
      
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
      
      {post.tags && (
        <div className="blog-tags">
          <h3>Tags:</h3>
          <ul>
            {post.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
