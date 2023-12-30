"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

const CountrySelect = ({
  flag,
  label,
  latlng,
  region,
  value,
  onChange = (flag, label, latlng, region, value) => {},
}) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select placeholder={"Anywhere"} isClearable options={getAll()} />
    </div>
  );
};

export default CountrySelect;
