- `fetch` を使って [OpenWeatherMap API](https://openweathermap.org/api) から天気情報を取得。  
- APIキーを安全に管理するために、[サバイバルTypeScript](https://typescriptbook.jp/tutorials/nextjs#apiキーを使う) を参考にした。
- APIのレスポンス構造が複雑なため、JSONをオブジェクトに変換した後の中身を `page.tsx` で確認。

- https://openweathermap.org/api/one-call-3#data を参考に、`fetch`に渡すURLを変更。(華氏→摂氏)  ついでに言語をjpに。
- アプリに使いそうなものを`types.ts`に型として定義。確認用に一部を表示。

- 型名が大文字になっていたのでPascalCaseに変更。型名も変更。
- `page.tsx`で`null`の時は早期リターンしているので、`Weather.tsx`コンポーネントには`null`での型付けを外す。
- `try-catch`構文を用い、エラーハンドリングを追加した。


---

### 次にやること
- UIを整える。
  (AIでUIを整えた。後々修正する。)
  (大画面時に中央寄せされるように変更。その他諸々変更。)
- 時刻がずれてるので、日本時間に揃える。
- コンポーネントを分け、見やすくする。
  (天気表示の部分を`Weather.tsx`にコンポーネントとして切り出した。)
- 詳細ボタンなどを用意し、そこで別途風量などを表示する。
- descriptionの和訳が不自然なので、オブジェクトを作り、それぞれのdescriptionに対応する和訳を与える。

###  将来的にやりたいこと
- 地域毎に対応させる。
