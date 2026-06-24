# UtopiWrite README

UtopiWriteは、作者自身がライターの理想的な執筆環境を構築することを目的に
開発されたオープンソースのデスクトップアプリケーションです。
<br>

## 目次（TABLE OF CONTENTS）
[1. 本アプリの対象者（TARGET AUDIENCE）](#本アプリの対象者target-audience)<br>
[対応プラットフォーム](#対応プラットフォームsupported-platforms)
[搭載機能（FEATURES）](#搭載機能features)<br>
[ライセンス（LICENSE）](#ライセンスlicense)<br>
[技術スタック（TECH STACK）](#技術スタックtech-stack)<br>
[選定理由（REASON FOR SELECTION）](#選定理由reason-for-selection)<br>
[本プロジェクトへの参加方法](#本プロジェクトへの参加方法contributing)<br>
[お問い合わせ（CONTACT）](#お問い合わせcontact)<br>
<br>

## 本アプリの対象者（TARGET AUDIENCE）
本アプリは、以下のような方にお勧めの執筆支援ツールとなっています。

- 必要最小限の機能と拡張性のあるテキストエディタが欲しい方
- キーボードショートカットによる高速な執筆をしたい方
- VSCode風なユーザーインターフェースと書き心地のまま、執筆に特化したアプリが欲しい方
- アクセシビリティを重視したシンプルなエディタが欲しい方
- WEB小説を書く際の作品管理をスマートにまとめて管理したい方
- ブログサービスのnoteに近い執筆体験ができるWYSIWYGエディタが欲しい方
- QiitaやWikiへの投稿を自動化したい方
<br>

## 対応プラットフォーム（SUPPORTED PLATFORMS）
UtopiWriteは今現在、Windowsに対応しており、他プラットフォームは随時対応予定となっています。
<br>

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
<br>

## ライセンス（LICENSE）
<br>

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
|コミットバリデーション|Husky & Commitlint
|コード整形|Prettier
<br>

## 選定理由（TECH STACK DECISION）
### Electron
<br>

#### React
Electron内でUIを描画する際にピュアなJavaScriptとHTMLだけでは
将来的な拡張性や、再利用可能な部品としての切り出しができず、
非効率だと感じたため、UIライブラリであるReactを採用。

**Next.jsの採用について**<br>
ElectronはWEB技術をサポートしているため、Next.jsの導入も検討しましたが、
以下の理由から、今回はオーバーエンジニアリングだと判断し選択肢から除外しました。
<br>

1. Electronとの相性問題や、環境構築に時間がかかる点
2. UtopiWriteはデスクトップアプリであるため、SEOを全く考慮しなくて問題ない点
<br>

### TypeScript
以下の理由から、ピュアなJavaScriptではなく、そのスーパーセットであるTypeScriptを選定しました。

1. **保守性の高い堅牢なコードが書ける点**<br>
静的型付けを導入することで、ランタイムエラーを未然に防ぎ、リファクタリングや機能拡張を安全
かつ確実に行えると判断したこと。

2. **AIのアウトプットが安定する点**<br>
明確な型定義が存在することで、AIがコードの文脈や関数の仕様を正確に解釈できるようになり、
AIからのアウトプットをスクリプト言語の中では最大化できると判断したこと。

3. **Error Lensをより厳格にできる点**<br>
VSCodeの拡張機能である「Error Lens」などと組み合わせることで、コード記述中にリアルタイムかつより
厳格にエラーや警告を検知できるため、デバッグにおけるDXの最適化としても優秀だと判断したこと。

またこれに加えてReact × TypeScriptはモダンなフロントエンド開発では
デファクトスタンダードになっていることも理由の一つとなっています。
<br>

### React Router（Hash Router）
<br>

### Zustand
<br>

### React Icons
Reactで使用できるアイコンライブラリがひとまとまりになっており、開発三原則である
Accesible UI/UX/DXを満たすためにも、公式サイトにて適切なアイコンを探し、コード側で
必要なものだけインポートすることによって、アプリケーションの動作を軽量に保つことが
できると判断したため、このライブラリを選定しました。
<br>

### Tiptap
ブログサービスの「note」では、マークダウンテキストをWYSIWYG形式で
表示すると同時に、テキストボックス左横にあるプラスボタンから、
見出しなどの項目を選択することができるようになっています。この体験を
React環境下にて実装する場合、MarkdownライブラリのReact Markdownか、
Tiptapのどちらかが初めに適していると考え、比較検討したところ将来的な
スケーラビリティの観点からカスタマイズ性が非常に高いTiptapを選定しました。
<br>

### Sass CSS Modules
作者自身が弱視であることを考慮し、最終的なDXを見据えた結果、
React及びNext.jsで現在主流になっているTailwind CSSではなく、
SassとCSS Modulesを選定しました。

1. **JSXの可読性維持とスタイルの分離**<br>
Tailwind CSSは迅速な開発が可能である反面、一つのエレメントに対して
付与するスタイルが長くなるほどJSX全体の可読性とDXが著しく低下すると考え、
ファイル分割をしたうえで、コンポーネント構造に沿ってネスト記述できると判断。

2. **CSS Modulesによるスタイルのカプセル化**<br>
CSS Modulesの機構を併用することで、生成されるクラス名が自動的にローカルスコープ化され、
デスクトップアプリの規模が拡大しても、意図しないスタイルの衝突やグローバル汚染を防げるため選定。

3. **VariablesやMixinによる高い保守性と再利用性**<br>
Sass特有のVariablesやMixinの機能を駆使することで、UtopiWriteのデザインシステム
を破綻させることなく、保守性や再利用性の高いスタイリングを行いたかったため。
<br>

また「クラスの命名が必要になる」というSassの課題に対しては、あらかじめ開発ドキュメント側で
明確な命名の方針や基準を定めることで、Sassの強力な恩恵を最大化できると考えたことも
今回Sassを選定することにした大きな理由の一つです。
<br>

### Vite
<br>

### Husky & Commitlint
<br>

### Prettier
<br>

## 本プロジェクトへの参加方法（CONTRIBUTING）
<br>

## お問い合わせ（CONTACT）

### UtopiWrite Official Discord Server
