export const Footer = () => {
  return (
    <footer className="grid mt-auto h-20 p-4 rounded-t-md bg-slate-800 dark:bg-eo-red-100 text-white">
      <div className="flex justify-center items-center">
        <p className="font-bold uppercase text-center">
          eo camionetas | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
