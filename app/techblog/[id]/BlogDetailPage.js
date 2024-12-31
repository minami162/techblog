"use client";

import { useEffect } from 'react';
import parse from 'html-react-parser'; // HTML文字列をReact要素に変換
import './techblogDetail.css';
import 'prismjs/themes/prism-tomorrow.css';

const BlogDetailPage = ({ blog }) => {
  // ブログデータがない場合の表示
  if (!blog) {
    return <p>ブログが見つかりませんでした。</p>;
  }

  // ブログ本文が空かnullの場合の確認
  const bodyContent = blog.body || [];

  return (
    <div className="blog-detail-container">
      {/* ブログのタイトル */}
      <h1 className="blog-title">{blog.title}</h1>

      {/* サムネイル画像 */}
      {blog.thumbnail && (
        <img
          src={blog.thumbnail.url}
          alt={`サムネイル画像: ${blog.title}`}
          className="blog-thumbnail"
        />
      )}

      {/* 公開日 */}
      <p className="blog-date">
        {new Date(blog.date).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* 本文 */}
      <div className="blog-body">
        {bodyContent.map((entry, index) => (
          <div key={index} className="blog-section">
            {/* リッチテキスト */}
            {entry.rich_editor && (
              <div className="blog-rich-editor preserve-whitespace">
                {parse(entry.rich_editor)}
              </div>
            )}

            {/* セクション画像 */}
            {entry.image && (
              <img
                src={entry.image.url}
                alt={`セクション ${index + 1} の画像`}
                className="blog-section-image"
                width={entry.image.width || 'auto'}
                height={entry.image.height || 'auto'}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailPage;
