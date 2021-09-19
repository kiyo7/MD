//lib
import Dexie from 'dexie';

//IndexedDBに保存するデータの型
export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}

const database = new Dexie('markdown-editor');
database.version(1).stores({ memos: '&datetime' });
const memos: Dexie.Table<MemoRecord, string> = database.table('memos');

//メモの保存
export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString();
  await memos.put({ datetime, title, text });
};

// テキスト履歴を配列で取得する
export const getMemos = (): Promise<MemoRecord[]> => {
  return memos.orderBy('datetime').reverse().toArray();
};
