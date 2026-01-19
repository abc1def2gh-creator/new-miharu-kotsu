/*
次にやることチェックリスト（このファイルは完成しています）

1️⃣ public フォルダに画像を置く
   - public/hiace.jpg
   - public/2ton.jpg

2️⃣ ローカルで表示確認
   - npm run dev / npm run start
   - 画像・電話リンクが表示されるか確認

3️⃣ GitHub にアップロード
   - 新しいリポジトリを作成
   - このプロジェクトを push

4️⃣ Vercel にデプロイ
   - GitHub 連携 → Deploy
   - 発行されたURLが本番サイト

※ この React コンポーネント自体はそのままでOK
*/

import React from "react";

export default function NewMiharuKotsuSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">N</div>
            <div>
              <h1 className="text-lg font-semibold">ニュー三春交通</h1>
              <p className="text-sm text-gray-500">レンタカー・運送｜三春町</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-orange-600">強み</a>
            <a href="#vehicles" className="hover:text-orange-600">車両紹介</a>
            <a href="#price" className="hover:text-orange-600">料金</a>
            <a href="#contact" className="hover:text-orange-600">お問い合わせ</a>
          </nav>

          <a href="tel:0247623661" className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-95">今すぐ予約</a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-50 to-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">三春で“大きい車”が必要なとき、まず思い出してください</h2>
            <p className="mt-4 text-gray-700">ニュー三春交通は、ハイエース グランドキャビンと2トン保冷車を取り扱う地域密着のレンタカー会社です。</p>
            <p className="mt-2 text-sm text-gray-600">24時間返却可能（要事前連絡）／三春駅まで無料配車</p>
          </div>
          <div className="space-y-4">
            <img src="/hiace.jpg" alt="ハイエース グランドキャビン" className="rounded-lg shadow-md w-full h-56 object-cover" />
            <img src="/2ton.jpg" alt="2トントラック 保冷車" className="rounded-lg shadow-md w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold">ニュー三春交通の強み</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold">24時間返却OK</h4>
            <p className="mt-2 text-sm text-gray-600">返却は24時間対応可能。事前にご連絡いただければ柔軟に対応します。</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold">三春駅まで無料配車</h4>
            <p className="mt-2 text-sm text-gray-600">三春駅まで車両を無料でお届け。到着後すぐに利用できます。</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="font-semibold">大型車に強い</h4>
            <p className="mt-2 text-sm text-gray-600">団体送迎・食品配送など、大型車が必要な用途に最適です。</p>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section id="vehicles" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold">車両紹介</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="shadow rounded-lg overflow-hidden">
              <img src="/hiace.jpg" alt="ハイエース グランドキャビン" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">ハイエース グランドキャビン</h4>
                <p className="text-sm text-gray-600 mt-2">10名乗車可能。送迎・旅行・学校行事に最適。</p>
              </div>
            </div>
            <div className="shadow rounded-lg overflow-hidden">
              <img src="/2ton.jpg" alt="2トントラック 保冷車" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">2トントラック 保冷車</h4>
                <p className="text-sm text-gray-600 mt-2">冷蔵機能付き。食品・花などの配送に対応。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold">料金（2台共通）</h3>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li>6時間：15,000円</li>
          <li>12時間：18,000円</li>
          <li>24時間：22,000円</li>
          <li>追加1時間：3,300円</li>
          <li>免責補償：なし</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold">お問い合わせ・ご予約</h3>
          <p className="mt-4">ご予約はお電話のみで承っております。</p>
          <p className="mt-2 text-lg font-semibold">📞 0247-62-3661（8:00〜20:00）</p>
          <p className="mt-2 text-sm text-gray-600">所在地：福島県田村郡三春町深田和152-1</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center">
          © {new Date().getFullYear()} ニュー三春交通
        </div>
      </footer>
    </div>
  );
}
