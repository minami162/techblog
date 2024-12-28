import { getBlogs } from '@/libs/client';
import Header from '../components/header/page';
import PageTitle from '../components/title/page';
import CategorySection from './CategorySection'; // クライアントコンポーネントをインポート
import '../styles.css';

const BlogPage = async () => {
  const blogs = await getBlogs();

  // カテゴリごとにブログを分類
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
      <div className="blog-container-vertical">
        {Object.entries(categorizedBlogs).map(([category, blogs]) => (
          <CategorySection key={category} category={category} blogs={blogs} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
