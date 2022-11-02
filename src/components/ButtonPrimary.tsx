import { propsButtonInterface } from "../interfaces/propsInterface";

export const ButtonPrimary = ({
  children,
  onCLick,
  disabled,
  className,
  type = "button",
}: propsButtonInterface) => {
  return (
    <button
      type={type}
      className={`relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${className}`}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
