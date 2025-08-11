- `fetch` を使って [OpenWeatherMap API](https://openweathermap.org/api) から天気情報を取得。  
- APIキーを安全に管理するために、[サバイバルTypeScript](https://typescriptbook.jp/tutorials/nextjs#apiキーを使う) を参考にした。
- APIのレスポンス構造が複雑なため、JSONをオブジェクトに変換した後の中身を `page.tsx` で確認。

- https://openweathermap.org/api/one-call-3#data を参考に、`fetch`に渡すURLを変更。(華氏→摂氏)  ついでに言語をjpに。
- アプリに使いそうなものを`types.ts`に型として定義。確認用に一部を表示。

---

### 次にやること
- UIを整える。 (AIでUIを整えた。後々修正する。)
- 時刻がずれてるので、日本時間に揃える。
- コンポーネントを分け、見やすくする。
- 詳細ボタンなどを用意し、そこで別途風量などを表示する。

###  将来的にやりたいこと
- 地域毎に対応させる。
