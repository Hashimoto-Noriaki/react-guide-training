# プロジェクトの作成方法(2024年5月時点)
```
npx create-react-app {プロジェクト名}
```

[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

[vitejs-plugin-react](https://ja.vitejs.dev/plugins/#vitejs-plugin-react):esbuild と Babel を使用した従来の Vite + React の組み合わせ
[vitejs-plugin-react-swc](https://ja.vitejs.dev/plugins/#vitejs-plugin-react-swc)Babel の代わりに Verce 社が開発した swc を使用した次世代の Vite + React の組み合わせ

```bash
npm create vite@latest my-react-app -- --template react
npm create vite@latest my-react-app -- --template react-swc
```
⚫補足
my-react-appのアプリ名は任意

### React起動
```
npm start
```
viteのプロジェクトなら
```
 npm run dev
```
















# 環境設定

## 使用するソフトウェア

- Chrome - ブラウザ
  https://www.google.com/intl/ja/chrome/

- Node.js - JavaScript の実行環境
  https://nodejs.org/en/

- VSCode - コードエディタ
  https://code.visualstudio.com/

## おすすめの拡張機能

- Prettier - Code formatter ★
  `esbenp.prettier-vscode`

  様々な言語の整形を行ってくれる

- Live Server ★
  `ritwickdey.LiveServer`

  簡易的なサーバーを簡単に起動することができる

- Auto Rename Tag
  `formulahendry.auto-rename-tag`

  開始タグを編集すると、閉じタグを自動的に変更してくれる

- ES7+ React/Redux/React-Native
  `dsznajder.es7-react-js-snippets`

  React のスニペット(ショートカット)を使えるようにする
