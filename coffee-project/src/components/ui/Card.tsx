import Image from "next/image";

type DataProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const data: DataProps[] = [
  {
    title: "REACT",
    description:
      "コンポーネントベースのJavaScriptライブラリで、動的なUIを構築するための最適なツール。",
    src: "/tech/react.svg",
    alt: "React Logo",
  },
  {
    title: "NEXT",
    description:
      "Reactをベースにしたフレームワークで、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）をサポートしています。",
    src: "/tech/nextjs.svg",
    alt: "Next.js Logo",
  },
  {
    title: "VUE",
    description:
      "軽量で柔軟性の高いJavaScriptフレームワークで、ユーザーインターフェースの構築に特化しています。",
    src: "/tech/vue.svg",
    alt: "Vue.js Logo",
  },
  {
    title: "Node.js",
    description:
      "サーバーサイドでJavaScriptを実行するためのランタイム環境で、高いパフォーマンスとスケーラビリティを持ちます。",
    src: "/tech/jsIconGreen.svg",
    alt: "Node.js Logo",
  },
  {
    title: "Django",
    description:
      "Pythonで書かれた高水準のWebフレームワークで、迅速な開発と洗練されたデザインを促進します。",
    src: "/tech/django-logo-positive.png",
    alt: "Django Logo",
  },
  {
    title: "Go",
    description:
      "高パフォーマンスかつシンプルな構文を持つプログラミング言語で、特に並行処理に優れています。",
    src: "/tech/go.svg",
    alt: "Go Logo",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center pt-16">
      {data.map((data, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="">
            <Image src={data.src} alt={data.alt} width={105} height={105} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
