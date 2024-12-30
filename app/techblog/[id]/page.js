import { getBlogById } from '@/libs/client';
import './techblogDetail.css'; // スタイルシートをインポート

const BlogDetailPage = async ({ params }) => {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <p>ブログが見つかりませんでした。</p>;
  }

  return (
    <div className="blog-detail-container"> {/* 詳細ページのスタイルクラス */}
      {/* 記事タイトル */}
      <h1 className="blog-title">{blog.title}</h1>

      {/* サムネイル画像 */}
      {blog.thumbnail && (
        <img
          src={blog.thumbnail.url}
          alt={blog.title}
          className="blog-thumbnail"
        />
      )}

      {/* 投稿日 */}
      <p className="blog-date">
        {new Date(blog.date).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* 記事内容 */}
      <div
        className="blog-body preserve-whitespace" // CSSで改行を反映
        dangerouslySetInnerHTML={{
          __html: blog.body.replace(/\n/g, '<br>') // 改行コードを <br> タグに変換
        }}
      ></div>
    </div>
  );
};

export default BlogDetailPage;
