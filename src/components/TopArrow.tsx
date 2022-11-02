import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

export const TopArrow = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        buttonRef.current?.classList.add("animate__fadeInDown");
        buttonRef.current?.classList.remove("hidden", "animate__fadeOutDown");
        return;
      }
      buttonRef.current?.classList.add("animate__fadeOutDown");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleTop}
      className={`hidden animate__animated fixed p-2 mr-1 rounded-full bottom-7 right-0 z-50 bg-orange-500 dark:bg-yellow-300`}
    >
      <ChevronDoubleUpIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white dark:text-black" />
    </button>
  );
};
