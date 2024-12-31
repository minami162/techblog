import { getBlogById } from '@/libs/client';
import BlogDetailPage from './BlogDetailPage'; // クライアントコンポーネントをインポート

const Page = async ({ params }) => {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <p>ブログが見つかりませんでした。</p>;
  }

  // サーバーサイドでHTMLの整形を実施
  const formattedBlog = {
    ...blog,
    body: blog.body.map((entry) => ({
      ...entry,
      // HTMLの空白や不要な改行を整形
      rich_editor: entry.rich_editor.trim(),
    })),
    // 日付のフォーマットをサーバーサイドで行う
    dateFormatted: new Date(blog.date).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  return <BlogDetailPage blog={formattedBlog} />;
};

export default Page;
