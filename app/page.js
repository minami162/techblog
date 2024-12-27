// app/techblog/page.js
import { getBlogs } from '@/libs/client';

import Header from './header/page';
import PageTitle from './components/title/page';
import './styles.css'; // スタイルを適用するためのCSSファイルを用意

const BlogPage = async () => {
  // APIからデータを取得
  const blogs = await getBlogs();

  return (
    <div>
      <Header />
      <PageTitle title="ブログ一覧" title_en="blog" />

      <div className="blog-container">
        {/* データが存在する場合、カードを表示 */}
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {/* サムネイル画像 */}
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail.url}
                  alt={blog.title}
                  className="blog-thumbnail"
                />
              )}
              <div className="blog-content">
                {/* 日付 */}
                <p className="blog-date">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                {/* タイトル */}
                <h2 className="blog-title">{blog.title}</h2>
                {/* 概要 */}
                <p className="blog-summary">{blog.summary}</p>
              </div>
            </div>
          ))
        ) : (
          <p>ブログデータがありません。</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
