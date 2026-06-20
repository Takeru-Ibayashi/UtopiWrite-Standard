# UtopiWrite README

UtopiWriteは、作者自身がライターの理想的な執筆環境を構築することを目的に
開発されたオープンソースのデスクトップアプリケーションです。

## 目次（TABLE OF CONTENTS）
[1. 本アプリの対象者（TARGET AUDIENCE）](#本アプリの対象者target-audience)<br>
[対応プラットフォーム](#対応プラットフォームsupported-platforms)
[搭載機能（FEATURES）](#搭載機能features)<br>
[ライセンス（LICENSE）](#ライセンスlicense)<br>
[技術スタック（TECH STACK）](#技術スタックtech-stack)<br>
[選定理由（REASON FOR SELECTION）](#選定理由reason-for-selection)<br>
[本プロジェクトへの参加方法](#本プロジェクトへの参加方法contributing)<br>
[お問い合わせ（CONTACT）](#お問い合わせcontact)<br>


## 本アプリの対象者（TARGET AUDIENCE）
本アプリは、以下のような方にお勧めの執筆支援ツールとなっています。

- 必要最小限の機能と拡張性のあるテキストエディタが欲しい方
- キーボードショートカットによる高速な執筆をしたい方
- VSCode風なユーザーインターフェースと書き心地のまま、執筆に特化したアプリが欲しい方
- アクセシビリティを重視したシンプルなエディタが欲しい方
- WEB小説を書く際の作品管理をスマートにまとめて管理したい方
- ブログサービスのnoteに近い執筆体験ができるWYSIWYGエディタが欲しい方
- QiitaやWikiへの投稿を自動化したい方

## 対応プラットフォーム（SUPPORTED PLATFORMS）
UtopiWriteは今現在、Windowsに対応しており、他プラットフォームは随時対応予定となっています。


## 搭載機能（FEATURES）

UtopiWriteに搭載されている機能群は本ドキュメントの可読性維持の観点から、
下記のリンク先にあるFEATURES.mdに記載しています。

[搭載機能一覧のトップページ（Top Page）](./docs/FEATURES.md)

### 搭載機能の目次（FEATURES TOC）
特定の機能の見出しへジャンプしたい方は下記のトグル内にある
搭載機能の目次のリンクからアクセスいただけます。

<details>
  <summary>搭載機能の目次（FEATURES TOC）</summary>

  [キャラクターエイリアス（Chara Alias）](./docs/FEATURES.md/#キャラクターエイリアスchara-alias)

[データベース（Database）](./docs/FEATURES.md/#データベースdatabase)

[ハイパーリンク（Hyperlink）](./docs/FEATURES.md/#ハイパーリンクhyperlink)

[ルビ付き（Add Ruby）](./docs/FEATURES.md/#ルビ付きadd-ruby)

[コマンドパレット（Command Palette）](./docs/FEATURES.md/#コマンドパレットcommand-palette)

[文字数カウント（Character Count）](./docs/FEATURES.md/#文字数カウントcharacter-count)

[フォーカスパレット（Focus Palette）](./docs/FEATURES.md/#フォーカスパレットfocus-palette)

[キーボードショートカット（Keyboard Shortcut）](./docs/FEATURES.md/#キーボードショートカットkeyboard-shortcut)

[オートセーブ（Auto Save）](./docs/FEATURES.md/#オートセーブauto-save)

[設定パネル（Config Panel）](./docs/FEATURES.md/#設定パネルconfig-panel)

[横書きエディタ（Horizontal Text Editor）](./docs/FEATURES.md/#横書きエディタhorizontal-text-editor)

</details>

## インストール方法（INSTALLATION）

## ライセンス（LICENSE）


## 技術スタック（TECH STACK）
|役割|技術名|
|---|---|
|フレームワーク|Electron
|ライブラリ|React
|言語|TypeScript
|ルーティング|React Router（Hash Router）
|状態管理|Zustand
|アイコン|React Icons
|WYSIWYG|Tiptap
|マークアップ|HTML
|スタイリング|Sass CSS Modules
|ビルドツール|Vite
|コミットバリデーション|Husky + Commitlint
|コード整形|Prettier

## 選定理由（REASON FOR SELECTION）
### Electron

#### React
Electron内でUIを描画する際にピュアなJavaScriptとHTMLだけでは
将来的な拡張性や、再利用可能な部品としての切り出しができず、
非効率だと感じたため、UIライブラリであるReactを採用。

**Next.jsの採用について**
ElectronはWEB技術をサポートしているため、Next.jsの導入も検討しましたが、
以下の理由から、今回はオーバーエンジニアリングだと判断し選択肢から除外しました。

1. Electronとの相性問題や、環境構築に時間がかかる点
2. UtopiWriteはデスクトップアプリであるため、SEOを全く考慮しなくて問題ない点


### TypeScript
### React Router（Hash Router）
### Zustand
### React Icons
### Tiptap
### Sass CSS Modules
### Vite
### Husky & Commitlint
### Prettier

## 本プロジェクトへの参加方法（CONTRIBUTING）


## お問い合わせ（CONTACT）

### UtopiWrite Official Discord Server
