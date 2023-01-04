import React, { useMemo } from "react";
import Image from "next/dist/client/legacy/image";
import s from "./Stars.module.css";

type Component = React.FC<{
  score: number;
}>;

const Stars: Component = ({ score }) => {
  const stars = useMemo(() => {
    const arr = Array(5).fill(0);
    const value = Math.round(score * 2) / 2;

    for (let i = 0; i < value; i++) {
      arr[i] = value - i === 0.5 ? 0.5 : 1;
    }

    return arr;
  }, [score]);

  return (
    <div className={s.rate}>
      {stars.map((v, i) => (
        <Image
          src={`/star-${v}.png`}
          width={15}
          height={15}
          className={s.rateIcon}
          key={i}
        />
      ))}
      <span>{score}</span>
    </div>
  );
};

export default Stars;
