// app/techblog/page.js
import { getBlogs } from '@/libs/client';

import Header from './header/page';
import PageTitle from './components/title/page';

const BlogPage = async () => {
  // APIからデータを取得
  const blogs = await getBlogs();
  

  return (
    <div>
      <Header/>
      <PageTitle title='ブログ一覧' title_en='blog' />

     

      <ul>
        {/* データが存在する場合、リストを表示 */}
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            
            <article>
            <li key={blog.id}>
              <h2>{blog.title}</h2> {/* タイトルを表示 */}
              <p>{blog.body}</p> {/* コンテンツを表示 */}
              
              <p>{new Date(blog.date).toLocaleDateString()}</p> {/* 日付を表示 */}
            </li>
            </article>
          ))
        ) : (
          <p>ブログデータがありません。</p> // データがない場合のメッセージ
        )}
      </ul>
    </div>
  );
};

export default BlogPage;