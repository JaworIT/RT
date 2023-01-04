import React, { useMemo } from "react";
import s from "./Stars.module.css";
import Image from "next/dist/client/legacy/image";

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
      {stars.map((v, i) => {
        if (v === 1) {
          return (
            <Image
              src={"/star-filled.png"}
              width={15}
              height={15}
              className={s.rateIcon}
              key={i}
            />
          );
        }
        if (v === 0) {
          return (
            <Image
              src={"/star-empty.png"}
              width={15}
              height={15}
              className={s.rateIcon}
              key={i}
            />
          );
        }

        if (v === 0.5) {
          return (
            <Image
              src={"/star-half-empty.png"}
              className={s.rateIcon}
              width={15}
              height={15}
              key={i}
            />
          );
        }
      })}
      <span>{score}</span>
    </div>
  );
};

export default Stars;
