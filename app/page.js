// app/techblog/page.js
import { getBlogs } from '@/libs/client';

const BlogPage = async () => {
  // APIからデータを取得
  const blogs = await getBlogs();

  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {/* データが存在する場合、リストを表示 */}
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <li key={blog.id}>
              <h2>{blog.title}</h2> {/* タイトルを表示 */}
              <p>{blog.content}</p> {/* コンテンツを表示 */}
              <p>{new Date(blog.date).toLocaleDateString()}</p> {/* 日付を表示 */}
            </li>
          ))
        ) : (
          <p>ブログデータがありません。</p> // データがない場合のメッセージ
        )}
      </ul>
    </div>
  );
};

export default BlogPage;