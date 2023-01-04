import s from "./Price.module.css";
import { FC } from "react";
import { Price } from "@pages/api/trips";

type Props = {
  price: Price;
};

const Price: FC<Props> = ({ price }) => {
  return (
    <div className={s.price}>
      <span>From&nbsp;</span>
      <div className={s.promoPrice}>
        {price.currency}
        {price.promotionPrice}
      </div>
      <div
        className={`${s.basePrice} ${price.promotionPrice ? s.crossed : null} `}
      >
        Price&nbsp;
        {price.currency}
        {price.basePrice}
      </div>
    </div>
  );
};

export default Price;
