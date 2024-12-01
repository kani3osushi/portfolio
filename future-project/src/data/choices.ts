import { StoryNode } from "@/types";

// export const storyNodes: StoryNode[] = [
//   {
//     id: 'start',
//     year: 0,
//     age: 18,
//     description: 'あなたは未来にどんな道を進みますか？',
//     choices: [
//       { id: "choice1", text: "フロントエンドエンジニアになる", nextId: "front-end" },
//       { id: "choice2", text: "バックエンドエンジニアになる", nextId: "back-end" },
//       { id: "choice3", text: "デザイナーになる", nextId: "designer" },
//     ],
//   },
//   {
//     id: 'front-end',
//     year: 1,
//     age: 19,
//     description: 'フロントエンジニアとして最初の1年が経過しました。次のステップは？',
//     choices: [
//       { id: 'css-master', text: 'CSSのプロになる', acquiredSkill: { id: 'css', name: 'CSSマスター', description: 'CSSの達人スキル' } },
//       { id: 'react-expert', text: 'Reactに特化する', acquiredSkill: { id: 'react', name: 'Reactエキスパート', description: 'Reactに熟達' } },
//       { id: 'job-change', text: '転職を考える' },
//     ],
//   },
//   {
//     id: 'css-master',
//     year: 2,
//     age: 20,
//     description: 'CSSのプロとしてさらに進化しました！次は？',
//     choices: [
//       { id: 'freelance', text: 'フリーランスになる' },
//       { id: 'manager', text: 'プロジェクトマネージャーに挑戦する' },
//       { id: 'startup', text: 'スタートアップを創業する' },
//     ],
//   },
// ];
export const storyNodes: StoryNode[] = [
  {
    id: "start",
    year: 0,
    age: 18,
    description: "18歳、これからの未来を選ぶ時が来ました。あなたは何を目指しますか？",
    choices: [
      { id: "front-end", text: "フロントエンドエンジニアになる", nextId: "front-end-year1" },
      { id: "back-end", text: "バックエンドエンジニアになる", nextId: "back-end-year1" },
      { id: "designer", text: "デザイナーになる", nextId: "designer-year1" },
    ],
  },
  // Year 1
  {
    id: "front-end-year1",
    year: 1,
    age: 19,
    description: "フロントエンドエンジニアとしての最初の年が始まりました！次に進む道は？",
    choices: [
      { id: "react-specialist", text: "Reactに特化する", nextId: "front-end-year2" },
      { id: "css-master", text: "CSSの達人を目指す", nextId: "front-end-year2" },
      { id: "framework-explorer", text: "他のフレームワークを学ぶ", nextId: "front-end-year2" },
    ],
  },
  {
    id: "back-end-year1",
    year: 1,
    age: 19,
    description: "バックエンドエンジニアとして歩み始めました。どの方向に進みますか？",
    choices: [
      { id: "api-specialist", text: "API設計を極める", nextId: "back-end-year2" },
      { id: "database-master", text: "データベース設計を学ぶ", nextId: "back-end-year2" },
      { id: "cloud-developer", text: "クラウド技術を習得する", nextId: "back-end-year2" },
    ],
  },
  {
    id: "designer-year1",
    year: 1,
    age: 19,
    description: "デザイナーとしてのキャリアがスタートしました。次の挑戦は？",
    choices: [
      { id: "ui-ux", text: "UI/UXデザインを極める", nextId: "designer-year2" },
      { id: "graphic", text: "グラフィックデザインに挑戦する", nextId: "designer-year2" },
      { id: "motion", text: "モーションデザインを学ぶ", nextId: "designer-year2" },
    ],
  },
  // Year 2
  {
    id: "front-end-year2",
    year: 2,
    age: 20,
    description: "2年目。フロントエンドのスキルを磨いています。次に進むべき道は？",
    choices: [
      { id: "framework-lead", text: "チームリーダーになる", nextId: "front-end-year3" },
      { id: "performance-optimizer", text: "パフォーマンス最適化を学ぶ", nextId: "front-end-year3" },
      { id: "personal-project", text: "個人プロジェクトを開始する", nextId: "front-end-year3" },
    ],
  },
  {
    id: "back-end-year2",
    year: 2,
    age: 20,
    description: "2年目。バックエンド技術を更に深めています。次は？",
    choices: [
      { id: "scalable-system", text: "スケーラブルなシステムを構築する", nextId: "back-end-year3" },
      { id: "full-stack", text: "フルスタックに挑戦する", nextId: "back-end-year3" },
      { id: "tech-leader", text: "技術リーダーを目指す", nextId: "back-end-year3" },
    ],
  },
  {
    id: "designer-year2",
    year: 2,
    age: 20,
    description: "2年目。デザインの幅が広がっています。次に挑戦するのは？",
    choices: [
      { id: "freelance", text: "フリーランスとして活動する", nextId: "designer-year3" },
      { id: "agency", text: "デザインエージェンシーで働く", nextId: "designer-year3" },
      { id: "startup", text: "スタートアップに参加する", nextId: "designer-year3" },
    ],
  },
  // 以下、Year 3〜10まで同様の形式で分岐を作成
  // Year 3
  {
    id: "front-end-year3",
    year: 3,
    age: 21,
    description: "フロントエンドエンジニアとして3年目を迎えました。キャリアの方向性を見直すタイミングです。次のステップは？",
    choices: [
      { id: "team-lead", text: "チームリーダーに挑戦する", nextId: "front-end-year4" },
      { id: "open-source", text: "オープンソースプロジェクトに貢献する", nextId: "front-end-year4" },
      { id: "mentor", text: "後輩の指導を始める", nextId: "front-end-year4" },
    ],
  },
  {
    id: "back-end-year3",
    year: 3,
    age: 21,
    description: "バックエンドエンジニアとして3年目。より専門性の高い技術に挑戦してみませんか？",
    choices: [
      { id: "distributed-system", text: "分散システムを構築する", nextId: "back-end-year4" },
      { id: "devops", text: "DevOpsスキルを身に付ける", nextId: "back-end-year4" },
      { id: "api-innovation", text: "APIの設計を革新する", nextId: "back-end-year4" },
    ],
  },
  {
    id: "designer-year3",
    year: 3,
    age: 21,
    description: "デザイナーとして3年目。デザインの方向性をどう進めますか？",
    choices: [
      { id: "design-system", text: "デザインシステムを構築する", nextId: "designer-year4" },
      { id: "animation", text: "アニメーションの分野に特化する", nextId: "designer-year4" },
      { id: "research", text: "デザインリサーチを深掘りする", nextId: "designer-year4" },
    ],
  },
  // Year 4
  {
    id: "front-end-year4",
    year: 4,
    age: 22,
    description: "4年目に突入。フロントエンドの技術をさらに深める年です。何を選びますか？",
    choices: [
      { id: "mobile-dev", text: "モバイルアプリ開発に挑戦", nextId: "front-end-year5" },
      { id: "web-performance", text: "Webパフォーマンスを最適化する", nextId: "front-end-year5" },
      { id: "framework-creator", text: "独自のフレームワークを開発する", nextId: "front-end-year5" },
    ],
  },
  {
    id: "back-end-year4",
    year: 4,
    age: 22,
    description: "4年目のバックエンドエンジニア。より高度なプロジェクトを手掛けます。次の挑戦は？",
    choices: [
      { id: "microservices", text: "マイクロサービスを構築する", nextId: "back-end-year5" },
      { id: "ai-integration", text: "AIとバックエンドを統合する", nextId: "back-end-year5" },
      { id: "cloud-architecture", text: "クラウドアーキテクチャを設計する", nextId: "back-end-year5" },
    ],
  },
  {
    id: "designer-year4",
    year: 4,
    age: 22,
    description: "4年目のデザイナーとして、新しい可能性を探ります。次は？",
    choices: [
      { id: "brand-identity", text: "ブランドアイデンティティを構築する", nextId: "designer-year5" },
      { id: "interactive-design", text: "インタラクティブデザインを極める", nextId: "designer-year5" },
      { id: "3d-graphics", text: "3Dグラフィックスに挑戦する", nextId: "designer-year5" },
    ],
  },
  // Year 5
  {
    id: "front-end-year5",
    year: 5,
    age: 23,
    description: "5年目のフロントエンドエンジニアとして、業界における確固たる地位を築く時です。",
    choices: [
      { id: "startup-founder", text: "スタートアップを創業する", nextId: "front-end-year6" },
      { id: "global-conference", text: "グローバルカンファレンスで講演する", nextId: "front-end-year6" },
      { id: "education", text: "教育コンテンツを作成する", nextId: "front-end-year6" },
    ],
  },
  {
    id: "back-end-year5",
    year: 5,
    age: 23,
    description: "バックエンドエンジニアとして5年目。より多くの影響を与える年です。",
    choices: [
      { id: "blockchain-dev", text: "ブロックチェーン技術を学ぶ", nextId: "back-end-year6" },
      { id: "security-expert", text: "セキュリティ専門家になる", nextId: "back-end-year6" },
      { id: "data-engineering", text: "データエンジニアリングを深める", nextId: "back-end-year6" },
    ],
  },
  {
    id: "designer-year5",
    year: 5,
    age: 23,
    description: "デザイン業界での確固たる地位を目指す5年目。次は？",
    choices: [
      { id: "immersive-design", text: "没入型デザインを作成する", nextId: "designer-year6" },
      { id: "design-mentor", text: "若手デザイナーを指導する", nextId: "designer-year6" },
      { id: "creative-director", text: "クリエイティブディレクターを目指す", nextId: "designer-year6" },
    ],
  },
  // Year 6
  {
    id: "front-end-year6",
    year: 6,
    age: 24,
    description: "フロントエンドエンジニアとして6年目。次の大きなステップは？",
    choices: [
      { id: "enterprise-systems", text: "大規模システムのフロントエンドを担当", nextId: "front-end-year7" },
      { id: "ai-front-end", text: "AIを活用したUIを開発", nextId: "front-end-year7" },
      { id: "sabbatical", text: "1年間の休暇を取って新たなアイデアを模索する", nextId: "front-end-year7" },
    ],
  },
  {
    id: "back-end-year6",
    year: 6,
    age: 24,
    description: "バックエンドエンジニアとして6年目。さらに深く技術を探求します。",
    choices: [
      { id: "iot-backend", text: "IoTシステムのバックエンドを構築", nextId: "back-end-year7" },
      { id: "quantum-computing", text: "量子コンピューティングに挑戦", nextId: "back-end-year7" },
      { id: "ml-backend", text: "機械学習向けのバックエンド開発", nextId: "back-end-year7" },
    ],
  },
  {
    id: "designer-year6",
    year: 6,
    age: 24,
    description: "デザイナーとして6年目。新しい視点で業界をリードする時です。",
    choices: [
      { id: "virtual-worlds", text: "バーチャルワールドのデザイン", nextId: "designer-year7" },
      { id: "art-director", text: "アートディレクターに挑戦", nextId: "designer-year7" },
      { id: "sustainable-design", text: "持続可能なデザインを探求", nextId: "designer-year7" },
    ],
  },
  // Year 7
  {
    id: "front-end-year7",
    year: 7,
    age: 25,
    description: "フロントエンドエンジニアとして7年目。業界での存在感が増してきました。次の挑戦は？",
    choices: [
      { id: "industry-standards", text: "業界標準を策定するプロジェクトに参加", nextId: "front-end-year8" },
      { id: "ui-ai-integration", text: "AIとフロントエンドの統合をさらに推進", nextId: "front-end-year8" },
      { id: "cross-functional", text: "クロスファンクショナルなスキルを習得", nextId: "front-end-year8" },
    ],
  },
  {
    id: "back-end-year7",
    year: 7,
    age: 25,
    description: "バックエンドエンジニアとして7年目。高度な専門分野での挑戦が求められます。",
    choices: [
      { id: "high-availability", text: "高可用性システムの構築", nextId: "back-end-year8" },
      { id: "serverless-advancement", text: "サーバーレス技術を推進", nextId: "back-end-year8" },
      { id: "backend-ai", text: "AI向けのバックエンド最適化", nextId: "back-end-year8" },
    ],
  },
  {
    id: "designer-year7",
    year: 7,
    age: 25,
    description: "デザイナーとして7年目。デザイン業界に新たなインパクトを与えるタイミングです。",
    choices: [
      { id: "immersive-realities", text: "没入型現実空間のデザイン", nextId: "designer-year8" },
      { id: "social-impact", text: "社会的影響のあるデザインに注力", nextId: "designer-year8" },
      { id: "design-leadership", text: "デザインリーダーシップを発揮", nextId: "designer-year8" },
    ],
  },
  // Year 8
  {
    id: "front-end-year8",
    year: 8,
    age: 26,
    description: "フロントエンドのプロフェッショナルとして8年目。世界に影響を与える仕事を選びます。",
    choices: [
      { id: "startup-investment", text: "スタートアップへの投資活動を始める", nextId: "front-end-year9" },
      { id: "global-expansion", text: "グローバル市場への拡大をリード", nextId: "front-end-year9" },
      { id: "personal-project", text: "個人プロジェクトを立ち上げる", nextId: "front-end-year9" },
    ],
  },
  {
    id: "back-end-year8",
    year: 8,
    age: 26,
    description: "バックエンド分野での深い専門知識を持つエンジニアとして8年目。",
    choices: [
      { id: "global-infrastructure", text: "グローバルなインフラ構築を担当", nextId: "back-end-year9" },
      { id: "data-security", text: "データセキュリティのエキスパートになる", nextId: "back-end-year9" },
      { id: "ai-cloud", text: "AI向けクラウドインフラを設計", nextId: "back-end-year9" },
    ],
  },
  {
    id: "designer-year8",
    year: 8,
    age: 26,
    description: "デザインの熟練者として、業界の未来を見据えた活動をします。",
    choices: [
      { id: "sustainable-tech", text: "持続可能技術とデザインの融合", nextId: "designer-year9" },
      { id: "global-campaigns", text: "グローバルキャンペーンをデザイン", nextId: "designer-year9" },
      { id: "artistic-pursuits", text: "アートとデザインの融合を追求", nextId: "designer-year9" },
    ],
  },
  // Year 9
  {
    id: "front-end-year9",
    year: 9,
    age: 27,
    description: "フロントエンドエンジニアとして9年目。技術とビジョンを融合させる時です。",
    choices: [
      { id: "tech-visionary", text: "技術のビジョナリーとして活躍", nextId: "front-end-year10" },
      { id: "educational-leader", text: "教育リーダーとして後進を育成", nextId: "front-end-year10" },
      { id: "social-change", text: "技術で社会変革を実現", nextId: "front-end-year10" },
    ],
  },
  {
    id: "back-end-year9",
    year: 9,
    age: 27,
    description: "バックエンドエンジニアとしてのキャリアがさらに深まる9年目。",
    choices: [
      { id: "next-gen-tech", text: "次世代技術の開発を主導", nextId: "back-end-year10" },
      { id: "cybersecurity-leader", text: "サイバーセキュリティのリーダーとなる", nextId: "back-end-year10" },
      { id: "ai-revolution", text: "AI革命を推進するプロジェクトに参加", nextId: "back-end-year10" },
    ],
  },
  {
    id: "designer-year9",
    year: 9,
    age: 27,
    description: "デザイン業界での立ち位置が確立された9年目。",
    choices: [
      { id: "cultural-design", text: "文化的デザインを創造", nextId: "designer-year10" },
      { id: "future-concepts", text: "未来の概念を視覚化する", nextId: "designer-year10" },
      { id: "design-advocacy", text: "デザインアドボカシーを推進", nextId: "designer-year10" },
    ],
  },
  // Year 10
  {
    id: "front-end-year10",
    year: 10,
    age: 28,
    description: "フロントエンドエンジニアとして10年目。キャリアの集大成です。",
    choices: [
      { id: "industry-legend", text: "業界のレジェンドとして名を刻む", nextId: "end" },
      { id: "global-initiative", text: "グローバルな技術イニシアチブを主導", nextId: "end" },
      { id: "innovator", text: "技術革新の最前線で活躍", nextId: "end" },
    ],
  },
  {
    id: "back-end-year10",
    year: 10,
    age: 28,
    description: "バックエンドエンジニアとしてキャリアの頂点に到達しました。",
    choices: [
      { id: "global-scale", text: "グローバル規模のシステム設計", nextId: "end" },
      { id: "pioneering-research", text: "先駆的な研究を主導", nextId: "end" },
      { id: "ai-leadership", text: "AI時代のリーダーとして活躍", nextId: "end" },
    ],
  },
  {
    id: "designer-year10",
    year: 10,
    age: 28,
    description: "デザイン業界でのキャリアを極めた10年目。",
    choices: [
      { id: "creative-icon", text: "クリエイティブのアイコンとして活躍", nextId: "end" },
      { id: "world-renown", text: "世界的に名を知られるデザイナーになる", nextId: "end" },
      { id: "legacy", text: "次世代に影響を与えるデザインを残す", nextId: "end" },
    ],
  },

];