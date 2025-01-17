import React, { useState, useEffect } from "react";
import "../App.css";
import { motion } from "framer-motion";
import PageMoveTransition from "../utils/PageMoveTransition";
import { SlArrowDown } from "react-icons/sl";
import dakken_llc_logo_3 from "../assets/dakken_llc_logo_3.png";

const text = "IT for Everyone";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function HomePage() {
  const [showDot, setShowDot] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const totalDuration = text.length * 0.05; // 文字の描画が完了するまでの時間
    const timer1 = setTimeout(() => {
      setShowDot(true);
    }, totalDuration * 1000); // ミリ秒に変換

    const timer2 = setTimeout(() => {
      setShowArrow(true);
    }, (totalDuration + 3) * 1000); // 文字の描画が完了してから3秒後に矢印を表示

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <PageMoveTransition>
      <motion.div className="container,Home-top-grad">
        <div className="Home-top-grad">
          <motion.p
            className="Home-top-title"
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            ))}
            {showDot && <span className="blink">.</span>}
          </motion.p>
          <motion.p
            className="Home-top-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: text.length * 0.1 + 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            学生による新しいITサービスを全ての人々へ
          </motion.p>
          <div
            className={`scroll-arrow ${showArrow ? "visible" : ""}`}
            onClick={handleScroll}
          >
            <SlArrowDown />
          </div>
        </div>
        <div className="Home-sub-title">
          <br></br>
          <div>合同会社DA研へようこそ。</div>
        </div>
        <div className="topic-container">
          <img src={dakken_llc_logo_3} alt="Top Image"/>
          <h2>合同会社DA研へようこそ。</h2>
        </div>
      </motion.div>
    </PageMoveTransition>
  );
}
