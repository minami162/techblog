import { getBlogById } from '@/libs/client';
import './techblogDetail.css'; // スタイルシートをインポート

const BlogDetailPage = async ({ params }) => {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <p>ブログが見つかりませんでした。</p>;
  }

  return (
    <div className="blog-detail-container">
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
      <div className="blog-body">
        {Array.isArray(blog.body) ? (
          blog.body.map((entry, index) => (
            <div key={index} className="blog-section">
              {/* リッチエディタの内容 */}
              {entry.rich_editor && (
                <div
                  className="blog-rich-editor preserve-whitespace"
                  dangerouslySetInnerHTML={{
                    __html: entry.rich_editor,
                  }}
                ></div>
              )}

              {/* 画像 */}
              {entry.image && (
                <img
                  src={entry.image.url}
                  alt={`Section ${index + 1}`}
                  className="blog-section-image"
                  width={entry.image.width}
                  height={entry.image.height}
                />
              )}
            </div>
          ))
        ) : (
          <p>記事の内容がありません。</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
