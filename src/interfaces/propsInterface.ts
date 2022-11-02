import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export interface propsInterface {
  className?: string;
  message?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler;
  onCLick?: MouseEventHandler;
}

export interface propsButtonInterface extends propsInterface {
  name?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface propsDescriptionCardInterface extends propsInterface {
  status: number;
  price: number;
  slug: string;
  cover: string;
  description: string;
  year: string;
  make_name: string;
  version_name: string;
}
