import { FormEvent, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useGetVehiclesPaginateQuery } from "../app/api/vehiclesApi";
import { DescriptionCard } from "../components/DescriptionCard";
import { Pagination } from "../components/Pagination";
import { IsError } from "../components/IsError";
import { IsLoading } from "../components/IsLoading";

export const VehicleCard = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const navigate = useNavigate();
  const [nextPage, setNextPage] = useState<string>("");

  const { data, isLoading, isError } = useGetVehiclesPaginateQuery({
    url: nextPage,
    page: currentPage,
  });

  const handleNextPage = (event: FormEvent, url: string) => {
    event.preventDefault();
    if (url == null) return;
    const page = url.split("?page=");
    window.scroll(0, 0);
    navigate({
      search: createSearchParams({
        page: page[1],
      }).toString(),
    });
    setNextPage(url);
  };

  if (isLoading) return <IsLoading />;
  if (isError) return <IsError />;

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 mb-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data?.data.map(
          ({
            id,
            price,
            cover,
            vehicle_slug,
            description,
            status,
            year,
            versions: {
              makes: { make_name },
              version_name,
            },
          }) => (
            <div key={id} className="relative rounded-lg p-2 hover:shadow-red-300 dark:hover:shadow-red-400 bg-white dark:bg-slate-700 shadow-lg dark:shadow-md dark:shadow-slate-600">
              <DescriptionCard
                slug={vehicle_slug}
                status={status}
                price={price}
                cover={cover}
                description={description}
                make_name={make_name}
                version_name={version_name}
                year={year}
              />
            </div>
          )
        )}
      </div>
      {data && <Pagination data={data} handleNextPage={handleNextPage} />}
    </div>
  );
};
