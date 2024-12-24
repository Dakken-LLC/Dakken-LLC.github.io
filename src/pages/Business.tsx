import "../App.css";
import dakkenBussiness from "../assets/dakken_business_12.png";

export default function BusinessPage() {
  return (
    <div className="container text-center">
      <img src={dakkenBussiness} className="page-top-image" alt="Top Image" />
      <div className="page-title">
        <h1>事業内容</h1>
      </div>
      <div className="page-content">
        <h3>ITをはじめとした様々な仕事を承ります。</h3>
        <br></br>
        <br></br>
        <br></br>
        <div className="">
          <h4>
            ・WEBシステム開発 <br></br>
            ・Python,APIを用いたデータ分析・収集・加工 <br></br>
            ・Adobe を用いた動画編集・デザイン作成 <br></br>
            ・GIS等を用いた地図情報の可視化 <br></br>
          </h4>
        </div>
      </div>
    </div>
  );
}
