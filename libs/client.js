import { createClient } from 'microcms-js-sdk';

// microCMSクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN, // サービスドメインを入力
  apiKey: process.env.MICROCMS_API_KEY, // APIキーを入力
});

// APIからリスト形式のデータを取得する関数
export const getBlogs = async () => {
  try {
    // 'techblog' エンドポイントからデータを取得
    const data = await client.get({ endpoint: 'techblog' });
    return data.contents; // リストデータを返す
  } catch (error) {
    console.error('API連携エラー:', error.response || error.message);
    return []; // エラー時は空のリストを返す
  }
};

// APIから個別の記事データを取得する関数
export const getBlogById = async (id) => {
  try {
    // 'techblog' エンドポイントから、指定されたIDの記事を取得
    const data = await client.get({ endpoint: `techblog/${id}` });
    return data; // 個別の記事データを返す
  } catch (error) {
    console.error('API連携エラー:', error.response || error.message);
    return null; // エラー時はnullを返す
  }
};
