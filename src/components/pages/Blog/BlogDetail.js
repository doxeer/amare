import React from "react";
import { useLocation, Link } from "react-router-dom";
import { blogPosts } from "./data";
import { Helmet } from "react-helmet-async";
import "./BlogDetail.css";

function BlogDetail() {
  const location = useLocation();
  const link = location.pathname.split("/").pop();
  const post = blogPosts.find((p) => p.link === link);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="page-container">
      <Helmet>
        <title>{post.title} - Amare Wellness Products</title>
        <meta
          name="description"
          content={post.excerpt || post.content.substring(0, 160)}
        />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.excerpt || post.content.substring(0, 160)}
        />
        <meta property="og:image" content={post.featuredImage} />
        <meta
          property="og:url"
          content={`https://amarewellnessproducts.com/blogs/${post.link}`}
        />
      </Helmet>
      <div className="blog-detail">
        <h2>{post.title}</h2>
        <img src={post.featuredImage} alt={post.title} className="blog-image" />
        <p>{post.content}</p>
      </div>

      <div className="recommended-products">
        <h3>Recommended Products</h3>
        <div className="product-list-1">
          {post.recommendedProducts?.map((product) => (
            <div key={product.id} className="product-item-1">
              <Link to={product.link}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image-1"
                />
                <p>{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="tags">
        <h4>Tags:</h4>
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
