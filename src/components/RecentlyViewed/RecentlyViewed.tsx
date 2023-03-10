import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "@src/services/trips";
import TripCard from "@ui/TripCard/TripCard";
import s from "./RecentlyViewed.module.css";

const RecentlyViewed = () => {
  const { isLoading, data, error } = useQuery(["trips"], () => fetchTrips());
  const trips = data;
  if (isLoading) {
    return <p className={s.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={s.error}>Data retrieval failed!</p>;
  }
  return trips ? (
    <>
      <h1 className={s.title}>Recently viewed trips</h1>
      <div className={s.container}>
        {trips.data.map((trip) => (
          <TripCard tripData={trip} key={trip.id} />
        ))}
      </div>
    </>
  ) : null;
};

export default RecentlyViewed;
