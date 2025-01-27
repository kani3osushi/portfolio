// import { CardProps } from "@/type";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { CardProps } from "@/type";

// const data: CardProps[] = [
//   {
//     id: "react",
//     title: "REACT",
//     description:
//       "コンポーネントベースのJavaScriptライブラリで、動的なUIを構築するための最適なツール。",
//     src: "/tech/react.svg",
//     alt: "React Logo",
//   },
//   {
//     id: "next",
//     title: "NEXT",
//     description:
//       "Reactをベースにしたフレームワークで、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）をサポートしています。",
//     src: "/tech/nextjs.svg",
//     alt: "Next.js Logo",
//   },
//   {
//     id: "vue",
//     title: "VUE",
//     description:
//       "軽量で柔軟性の高いJavaScriptフレームワークで、ユーザーインターフェースの構築に特化しています。",
//     src: "/tech/vue.svg",
//     alt: "Vue.js Logo",
//   },
//   {
//     id: "nodejs",
//     title: "Node.js",
//     description:
//       "サーバーサイドでJavaScriptを実行するためのランタイム環境で、高いパフォーマンスとスケーラビリティを持ちます。",
//     src: "/tech/jsIconGreen.svg",
//     alt: "Node.js Logo",
//   },
//   {
//     id: "django",
//     title: "Django",
//     description:
//       "Pythonで書かれた高水準のWebフレームワークで、迅速な開発と洗練されたデザインを促進します。",
//     src: "/tech/django-logo-positive.png",
//     alt: "Django Logo",
//     size: 90,
//   },
//   {
//     id: "go",
//     title: "Go",
//     description:
//       "高パフォーマンスかつシンプルな構文を持つプログラミング言語で、特に並行処理に優れています。",
//     src: "/tech/go.svg",
//     alt: "Go Logo",
//     size: 90,
//   },
// ];

const Card = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        if (!response.ok) {
          throw new Error("サーバーエラーが発生しました。");
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center pt-8">
      {data.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Card;
