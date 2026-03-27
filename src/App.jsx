export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* 桜背景 */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="sakura-layer" />
      </div>

      {/* 中身 */}
      <div className="relative z-10">
        {/* HEADER */}
        <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-orange-600">
                ニュー三春交通
              </h1>
              <p className="text-sm text-gray-500">
                福島県三春町のレンタカー・運送
              </p>
            </div>
            <a
              href="tel:0247623661"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600"
            >
              今すぐ予約
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

            {/* 左：テキスト */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                急な配送引越しから家族旅行まで
                <br />
                <span className="text-orange-600">
                  町の頼れるレンタカー
                </span>
              </h2>
              <p className="mt-4 text-gray-700">
                ニュー三春交通は、福島県三春町に根ざした
                地域密着のレンタカー会社です。
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                三春駅無料配車／24時間返却対応（要連絡）
              </p>
            </div>

            {/* 右：三春の写真 */}
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <img
                  src="/miharu.jpg"
                  alt="福島県三春町の風景"
                  className="w-full h-40 md:h-56 rounded-xl object-cover shadow-lg"
                />
                <span className="absolute bottom-2 right-2 bg-white/80 text-xs px-3 py-1 rounded">
                  福島県三春町
                </span>
              </div>

              <div className="relative">
                <img
                  src="/miharu2.jpg"
                  alt="福島県三春町の風景"
                  className="w-full h-40 md:h-56 rounded-xl object-cover shadow-lg"
                />
                <span className="absolute bottom-2 right-2 bg-white/80 text-xs px-3 py-1 rounded">
                  福島県三春町
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 車両紹介 */}
<section id="cars" className="relative z-10 bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <p className="text-sm text-orange-500 font-semibold mb-2">
      車両紹介
    </p>
    <h3 className="text-3xl font-bold mb-10">
      用途に合わせた車両をご用意
    </h3>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* ハイエース */}
      <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
        <img
          src="/hiace.jpg"
          alt="ハイエース グランドキャビン"
          className="w-60 h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold mb-2">
            ハイエース グランドキャビン
          </h4>
          <p className="text-gray-600 mb-4">
            団体送迎、家族旅行、学校行事などに最適。
          　ゆったり乗れて長距離も安心です。
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>・最大10名乗車</li>
            <li>・旅行／送迎向け</li>
            <li>・冠婚葬祭向け</li>
          </ul>
        </div>
      </div>

      {/* 2トン保冷車 */}
      <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
        <img
          src="/2ton.jpg"
          alt="2トン保冷車"
          className="w-60 h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold mb-2">
            2トン 保冷車
          </h4>
          <p className="text-gray-600 mb-4">
            食品・花・急な配送など、仕事やレジャー用途に最適。
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>・冷蔵・冷凍対応(－20℃まで対応)</li>
            <li>・業務・配送向け</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
 {/* アクセス */}
        <section id="access" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                福島県三春町から支えます
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>📍 ニュー三春交通</li>
                <li>🚗 郡山・本宮エリア対応</li>
                <li>☎ 地元スタッフが対応</li>
              </ul>
            </div>

            <div className="w-full h-72 rounded-xl overflow-hidden shadow">
              <iframe
  title="ニュー三春交通 レンタカー アクセス"
  src="https://www.google.com/maps?q=福島県田村郡三春町深田和152-1&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
></iframe>

              /
            </div>
          </div>
        </section>


        {/* FEATURES */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl font-bold mb-6">
            選ばれる理由
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow">
              <h4 className="font-semibold text-orange-600">
                地元密着
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                地元だからこそ柔軟対応。急なご相談もまずはお電話ください。
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow">
              <h4 className="font-semibold text-orange-600">
                大きい車に強い
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                団体送迎・引越し・配送まで幅広く対応可能です。
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow">
              <h4 className="font-semibold text-orange-600">
                駅まで無料配車
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                三春駅まで無料でお届け。到着後すぐ出発できます。
                (本宮駅、郡山駅別途料金でお届けいたします。)
              </p>
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="bg-orange-50 py-14">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-4">料金（2台共通）</h3>
            <ul className="space-y-2 text-gray-700">
              <li>6時間：15,000円　　　　　　　　　本宮駅、郡山駅まで配車料金</li>
              <li>12時間：18,000円　　　　　　　　　片道　2,500円</li>
              <li>24時間：22,000円</li>
              <li>追加1時間：3,300円</li>
              <li>免責補償：50,000円</li>
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">
              お問い合わせ・ご予約
            </h3>
            <p className="mb-2">
              ご予約はお電話のみで承っております
            </p>
            <p className="text-xl font-bold text-orange-600">
              0247-62-3661（8:00〜20:00）
            </p>
            <p className="text-sm text-gray-600 mt-2">
              福島県田村郡三春町深田和152-1
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-200 py-6 text-center text-sm">
          © {new Date().getFullYear()} ニュー三春交通
        </footer>
        {/* スマホ用 固定電話ボタン */}
<a
  href="tel:0247623661"
  className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
             bg-orange-500 text-white font-bold
             px-8 py-4 rounded-full shadow-lg
             flex items-center gap-2
             md:hidden"
>
  📞 電話で問い合わせ
</a>

      </div>
    </div>
  );
}

