import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { merriweather } from "@/app/layout";
import Link from "next/link";

export type DataProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  slug: string;
  size?: number;
};

const data: DataProps[] = [
  {
    title: "REACT",
    description: "コンポーネントベースのJavaScriptライブラリ ...",
    src: "/tech/react.svg",
    alt: "React Logo",
    slug: "react",
  },
  {
    title: "NEXT",
    description: "Reactをベースにしたフレームワーク ...",
    src: "/tech/nextjs.svg",
    alt: "Next.js Logo",
    slug: "next",
  },
  // ...省略
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center pt-8">
      {data.map((item, index) => (
        <Link href={`/techbeans/${item.slug}`} key={index} className="h-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 relative h-full">
            <div className="flex justify-between items-center h-14">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.size ? item.size : 55}
                height={55}
              />
              <FavoriteButton slug={item.slug} className="" />
            </div>
            <h3
              className={`text-center text-3xl sm:text-4xl mt-2 font-bold 
                          tracking-wider leading-tight ${merriweather.className}`}
            >
              {item.title}
            </h3>
            <Image
              src="/beans.png"
              alt="豆です"
              width={105}
              height={105}
              className="mx-auto mt-6 mb-8"
            />
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
