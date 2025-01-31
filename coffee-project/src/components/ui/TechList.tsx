import { CardProps } from "@/type";
import React from "react";
import TechItem from "./TechItem";

const TechList = ({ data }: { data: CardProps[] }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((data) => (
          <li key={data.id}>
            <TechItem
              id={data.id}
              src={data.src}
              alt={data.alt}
              title={data.title}
              description={data.description}
              size={data.size}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
