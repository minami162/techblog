import { getBlogs } from '@/libs/client';
import Link from 'next/link'; // Linkコンポーネントをインポート

import Header from './components/header/page';
import PageTitle from './components/title/page';
import './styles.css'; // スタイルを適用するためのCSSファイルを用意

const BlogPage = async () => {
  // APIからデータを取得
  const blogs = await getBlogs();

  return (
    <div className="top-page"> {/* トップページ用のクラスを追加 */}
      <Header />
      <PageTitle title="ブログ一覧" title_en="blogs" />

      <div className="blog-container">
        {/* データが存在する場合、カードを表示 */}
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link key={blog.id} href={`/techblog/${blog.id}`} passHref>
              <div className="blog-card">
                {/* サムネイル画像とカテゴリ */}
                <div className="blog-thumbnail-container">
                  <p className="blog-category-overlay">
                    {blog.category || '未分類'} {/* カテゴリがない場合は「未分類」を表示 */}
                  </p>
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail.url}
                      alt={blog.title}
                      className="blog-thumbnail"
                    />
                  )}
                </div>
                <div className="blog-content">
                  {/* タイトル */}
                  <h4 className="blog-title">{blog.title}</h4>
                  {/* 概要 */}
                  <p className="blog-summary">{blog.summary}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>ブログデータがありません。</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
