// lib/client.js
import { createClient } from 'microcms-js-sdk';

// microCMSクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN, // サービスドメインを入力
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY, // APIキーを入力
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