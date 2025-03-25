import { IoAccessibility } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";

import appEyeCatchImageSrc from "@/assets/eye-catch/five-person-by-table-watching-turned-on-white-imac.webp";
import dataEyeCatchImageSrc from "@/assets/eye-catch/graphs-of-performance-analytics-on-a-laptop-screen.webp";
import educationEyeCatchImageSrc from "@/assets/eye-catch/man-holding-microphone-near-flat-screen-tv.webp";
import videoEyeCatchImageSrc from "@/assets/eye-catch/turned-on-imac-screen.webp";

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
  { title: "法人教育", titleEn: "Education", href: "/service/#education" },
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
    avatar: "https://avatars.githubusercontent.com/u/83029639?v=4",
    role: "代表",
    description: "合同会社DA研 代表",
  },
  {
    name: "猪崎俊成",
    avatar: "https://avatars.githubusercontent.com/u/51320016?v=4",
    role: "会計",
    description: "",
  },
  {
    name: "岡山大輝",
    avatar: "https://avatars.githubusercontent.com/u/93463965?v=4",
    role: "",
    description: "",
  },
  {
    name: "河内佑真",
    avatar: "",
    role: "",
    description: "",
  },
  {
    name: "香山明之",
    avatar: "https://avatars.githubusercontent.com/u/83072738?v=4",
    role: "",
    description: "",
  },
];

export const historyData = [
  {
    title: "会社設立",
    description: "2024/1/17",
    icon: IoAccessibility,
  },
  {
    title: "代表交代",
    description: "2025/4/1",
    icon: LiaExchangeAltSolid,
  },
];

export const profileData = [
  { label: "法人名", value: "合同会社DA研" },
  { label: "法人名ふりがな", value: "でぃーえーけん" },
  { label: "代表者名", value: "飯田晃生" },
  // { label: "資本金", value: "2000円" },
  { label: "従業員数", value: "5名" },
  { label: "設立年月日", value: "2024年1月17日" },
  // { label: "所在地", value: "兵庫県神戸市須磨区妙法寺字谷野１５４番地ビラ妙法寺Ｃ棟１０１号室", },
  {
    label: "事業内容",
    value: "データ分析、Webアプリ開発、法人教育、動画編集・3Dモデリング",
  },
];

export const businessData = [
  {
    title: "Web アプリ開発",
    description: "Web アプリケーションの受注開発を行います。",
    imageSrc: appEyeCatchImageSrc,
    keywords: ["AWS", "Python", "TypeScript", "Next.js", "Quasar"],
    href: "/service#app",
  },
  {
    title: "データ分析",
    description: "データ分析業務を請け負います。",
    imageSrc: dataEyeCatchImageSrc,
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
    href: "/service#data",
  },
  {
    title: "法人教育",
    description: "社内のデータ利活用のための社員研修を行います。",
    imageSrc: educationEyeCatchImageSrc,
    keywords: ["Python", "機械学習", "需要予測", "数理最適化"],
    href: "/service#education",
  },
  {
    title: "動画編集",
    description: "字幕起こし、編集、動画制作を行います。",
    imageSrc: videoEyeCatchImageSrc,
    keywords: ["Premiere Pro", "After Effects"],
    href: "/service#video",
  },
];

