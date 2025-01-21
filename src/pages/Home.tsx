import { useState, useEffect, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import PageMoveTransition from "../utils/PageMoveTransition";
import { SlArrowDown } from "react-icons/sl";

const text = "Challenge For The future";

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
  const homeSubTitleRef = useRef<HTMLDivElement>(null);
  const topicContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const gradHeight = rootStyles.getPropertyValue("--height").trim();
    const headerHeight = rootStyles.getPropertyValue("--header-height").trim();
    const headerHeightPx = parseFloat(headerHeight);
    const gradHeightPx = (parseFloat(gradHeight) * window.innerHeight) / 100;
    window.scrollTo({
      top: gradHeightPx - headerHeightPx,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const totalDuration = text.length * 0.05; // 文字の描画が完了するまでの時間
    const timer1 = setTimeout(() => {
      setShowDot(true);
    }, totalDuration * 1000); // ミリ秒に変換

    const timer2 = setTimeout(() => {
      setShowArrow(true);
    }, (totalDuration + 2) * 1000); // 文字の描画が完了してから3秒後に矢印を表示

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (homeSubTitleRef.current) observer.observe(homeSubTitleRef.current);
    if (topicContainerRef.current) observer.observe(topicContainerRef.current);

    return () => {
      if (homeSubTitleRef.current) observer.unobserve(homeSubTitleRef.current);
      if (topicContainerRef.current) observer.unobserve(topicContainerRef.current);
    };
  }, []);


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
              delay: text.length * 0.1 - 0.5,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            学生による新しいITサービスを提供します
          </motion.p>
          <div
            className={`scroll-arrow ${showArrow ? "visible" : ""}`}
            onClick={handleScroll}
          >
            <SlArrowDown />
          </div>
        </div>
        <p className="Home-sub-title" ref={homeSubTitleRef}>
          DXとデータ分析で
          <wbr />
          毎日に改革を
        </p>
        <p className="topic-container" ref={topicContainerRef}>
          合同会社DA研は最新技術を用いた
          <wbr />
          ITサービスを提供することで
          <wbr />
          今までの膨大な手作業を自動化し、
          <wbr />
          毎日の業務を価値ある効率的なものに。
          <br></br>
          分析では学術機関で学んだ
          <wbr />
          知識と若い発想力を活用し
          <wbr />
          データを何百倍もの価値のあるものに。
          <wbr />
          大学生の力でITフルを活用し
          <wbr />
          皆様をサポートします。
        </p>
      </motion.div>
    </PageMoveTransition>
  );
}
