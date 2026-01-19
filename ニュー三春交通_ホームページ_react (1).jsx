import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
              N
            </div>
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

          <a
            href="tel:0247623661"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-95"
          >
            今すぐ予約
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-50 to-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              三春で“大きい車”が必要なとき、まず思い出してください
            </h2>
            <p className="mt-4 text-gray-700">
              ニュー三春交通は、ハイエース グランドキャビンと
              2トン保冷車を取り扱う地域密着のレンタカー会社です。
            </p>
            <p className="mt-2 text-sm text-gray-600">
              24時間返却可能（要事前連絡）／三春駅まで無料配車
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/hiace.jpg"
              alt="ハイエース グランドキャビン"
              className="rounded-lg shadow-md w-full h-56 object-cover"
            />
            <img
              src="/2ton.jpg"
              alt="2トントラック 保冷車"
              className="rounded-lg shadow-md w-full h-56 object-cover"
            />
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
          <p className="mt-2 text-lg font-semibold">
            📞 0247-62-3661（8:00〜20:00）
          </p>
          <p className="mt-2 text-sm text-gray-600">
            所在地：福島県田村郡三春町深田和152-1
          </p>
        </div>
      </section>
    </div>
  );
}
