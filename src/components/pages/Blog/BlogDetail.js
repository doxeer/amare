import React from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from './data';

function BlogDetail() {
  const location = useLocation();
  const link = location.pathname.split('/').pop();
  const post = blogPosts.find(p => p.link === link);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogDetail;