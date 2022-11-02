import { propsButtonInterface } from "../interfaces/propsInterface";

export const ButtonSecondary = ({
  children,
  onCLick,
  disabled,
  className,
  type = "button",
}: propsButtonInterface) => {
  return (
    <button
      type={type}
      className={`inline-flex justify-center bg-sky-800 font-bold ${className} rounded-md p-2 m-1`}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
