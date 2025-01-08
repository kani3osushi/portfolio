import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { merriweather } from "@/app/layout";

type DataProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  slug: string;
  size?: string;
};

const data: DataProps[] = [
  {
    title: "REACT",
    description:
      "コンポーネントベースのJavaScriptライブラリで、動的なUIを構築するための最適なツール。",
    src: "/tech/react.svg",
    alt: "React Logo",
    slug: "react",
  },
  {
    title: "NEXT",
    description:
      "Reactをベースにしたフレームワークで、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）をサポートしています。",
    src: "/tech/nextjs.svg",
    alt: "Next.js Logo",
    slug: "next",
  },
  {
    title: "VUE",
    description:
      "軽量で柔軟性の高いJavaScriptフレームワークで、ユーザーインターフェースの構築に特化しています。",
    src: "/tech/vue.svg",
    alt: "Vue.js Logo",
    slug: "vue",
  },
  {
    title: "Node.js",
    description:
      "サーバーサイドでJavaScriptを実行するためのランタイム環境で、高いパフォーマンスとスケーラビリティを持ちます。",
    src: "/tech/jsIconGreen.svg",
    alt: "Node.js Logo",
    slug: "nodejs",
  },
  {
    title: "Django",
    description:
      "Pythonで書かれた高水準のWebフレームワークで、迅速な開発と洗練されたデザインを促進します。",
    src: "/tech/django-logo-positive.png",
    alt: "Django Logo",
    slug: "django",
  },
  {
    title: "Go",
    description:
      "高パフォーマンスかつシンプルな構文を持つプログラミング言語で、特に並行処理に優れています。",
    src: "/tech/go.svg",
    alt: "Go Logo",
    slug: "go",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center pt-8">
      {data.map((data, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-8 relative"
        >
          <div className="flex justify-between items-center h-14">
            <Image
              src={data.src}
              alt={data.alt}
              width={55}
              height={55}
              className=""
            />
            <FavoriteButton className="" />
          </div>
          <h3
            className={`text-center text-3xl sm:text-4xl font-bold tracking-wider leading-tight ${merriweather.className}`}
          >
            {data.title}
          </h3>
          <Image
            src="/beans.png"
            alt="豆です"
            width={105}
            height={105}
            className="mx-auto my-6"
          />
          <p className="">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
