import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  );
};
export default Checkbox;
