import { IoAccessibility } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";

export const aboutItems = [
  { title: "企業理念", titleEn: "Philosophy", href: "/about/#philosophy" },
  { title: "メンバー", titleEn: "Member", href: "/about/#member" },
  { title: "沿革", titleEn: "History", href: "/about/#history" },
  { title: "企業概要", titleEn: "Profile", href: "/about/#profile" },
];

export const serviceItems = [
  { title: "事業概要", titleEn: "Overview", href: "/service/#overview" },
  { title: "アプリ開発", titleEn: "App Development", href: "/service/#app" },
  { title: "データ分析", titleEn: "Data Analysis", href: "/service/#data" },
  { title: "教育", titleEn: "Education", href: "/service/#education" },
  { title: "動画編集", titleEn: "Video Editing", href: "/service/#video" },
];

export const articleItems = [
  { title: "ニュース", titleEn: "News", href: "/article#news" },
  { title: "ブログ", titleEn: "Blog", href: "/article#blog" },
];

export const contactItems = [
  { title: "お問い合わせ", titleEn: "Contact", href: "/contact" },
  { title: "資料請求", titleEn: "Request", href: "/contact#request" },
  { title: "部活動 ↗", titleEn: "Club", href: "https://uoh-dakken.com" },
];

export const navigationItems = [
  {
    title: "会社案内",
    titleEn: "About",
    description: "合同会社DA研について",
    items: aboutItems,
  },
  {
    title: "サービス",
    titleEn: "Service",
    description: "合同会社DA研のサービス",
    items: serviceItems,
  },
  {
    title: "記事一覧",
    titleEn: "Article",
    description: "新着ニュースや社員による技術ブログ",
    items: articleItems,
  },
  {
    title: "お問い合わせ",
    titleEn: "Contact",
    description: "お問い合わせはこちら",
    items: contactItems,
  },
];

export const memberData = [
  {
    name: "飯田晃生",
    role: "Representative / Professional of GIS",
    description: "合同会社DA研 代表",
  },
  {
    name: "猪崎俊成",
    role: "Accountant",
    description: "",
  },
  {
    name: "香山明之",
    role: "Data Scientist / Web Developer",
    description: "",
  },

  {
    name: "河内佑真",
    role: "Data Scientist / Media Creator",
    description: "",
  },
  {
    name: "岡山大輝",
    role: "Software Engineer",
    description: "",
  },
];

export const historyData = [
  {
    title: "会社設立",
    description: "1st September 2024",
    icon: IoAccessibility,
  },
  {
    title: "代表交代",
    description: "1st April 2025",
    icon: LiaExchangeAltSolid,
  },
];

export const profileData = [
  { label: "法人名", value: "合同会社DA研" },
  { label: "法人名ふりがな", value: "でぃーえーけん" },
  { label: "代表者名", value: "飯田晃生" },
  { label: "資本金", value: "2000円" },
  { label: "従業員数", value: "5名" },
  { label: "設立年月日", value: "2024年9月1日" },
  {
    label: "所在地",
    value: "兵庫県神戸市須磨区妙法寺字谷野１５４番地ビラ妙法寺Ｃ棟１０１号室",
  },
  {
    label: "事業内容",
    value: "データ分析、Webアプリ開発、動画編集・3Dモデリング",
  },
];

export const businessData = [
  {
    title: "アプリ開発",
    description: "Webアプリケーションの受注開発を行います。",
    imageSrc:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    keywords: ["AWS", "Python", "TypeScript", "Next.js", "Quasar"],
    href: "/service#webapp",
  },
  {
    title: "データ分析",
    description: "データ分析業務を請け負います。",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
    keywords: [
      "Python",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "Jupyter",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
    href: "/service#data-analysis",
  },
  {
    title: "教育",
    description: "プログラミング / データ分析教育を行います。",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    keywords: ["Python", "scikit-learn"],
    href: "/service#education",
  },
  {
    title: "動画編集",
    description: "字幕起こし、編集、動画制作を行います。",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBlZGl0aW5nfGVufDB8fDB8fHww",
    keywords: ["Premiere Pro", "After Effects"],
    href: "/service#video-editing",
  },
];
