import { getBlogs } from '@/libs/client';

const CategoryPage = async ({ params }) => {
  const { category } = params; // URLパラメータからカテゴリ名を取得
  const blogs = await getBlogs();

  // 指定されたカテゴリに属する記事を抽出
  const filteredBlogs = blogs.filter((blog) => blog.category === category);

  return (
    <div className="category-page">
      <h1 className="category-header">{category}の記事一覧</h1>
      <div className="category-blogs">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h4>{blog.title}</h4>
              <p>{new Date(blog.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>このカテゴリにはまだ記事がありません。</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
