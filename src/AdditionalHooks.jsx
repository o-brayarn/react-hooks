import React, { useReducer } from "react";

const AdditionalHooks = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={setChecked} />
      {checked ? "Not Checked" : "Checked"}
    </>
  );
};
export default AdditionalHooks;
