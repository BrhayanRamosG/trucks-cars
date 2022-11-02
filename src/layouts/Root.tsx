import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="transition-all duration-700 p-2 mx-2 my-8 shadow-md rounded-md bg-slate-100 dark:bg-slate-800 dark:shadow-eo-red-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
