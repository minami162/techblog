import { getBlogs } from '@/libs/client';
import Link from 'next/link'; // Linkコンポーネントをインポート

import Header from '../components/header/page';
import PageTitle from '../components/title/page';
import '../styles.css'; // スタイルを適用するためのCSSファイルを用意

const BlogPage = async () => {
  // APIからデータを取得
  const blogs = await getBlogs();

  // カテゴリごとにブログを分類
  const categorizedBlogs = blogs.reduce((acc, blog) => {
    const category = blog.category || 'その他'; // カテゴリがない場合は「その他」に分類
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(blog);
    return acc;
  }, {});

  return (
    <div className="top-page">
      <Header />
      <PageTitle title="カテゴリー一覧" title_en="category" />

      <div className="blog-container">
        {/* カテゴリごとにブログを表示 */}
        {Object.entries(categorizedBlogs).map(([category, blogs]) => (
          <div key={category} className="category-section">
            {/* カテゴリ名をボックス風にデザイン */}
            <div className="category-title-box">
              <h3 className="category-title">{category}</h3>
            </div>

            {/* カテゴリ内のブログ */}
            <div className="category-blogs">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/techblog/${blog.id}`} passHref>
                  <div className="blog-card">
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
                      <h4 className="blog-title">{blog.title}</h4>
                      {/* 概要 */}
                      <p className="blog-summary">{blog.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
