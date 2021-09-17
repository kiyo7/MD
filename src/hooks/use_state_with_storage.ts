import { useState } from 'react';

//テキストエリアに値を出力し、変更があった場合localStorageに保存する
export const useStateWithStorage = (
  init: string,
  key: string
): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init);

  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };
  return [value, setValueWithStorage];
};
