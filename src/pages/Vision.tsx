import "../App.css";
import dakkenVision from "../assets/dakken_vision_12.png";

export default function VisionPage() {
  return (
    <div className="container text-center">
      <img src={dakkenVision} className="page-top-image" alt="Top Image" />
      <div className="page-title">
        <h1>企業理念</h1>
      </div>
      <div className="page-content">
        <h3>
          情報科学の知見を学生の
          <span className="blue-text">若い発想力と実行力で</span><br></br>
          デジタル時代の企業の発展に活かす。
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <h4>
          大学で学んだデータサイエンスを中心とした情報科学の知見を
          学生である私たちの柔軟な発想力を活かし、企業のデジタル化に貢献します。
          現代社会において大量に存在する様々なデータを適切に対処して
          最適化された学生による面白いアイデアを提供します。
        </h4>
      </div>
    </div>
  );
}
