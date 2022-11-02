import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { propsDescriptionCardInterface } from "../interfaces/propsInterface";
import { formatCurrency } from "../utils/formatCurrency";

export const DescriptionCard = ({
  status,
  price,
  cover,
  description,
  slug,
  make_name,
  version_name,
}: propsDescriptionCardInterface) => {
  const vehicleStatus = () => {
    if (status == 0)
      return (
        <div className="flex flex-row gap-1">
          <XCircleIcon className="h-6 w-6 text-red-400" />
          <span>No disponible</span>
        </div>
      );
    if (status == 1)
      return (
        <div className="flex flex-row gap-1">
          <CheckCircleIcon className="h-6 w-6 text-green-600" />
          <span>Disponible</span>
        </div>
      );
    if (status == 2)
      return (
        <div className="flex flex-row gap-1">
          <InformationCircleIcon className="h-6 w-6 text-yellow-400" />
          <span>Apartado</span>
        </div>
      );
  };
  return (
    <>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={cover}
          alt={cover}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base capitalize">
            <Link to={`/vehiculos/id/${slug}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {make_name} {version_name}
            </Link>
          </h3>
          <p className="mt-2 w-40 truncate text-sm ">{description}</p>
          <p>{vehicleStatus()}</p>
        </div>
        <p className="text-lg font-medium">{formatCurrency(price)}</p>
      </div>
    </>
  );
};
