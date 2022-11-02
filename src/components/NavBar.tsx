import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { checkTheme, toggleTheme } from "../features/theme/themeSlice";
import { useEffect } from "react";
import { navMenu } from "../utils/navMenu";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const NavBar = () => {
  const theme = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkTheme());
  }, [dispatch]);

  return (
    <Disclosure
      as="nav"
      className="rounded-b-md shadow-lg dark:shadow-md dark:shadow-red-400 backdrop-filter backdrop-blur-lg bg-white bg-opacity-90 dark:bg-opacity-80 dark:bg-black"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      src="logo.jpg"
                      className="block h-8 w-auto lg:hidden rounded-lg"
                      alt="EO Camionetas Logo"
                    />
                  </NavLink>
                  <NavLink to="/">
                    <img
                      src="logo.jpg"
                      className="hidden h-8 w-auto lg:block rounded-lg"
                      alt="EO Camionetas Logo"
                    />
                  </NavLink>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navMenu.map(({ id, name, href }) => (
                      <NavLink
                        key={id}
                        className={({ isActive }) =>
                          isActive
                            ? "text-eo-red-300 dark:text-eo-red-100"
                            : undefined
                        }
                        to={href}
                        end
                      >
                        <span className="font-medium block py-2 pr-4 pl-3 rounded hover:text-red-400 md:hover:bg-transparent md:border-0 p-0 dark:hover:text-red-200 md:dark:hover:bg-transparent capitalize">
                          {name}
                        </span>
                      </NavLink>
                    ))}

                    <button
                      type="button"
                      onClick={() => dispatch(toggleTheme())}
                    >
                      {theme ? (
                        <MoonIcon className="h-6 w-6 text-yellow-300" />
                      ) : (
                        <SunIcon className="h-6 w-6 text-orange-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navMenu.map(({ id, name, href }) => (
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    isActive
                      ? "text-eo-red-300 dark:text-eo-red-100"
                      : undefined
                  }
                  to={href}
                  end
                >
                  <span className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent capitalize">
                    {name}
                  </span>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
