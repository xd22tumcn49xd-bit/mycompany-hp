export default function Home() {
  return (
    <div className="min-h-screen bg-[#eef4e6] text-gray-900 font-sans">
      {/* 1. ヘッダー（会社名） */}
      <header className="py-20 px-10 text-center bg-[#e7f2d6] border-b shadow-sm">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#222420]">合同会社はんのき</h1>
      </header>

      {/* 2. メインコンテンツ */}
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-24">
        
        {/* 会社概要 */}
        <section>
          <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-4 mb-6">会社概要</h2>
          <p className="text-gray-700 leading-loose text-lg">
            様々な企業様とお仕事をして培ったノウハウと最新のウェブ技術を活用し、ビジネス課題を解決します。
            「分かりやすく綺麗に」をモットーに、業務環境がすっきりするような業務改善をご提案を提供します。
          </p>
        </section>

        {/* 業務一覧 */}
        <section>
          <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-4 mb-6">業務一覧</h2>
          <p className="text-gray-700 leading-loose text-lg">・DX推進</p>
          <p className="text-gray-700 leading-loose text-lg">・社内ツールの作成</p>
          <p className="text-gray-700 leading-loose text-lg">・各種業務補助</p>
          <p className="text-gray-700 leading-loose text-lg">・イラスト制作</p>
        
        </section>

        {/* 実績 */}
        <section>
          <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-4 mb-6">実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-xl mb-2">イラスト制作</h3>
              <p className="text-sm text-gray-500">商品ロゴ・販促物・看板イラストなどの制作を行います。</p>
              <p className="text-sm text-gray-500">クライアントと密に連絡を取り、柔軟な修正が可能です。</p>
              <p className="text-sm text-gray-500">商品のパッケージイラストや会社の看板イラストの制作実績があります。</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-xl mb-2">事務DXの提案と伴走</h3>
              <p className="text-sm text-gray-500">現状のヒアリングから行い、最適な業務フローや業務ツールをご提案します。</p>
              <p className="text-sm text-gray-500">ご提案だけでなく、ツールや全体構築の組み上げ・実装計画の作成・手順整備・マニュアル作成・導入後の改善も伴走します。</p>
              <p className="text-sm text-gray-500">これまで専門商社やベンチャーFC本部のバックオフィスなどで、DX推進を伴走してきております。</p>
              <p className="text-sm text-gray-500">ベンチャーバックオフィスでは、月２００時間掛かっていた請求書発行業務の業務改善を行い、月３０時間にまで業務圧縮し、ミス発生件数も実装１年後には半年でミス１件にまで改善してきました。</p>
            </div>
          </div>

        </section>
        {/*業務形態 */}
        <section>
          <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-4 mb-6">業務形態</h2>
          <p className="text-gray-700 leading-loose text-lg">業務委託の形式でお仕事をお受けいたします。月２０～４０時間で５～１０万円程度です。</p>
          <p className="text-gray-700 leading-loose text-lg">詳細な条件等についてはお問い合わせいただけますと幸いです。</p>
        </section>


        {/* お問い合わせ */}
        <section className="bg-[#222420] text-white p-12 rounded-[2rem] text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="opacity-90 mb-8">お仕事のご相談やお問い合わせは、以下のメールアドレスまで。</p>
          <a href="mailto:info@example.com" className="text-2xl font-mono bg-white text-[#222420] px-6 py-2 rounded-full font-bold">
            xd22tumcn49xd@gmail.com
          </a>
        </section>

      </main>

      {/* フッター */}
      <footer className="py-12 text-center text-gray-400 text-sm">
        &copy; 2026 合同会社はんのき. All Rights Reserved.
      </footer>
    </div>
  );
}