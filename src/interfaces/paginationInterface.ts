import { SyntheticEvent } from "react";
import { VehiclesResponse } from "../types/Vehicles";

export interface paginationInterface {
  data: VehiclesResponse | undefined;
  handleNextPage: (e: SyntheticEvent, url: string) => void;
}
