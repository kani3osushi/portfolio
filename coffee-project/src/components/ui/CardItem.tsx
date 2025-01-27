import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { CardProps } from "@/type";
import { merriweather } from "@/app/layout";

const CardItem: React.FC<CardProps> = ({
  id,
  src,
  alt,
  size,
  title,
  description,
}) => {
  return (
    <div>
      <Link href={`/techbeans/${id}`} key={id} className="h-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 relative h-full">
          <div className="flex justify-between items-center h-14">
            <Image src={src} alt={alt} width={size ? size : 55} height={55} />
            <FavoriteButton slug={id} />
          </div>
          <h3
            className={`text-center text-3xl sm:text-4xl mt-2 font-bold  tracking-wider leading-tight ${merriweather.className}`}
          >
            {title}
          </h3>
          <Image
            src="/beans.png"
            alt="豆です"
            width={105}
            height={105}
            className="mx-auto mt-6 mb-8"
          />
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
