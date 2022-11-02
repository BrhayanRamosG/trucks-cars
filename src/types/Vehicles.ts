import { Link, Vehicle } from "../interfaces/vehicleInterface";

export type VehiclesResponse = {
  current_page: number;
  from: number;
  to: number;
  total: number;
  data: Vehicle[];
  per_page: number;
  next_page_url: string;
  prev_page_url: string;
  last_page: number;
  last_page_url: string;
  links: Link[];
};
