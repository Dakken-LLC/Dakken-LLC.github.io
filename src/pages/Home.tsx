import { useState, useEffect, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import PageMoveTransition from "../utils/PageMoveTransition";
import { SlArrowDown } from "react-icons/sl";
import kawachiBackgroundSrc from "../assets/Japan11.png";
import { Box, Button, Card, Image, Text, Stack } from "@chakra-ui/react";
const HOME_TOP_TEXT = "Challenge For The future";

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

const imageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 1.5 } },
};

export default function HomePage() {
  const [showDot, setShowDot] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const homeSubTitleRef = useRef<HTMLDivElement>(null);
  const topicContainerRef = useRef<HTMLDivElement>(null);
  const homeQuickMenuRef = useRef<HTMLDivElement>(null);

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

  const cards = [
    {
      title: "会社案内",
    },
    {
      title: "事業内容",
    },
    {
      title: "事業内容",
    },
    {
      title: "事業内容",
    },
  ];

  useEffect(() => {
    const totalDuration = HOME_TOP_TEXT.length * 0.05; // 文字の描画が完了するまでの時間
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
    const homeSubTitleElement = homeSubTitleRef.current;
    const topicContainerElement = topicContainerRef.current;
    const homeQuickMenuElement = homeQuickMenuRef.current;

    if (homeSubTitleElement) observer.observe(homeSubTitleElement);
    if (topicContainerRef.current) observer.observe(topicContainerRef.current);
    if (topicContainerElement) observer.observe(topicContainerElement);
    if (homeQuickMenuElement) observer.observe(homeQuickMenuElement);

    return () => {
      if (homeSubTitleElement) observer.unobserve(homeSubTitleElement);
      if (topicContainerElement) observer.unobserve(topicContainerElement);
      if (homeQuickMenuElement) observer.unobserve(homeQuickMenuElement);
    };
  }, []);

  return (
    <PageMoveTransition>
      <motion.div className="container">
        <div className="home-grad-animation" />
        <motion.img
          src={kawachiBackgroundSrc}
          className="home-kawachi-animation"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
        />
        <div className="home-top-grad">
          <motion.p
            className="home-top-title"
            initial="hidden"
            animate="visible"
          >
            {HOME_TOP_TEXT.split("").map((char, index) => (
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
            className="home-top-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: HOME_TOP_TEXT.length * 0.1 - 0.8,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            合同会社DA研へようこそ
          </motion.p>
          <div
            className={`scroll-arrow ${showArrow ? "visible" : ""}`}
            onClick={handleScroll}
          >
            <SlArrowDown />
          </div>
        </div>
        <div className="main-content">
          <p className="home-sub-title" ref={homeSubTitleRef}>
            DX×データ分析で
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
            新しい知識を活用し
            <wbr />
            データを何百倍もの価値のあるものに。
            <wbr />
            大学生の力でITをフル活用し
            <wbr />
            皆様をサポートします。
          </p>
        </div>
        <div className="home-menu-container" ref={homeQuickMenuRef}>
          <div className="page-section-title">Navigation Menu</div>
          <section className="ng-card">
            <img className="ng-card-image" src="https://picsum.photos/350/250" alt="company-about" />
            <div className="ng-card-content">
              <div className="ng-card-title">会社案内</div>
              <p>合同会社DA研の概要をご紹介します</p>
              <div className="ng-card-botton">
                メンバー
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </PageMoveTransition>
  );
}
