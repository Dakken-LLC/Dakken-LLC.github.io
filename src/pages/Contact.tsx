import "../App.css";
import dakkenContact from "../assets/dakken_contact_12.png";

export default function ContactPage() {
  return (
    <div className="container text-center">
      <img src={dakkenContact} className="page-top-image" alt="Top Image" />
      <div className="page-title">
        <h1>お問い合わせ</h1>
      </div>
      <div className="page-content">
        <h3>
          <div className="fade-effect">
            <span className="red-text">
              ※只今Webサイトのリニューアル中です。
            </span>
          </div>
        </h3>
        <br></br>
        <br></br>
        <h4>完成まで下部のサイトのお問い合わせをご利用ください</h4>
        <br></br>
        <br></br>
        <a
          href="https://www.uoh-dakken.com/contact"
          target="-blank"
          rel="noopener noreferrer"
        >
          部活動DA研の公式ページのお問い合わせ
        </a>
      </div>
    </div>
  );
}
