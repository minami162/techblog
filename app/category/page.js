import { getBlogs } from '@/libs/client';
import Link from 'next/link'; // Linkコンポーネントをインポート

import Header from '../components/header/page';
import PageTitle from '../components/title/page';
import '../styles.css'; // スタイルを適用するためのCSSファイルを用意

const BlogPage = async () => {
  const blogs = await getBlogs();

  const categorizedBlogs = blogs.reduce((acc, blog) => {
    const category = blog.category || 'その他';
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
        {Object.entries(categorizedBlogs).map(([category, blogs]) => (
          <div key={category} className="category-section">
            <div className="category-title-box">
              <h3 className="category-title">{category}</h3>
            </div>
            <div className="category-blogs">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/techblog/${blog.id}`} passHref>
                  <div className="blog-card">
                    <span className="category-label">{category}</span>
                    {blog.thumbnail && (
                      <img
                        src={blog.thumbnail.url}
                        alt={blog.title}
                        className="blog-thumbnail"
                      />
                    )}
                    <div className="blog-content">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
