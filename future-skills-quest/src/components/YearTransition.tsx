"use client";
import { useEffect, useState } from "react";

export default function YearTransition({ year }: { year: number }) {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 500); // 0.5秒後にフェードイン状態に戻る
    return () => clearTimeout(timer);
  }, [year]);

  return (
    <div className={`year-display ${fade ? "fade-in" : "fade-out"}`}>
      {year}年目
      <style jsx>{`
        .year-display {
          font-size: 2rem;
          transition: opacity 0.5s;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
