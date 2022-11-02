//import { useForm } from "../hooks/useForm";
import { VehicleCard } from "../layouts/VehicleCard";
import { useEffect, useState } from "react";

export const Test = () => {
  // const { pages, handleChange } = useForm({
  //   pages: "",
  // });

  const [first, setFirst] = useState<boolean>(false);
  const [ert, setERT] = useState<string>("");

  useEffect(() => {
    if (first) setERT("Hlo");
    else setERT("sas");
    setFirst(false);
    console.log(ert);
  }, [first, ert]);

  return (
    <div>
      <VehicleCard />
    </div>
  );
};
