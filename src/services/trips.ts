import { api } from "@src/services/config";
import { TripType } from "@pages/api/trips";

export const fetchTrips = () => {
  return api.get<TripType[]>("/trips");
};
