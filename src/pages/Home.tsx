import { useState, useEffect, useRef } from "react";
import commonStyle from "../utils/Common.module.css";
import homeStyle from "./Home.module.css";

import { motion } from "framer-motion";
import PageMoveTransition from "../utils/PageMoveTransition";
import { SlArrowDown } from "react-icons/sl";
import kawachiBackgroundSrc from "../assets/Japan11.png";
import testCompany from "../assets/test_company.jpg";
import { GoChevronRight } from "react-icons/go";

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
      <motion.div className={commonStyle.container}>
        <div className={homeStyle.homeGradAnimation} />
        <motion.img
          src={kawachiBackgroundSrc}
          className={homeStyle.homeKawachiAnimation}
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
        />
        <div className={homeStyle.homeTopTitle}>
          <motion.p
            className={homeStyle.homeTopTitle}
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
            {showDot && <span className={homeStyle.blink}>.</span>}
          </motion.p>
          <motion.p
            className={homeStyle.homeTopText}
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
            className={`${homeStyle.scrollArrow} ${showArrow ? homeStyle.visible : ""}`}
            onClick={handleScroll}
          >
            <SlArrowDown />
          </div>
        </div>
        <div className={homeStyle.homeMainBackground}>
          <div className={commonStyle.mainContent}>
            <p className={homeStyle.homeSubTitle} ref={homeSubTitleRef}>
              DX×データ分析で
              <wbr />
              毎日に改革を
            </p>
            <p className={homeStyle.topicContainer} ref={topicContainerRef}>
              合同会社DA研は最新技術を用いた
              <wbr />
              ITサービスを提供することで
              <wbr />
              今までの膨大な手作業を自動化し、
              <wbr />
              毎日の業務を価値ある
              <wbr />
              効率的なものに。
              <br></br>
              分析では学術機関で学んだ
              <wbr />
              新しい知識を活用し
              <wbr />
              データを何百倍もの
              <wbr />
              価値のあるものに。
              <br />
              DX(アプリ開発)×データ分析で
              <wbr />
              皆様をサポートします。
            </p>
            <div className={homeStyle.homeMenuContainer} ref={homeQuickMenuRef}>
              <section className={homeStyle.ngCard}>
                <img src={testCompany} className={homeStyle.ngCardImg} />
                <div className={homeStyle.ngCardContent}>
                  <div className={homeStyle.ngCardTitle}>ABOUT</div>
                  <div className={homeStyle.ngCardButton}>
                    <button>
                      企業理念
                      <GoChevronRight />
                    </button>
                    <button>
                      メンバー
                      <GoChevronRight />
                    </button>
                    <button>
                      沿革
                      <GoChevronRight />
                    </button>
                    <button>
                      会社概要
                      <GoChevronRight />
                    </button>
                  </div>
                </div>
              </section>
              <section className={homeStyle.ngCard}>
                <img src={testCompany} className={homeStyle.ngCardImg} />
                <div className={homeStyle.ngCardContent}>
                  <div className={homeStyle.ngCardTitle}>Service</div>
                  <div className={homeStyle.ngCardButton}>
                    <button>
                      事業概要
                      <GoChevronRight />
                    </button>
                    <button>
                      WEBアプリ開発
                      <GoChevronRight />
                    </button>
                    <button>
                      データ分析
                      <GoChevronRight />
                    </button>
                    <button>
                      3Dモデル製作
                      <GoChevronRight />
                    </button>
                  </div>
                </div>
              </section>
              <section className={homeStyle.ngCard}>
                <img src={testCompany} className={homeStyle.ngCardImg} />
                <div className={homeStyle.ngCardContent}>
                  <div className={homeStyle.ngCardTitle}>NEWS</div>
                  <div className={homeStyle.ngCardButton}>
                    <button>
                      新着情報
                      <GoChevronRight />
                    </button>
                    <button>
                      DA研のブログ
                      <GoChevronRight />
                    </button>
                  </div>
                </div>
              </section>
              <section className={homeStyle.ngCard}>
                <img src={testCompany} className={homeStyle.ngCardImg} />
                <div className={homeStyle.ngCardContent}>
                  <div className={homeStyle.ngCardTitle}>CONTACT</div>
                  <div className={homeStyle.ngCardButton}>
                    <button>
                      お問い合わせ
                      <GoChevronRight />
                    </button>
                    <button>
                      資料請求
                      <GoChevronRight />
                    </button>
                    <button>
                      リンク集
                      <GoChevronRight />
                    </button>
                    <button>
                      部活動へ
                      <GoChevronRight />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </PageMoveTransition>
  );
}
