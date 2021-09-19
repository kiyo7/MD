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

const NUM_PER_PAGE: number = 10;

// テキスト履歴を配列で取得する
export const getMemos = (page: number): Promise<MemoRecord[]> => {
  const offset = (page - 1) * NUM_PER_PAGE;

  return memos
    .orderBy('datetime')
    .reverse()
    .offset(offset)
    .limit(NUM_PER_PAGE)
    .toArray();
};

//memoの総数を計算し、1Page10件の表示をする
export const getMemoPageCount = async (): Promise<number> => {
  const totalCount = await memos.count();
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE);
  return pageCount > 0 ? pageCount : 1;
};
