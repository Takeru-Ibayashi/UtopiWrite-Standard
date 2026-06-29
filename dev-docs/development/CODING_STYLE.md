# コーディング規約（CODING_STYLE）

以下はコーディングを進める上での最低限のコーディング規約となります。

## React + Electron

レンダラープロセスからリクエストを飛ばし、IPC通信を仲介役として
メインプロセスにはファイル書き込みなどの重たい処理を非同期に渡すこと。

## ディレクトリ

srcディレクトリの内部は基本的に`Feature-Based-Architecture`を基盤として構築します。

```tree
src/
├── assets/
├── data/
│   └── icon/
│       └── FeatureName.icon.ts
├── features/
│   └── feature-name/
│       ├── hooks/
│       └── ui/
│           ├── FeatureName.tsx
│           └── FeatureName.module.scss
├── pages/
│   └── page-name/
│       ├── page-name.tsx
│       └── page-name.module.scss  # 任意で追加（Add optionally）
├── hooks/
├── routes/
├── store/
├── styles/
│   ├── mixin/
│   └── variables.scss
└── types/
```

## Sass

以下はロワーキャメルケースで記述すること。

1. className
2. mixin
3. variables


## React
1. features/feature-name/ui/はアッパーキャメルケースでファイル名を記述すること
2. features/pages/page-name/は小文字のケバブケースでファイル名を記述すること

## ソースコードについて
Next.jsのように機能コンポーネントを構築する際にはアロー関数を用いた方法で記述してください。

```tsx
export const FeatureName:React.FC = () => {
    // ロジック
    return (
        <h1>テキスト</h1>
    )
}
```

### データの注入
何らかの数値やアイコンデータは全てオブジェクトとして切り出し、
`map()`関数を用いてデータバインディングすることでコンポーネントに挿入してください。


### React Router
`React Router`は`BrowserRouter`ではなく、`Hash Router`を使用します。
これはElectronとReactを組み合わせる際のルーティング時に発生するパスの
エラーを防ぐために用います。またページ数が多くなることが高い確率で
予想されるため、`RoutesObject`を用いてデータを切り出します。
