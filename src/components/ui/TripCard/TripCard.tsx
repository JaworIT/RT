import { FC } from "react";
import { TripType } from "@pages/api/trips";
import s from "./TripCard.module.css";
import Image from "next/dist/client/legacy/image";
import Price from "@ui/Price/Price";
import Stars from "@ui/Stars/Stars";

type Props = {
  tripData: TripType;
};

//Here we can diversify by add clicking on the card and redirecting to the trip page, add another one service fetch type and others ;)
//We can also add SSR for downloading data, the possibilities are endless :D

const TripCard: FC<Props> = ({ tripData }) => {
  return (
    <div className={s.tripCard}>
      <div className={s.imageWrapper}>
        <Image
          src={tripData.image}
          alt={tripData.name}
          blurDataURL={tripData.image}
          placeholder="blur"
          layout="fill"
        />
      </div>
      <div className={s.contentWrapper}>
        <h2 className={s.description}>{tripData.description}</h2>
        <h3 className={s.title}>{tripData.name}</h3>
        <Stars score={tripData.score} />
        <h5>
          <Price price={tripData.price} />
        </h5>
      </div>
    </div>
  );
};

export default TripCard;
