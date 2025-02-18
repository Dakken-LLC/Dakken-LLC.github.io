import { useState, useEffect, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import PageMoveTransition from "../utils/PageMoveTransition";
import { Link } from "react-router";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
  Button,
  Card,
} from "@chakra-ui/react";

import kawachiBackgroundSrc from "../assets/Japan11.png";
import testCompany from "../assets/test_company.jpg";

import { GoChevronRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

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
        <Box className="home-grad-animation" />
        <motion.img
          src={kawachiBackgroundSrc}
          className="home-kawachi-animation"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
        />
        <Box className="home-top-grad">
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
          <Box
            className={`scroll-arrow ${showArrow ? "visible" : ""}`}
            onClick={handleScroll}
          >
            <SlArrowDown />
          </Box>
        </Box>
        <Box className="home-main-background">
          <Box className="main-content">
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

            <SimpleGrid minChildWidth={400} gap={4}>
              <MyCard title="ABOUT">
                <LinkButton name="企業理念" href="#"></LinkButton>
                <LinkButton name="メンバー" href="#"></LinkButton>
                <LinkButton name="沿革" href="#"></LinkButton>
                <LinkButton name="会社概要" href="#"></LinkButton>
              </MyCard>
              <MyCard title="Service">
                <LinkButton name="事業概要" href="#"></LinkButton>
                <LinkButton name="WEBアプリ開発" href="#"></LinkButton>
                <LinkButton name="データ分析" href="#"></LinkButton>
                <LinkButton name="3Dモデル製作" href="#"></LinkButton>
              </MyCard>
              <MyCard title="NEWS">
                <LinkButton name="新着情報" href="#"></LinkButton>
                <LinkButton name="DA研のブログ" href="#"></LinkButton>
              </MyCard>
              <MyCard title="CONTACT">
                <LinkButton name="お問い合わせ" href="#"></LinkButton>
                <LinkButton name="資料請求" href="#"></LinkButton>
                <LinkButton name="リンク集" href="#"></LinkButton>
                <LinkButton name="部活動へ" href="#"></LinkButton>
              </MyCard>
            </SimpleGrid>

            <Box className="home-menu-container" ref={homeQuickMenuRef}>
              <section className="ng-card">
                <img src={testCompany} className="ng-card-img" />
                <Box className="ng-card-content">
                  <Box className="ng-card-title">ABOUT</Box>
                  <Box className="ng-card-button">
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
                  </Box>
                </Box>
              </section>
              <section className="ng-card">
                <img src={testCompany} className="ng-card-img" />
                <Box className="ng-card-content">
                  <Box className="ng-card-title">Service</Box>
                  <Box className="ng-card-button">
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
                  </Box>
                </Box>
              </section>
              <section className="ng-card">
                <img src={testCompany} className="ng-card-img" />
                <Box className="ng-card-content">
                  <Box className="ng-card-title">NEWS</Box>
                  <Box className="ng-card-button">
                    <button>
                      新着情報
                      <GoChevronRight />
                    </button>
                    <button>
                      DA研のブログ
                      <GoChevronRight />
                    </button>
                  </Box>
                </Box>
              </section>
              <section className="ng-card">
                <img src={testCompany} className="ng-card-img" />
                <Box className="ng-card-content">
                  <Box className="ng-card-title">CONTACT</Box>
                  <Box className="ng-card-button">
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
                  </Box>
                </Box>
              </section>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </PageMoveTransition>
  );
}

type LinkButtonProps = {
  name: string;
  href: string;
};

function LinkButton({ name, href }: LinkButtonProps) {
  return (
    <Link to={href}>
      <Button as="a">
        {name}
        <GoChevronRight />
      </Button>
    </Link>
  );
}

type MyCardProps = {
  title: string;
  children: React.ReactNode;
};

function MyCard({ title, children }: MyCardProps) {
  return (
    <Stack align="start">
      <Heading>{title}</Heading>
      <Stack align="start">{children}</Stack>
    </Stack>
  );
}
