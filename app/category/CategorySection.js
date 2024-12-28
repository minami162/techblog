"use client"; // クライアントコンポーネントであることを宣言

import { useState } from "react";
import Link from "next/link";

const CategorySection = ({ category, blogs }) => {
  const [showAll, setShowAll] = useState(false);

  // 表示するブログを制御
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div className="category-section">
      <div className="category-title-box">
        <h3 className="category-title">{category}</h3>
      </div>
      <div className="category-blogs-vertical">
        {displayedBlogs.map((blog) => (
          <Link key={blog.id} href={`/techblog/${blog.id}`} passHref>
            <div className="blog-card-vertical">
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail.url}
                  alt={blog.title}
                  className="blog-thumbnail-vertical"
                />
              )}
              <div className="blog-content-vertical">
                <p className="blog-date">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-summary">{blog.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* 「他の記事を読む」ボタン */}
      {blogs.length > 3 && !showAll && (
        <div className="read-more-container">
          <button
            className="read-more-button"
            onClick={() => setShowAll(true)}
          >
            他の記事を読む
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
