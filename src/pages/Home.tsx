import dakkenHome from "../assets/dakken_home_12.png";
import "../App.css";

export default function HomePage() {
  return (
    <div className="container text-center">
      <img src={dakkenHome} className="page-top-image" alt="Top Image" />
      <div className="page-title">
        <h1>合同会社DA研へようこそ</h1>
      </div>
      <div className="page-content">
        <h3>WEBアプリ開発・データ加工分析 etc...</h3>
        <br></br>
        <br></br>
        <br></br>
        <h4>
          兵庫県立大学 社会情報科学部
          DA研メンバーの学生たちによって設立されています。
          <br></br>
          主に兵庫県内の企業や自治体を中心にシステム開発やデータ分析を行っています。
        </h4>
        <br></br>
        <br></br>
        <h3>
          <div className="fade-effect">
            <span className="red-text">
              ※只今Webサイトのリニューアル中です。
            </span>
          </div>
        </h3>
        <br></br>
        <br></br>
        <h4>完成まで下部のサイトをご覧ください</h4>
        <br></br>
        <br></br>
        <a
          href="https://www.uoh-dakken.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          部活動DA研の公式ページ
        </a>
      </div>
    </div>
  );
}
