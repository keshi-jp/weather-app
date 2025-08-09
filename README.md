`fetch` を使って [OpenWeatherMap API](https://openweathermap.org/api) から天気情報を取得。  
APIキーを安全に管理するために、[サバイバルTypeScript](https://typescriptbook.jp/tutorials/nextjs#apiキーを使う) を参考にした。
APIのレスポンス構造が複雑なため、JSONをオブジェクトに変換した後の中身を `page.tsx` で確認。