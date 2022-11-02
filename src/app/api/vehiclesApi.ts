import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VehiclesResponse } from "../../types/Vehicles";

type Paginate = {
  url: string;
  page: string | null;
};

// Define a service using a base URL and expected endpoints
export const vehicleApi = createApi({
  reducerPath: "vehicleApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),

  endpoints: (builder) => ({
    getVehicleById: builder.query<VehiclesResponse, string>({
      query: (name) => `/vehiculos/id/${name}`,
    }),
    getVehiclesPaginate: builder.query<VehiclesResponse, Paginate>({
      query: ({ url, page }) =>
        `${url != "" ? url : `/vehiculos?page=${page}`}`,
    }),
    getVehicles: builder.query<VehiclesResponse, void>({
      query: () => "/vehiculos",
    }),
  }),
});

export const {
  useGetVehicleByIdQuery,
  useGetVehiclesPaginateQuery,
  useGetVehiclesQuery,
} = vehicleApi;
