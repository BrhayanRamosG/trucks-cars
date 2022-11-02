import { ButtonPrimary } from "./ButtonPrimary";
import { Fragment } from "react";
import { paginationInterface } from "../interfaces/paginationInterface";

export const Pagination = ({ data, handleNextPage }: paginationInterface) => {
  return (
    <div className="flex items-center justify-between border-t border-slate-400 dark:border-red-400 text-white bg-slate-700 dark:bg-eo-red-700 px-4 py-3 sm:px-6">
      {/* Mobile */}
      <div className="flex flex-1 justify-between items-center sm:hidden">
        {data?.links.map(({ active, label, url }, index) => (
          <Fragment key={index}>
            {(label == "Anterior" || label == "Siguiente") && (
              <ButtonPrimary
                className={`rounded-md ${
                  url !== null && "hover:bg-eo-red-100 hover:text-white"
                } ${url === null && "opacity-50 cursor-no-drop"} ${
                  active &&
                  "border-red-200 z-10 px-4 py-2 text-sm font-medium focus:z-20"
                }`}
                onCLick={(e) => handleNextPage(e, url)}
                disabled={url === null || (active && true)}
              >
                {label}
              </ButtonPrimary>
            )}
            {active && (
              <span className="font-bold">
                {label} de {data.last_page}
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-base">
            Mostrando&nbsp;
            <span className="font-medium">{data?.from}</span> a&nbsp;
            <span className="font-medium">{data?.to}</span> de&nbsp;
            <span className="font-medium">{data?.total}</span> resultados
          </p>
        </div>

        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {data?.links.map(({ active, label, url }, index) => (
              <ButtonPrimary
                className={`rounded ${
                  url !== null && "hover:bg-eo-red-100 hover:text-white"
                } ${url === null && "opacity-50 cursor-no-drop"} ${
                  active &&
                  "border-eo-red-100 bg-eo-red-100 text-white z-10 px-4 py-2 text-sm font-medium focus:z-20"
                }`}
                key={index}
                onCLick={(e) => handleNextPage(e, url)}
                disabled={url === null || (active && true)}
              >
                {label}
              </ButtonPrimary>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