export const businessSectionData = {
  app: {
    title: "IT for Everyone",
    description:
      "近年、業務の効率化や地域サービスの充実を目的として、Webアプリの導入が進んでいます。クラウド技術の発展や行政のデジタル化推進により、企業や自治体が手軽にWebアプリを活用できる環境が整い、人手不足への対応や業務の最適化を目的とした導入事例も増えています。弊社では、「何から始めればよいかわからない」といったご相談にも対応し、課題の整理から最適なアプリの設計・開発まで柔軟にサポートいたします。",
    imageSrc: appEyeCatchImageSrc,
    detail: {
      flowContents: [
        "要件ヒアリング",
        "プロトタイプの制作",
        "仕様策定とお見積もり",
        "アプリ開発・テスト",
        "運用・保守",
      ],
      techStacks: [
        {
          title: "開発言語",
          tools: ["Python", "TypeScript"],
        },
        {
          title: "フレームワーク",
          tools: ["React", "Next.js", "Vue.js"],
        },
        {
          title: "インフラ",
          tools: ["AWS"],
        },
        {
          title: "コミュニケーションツール",
          tools: ["Figma", "GitHub", "Google Chat"],
        },
      ],
    },
    records: [
      {
        title: "地方自治体とのセルフケアアプリ開発事例",
        description: "アプリ開発事例1の説明",
        imageSrc: "",
        keywords: [],
        href: "/service/data/1",
      },
      {
        title: "リカレント教育のための動画配信サービスの開発事例",
        description: "アプリ開発事例2の説明",
        imageSrc: "",
        keywords: [],
        href: "/service/data/2",
      },
    ],
  },

  data: {
    title: "データ化はしたけど、何ができるのか分からない",
    description:
      "近年の DX の進歩により、様々な領域でアプリケーションが実装され、多くのデータを取得できるようになりました。一方で、多くのアプリケーションでは、その集めたデータを分析するまでには至っておらず、DX 化の恩恵を十分に享受できているとは言えないケースも多々あります。弊社では、そのような問題に取り組むために、「アプリを作ってデータは取ってるんだけど、何かできなかいかな？」っといった相談から始まり、可能な分析を提案・実装し皆様の DX 化をさらに推進するお手伝いをいたします。",
    imageSrc: dataEyeCatchImageSrc,
    detail: {
      flowContents: [
        "問題意識の共有",
        "分析手法の提案",
        "分析業務の委託",
        "成果物の納品",
        "必要に応じて追加の分析",
      ],
      techStacks: [
        {
          title: "利用言語",
          tools: ["Python", "SQL"],
        },
        {
          title: "機械学習",
          tools: ["Tensorflow", "PyTorch", "GBD Library"],
        },
        {
          title: "統計解析",
          tools: ["statsmodels", "Prophet"],
        },
        {
          title: "地理情報分析",
          tools: ["GIS", "GeoPandas"],
        },
      ],
    },
    records: [
      {
        title: "データ分析事例1",
        description: "データ分析事例1の説明",
        imageSrc: "",
        keywords: ["データ分析", "Python", "機械学習"],
        href: "/service/data/1",
      },
      {
        title: "データ分析事例2",
        description: "データ分析事例2の説明",
        imageSrc: "",
        keywords: ["データ分析", "Python", "統計解析"],
        href: "/service/data/2",
      },
    ],
  },

  education: {
    title: "社員研修",
    description:
      "データ分析やプログラミングの技術は、今や企業の競争力を左右する重要な要素となっています。しかし、そのような技術を社内で活用するためには、社員一人ひとりがその技術を理解し、活用することが求められます。弊社では、社員研修を通じて、社員のスキルアップを支援し、企業の DX を推進するお手伝いをいたします。",
    imageSrc: educationEyeCatchImageSrc,
    detail: {
      flowContents: [
        "研修の目的の共有",
        "研修内容の検討",
        "研修の実施",
        "研修成果の評価",
        "研修の改善",
      ],
      techStacks: [
        {
          title: "研修内容",
          tools: ["Python", "機械学習", "統計解析"],
        },
        {
          title: "研修方法",
          tools: ["オンライン", "対面"],
        },
      ],
    },
    records: [
      {
        title: "社員研修事例1",
        description: "社員研修事例1の説明",
        imageSrc: "",
        keywords: ["社員研修", "Python", "機械学習"],
        href: "/service/data/1",
      },
      {
        title: "社員研修事例2",
        description: "社員研修事例2の説明",
        imageSrc: "",
        keywords: ["社員研修", "Python", "統計解析"],
        href: "/service/data/2",
      },
    ],
  },

  video: {
    title: "分析結果を更に分かりやすく、Webアプリを更におしゃれに",
    description:
      "「動画を撮影したけど、編集する時間がない」「自分で作ってみたものの、思うような仕上がりにならない」——そんな問題を解決します。弊社は、シンプルなカット編集から演出の追加など、お客様の要望に応じた編集を承ります。またデータ分析などの教育用動画を一から作ることも可能です。「こんな動画が作りたい」という相談がございましたら、お気軽にお問合せください。",
    imageSrc: videoEyeCatchImageSrc,
    detail: {
      flowContents: [
        "動画の要件等の共有",
        "コンテの提案",
        "最終確認",
        "修正",
        "成果物の納品",
      ],
      techStacks: [
        {
          title: "動画編集ソフト",
          tools: ["Premiere Pro", "After Effects"],
        },
        {
          title: "3Dモデル / エフェクト作成ソフト",
          tools: ["Blender", "Unity"],
        },
      ],
    },
    records: [
      {
        title: "動画編集事例1",
        description: "動画編集事例1の説明",
        imageSrc: "",
        keywords: ["動画編集", "Premiere Pro", "After Effects"],
        href: "/service/data/1",
      },
      {
        title: "動画編集事例2",
        description: "動画編集事例2の説明",
        imageSrc: "",
        keywords: ["動画編集", "Premiere Pro", "After Effects"],
        href: "/service/data/2",
      },
    ],
  },
};
