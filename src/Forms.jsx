import { useRef } from "react";

const Forms = () => {
  const sound = useRef();
  const color = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);

    // Reset values
    sound.current.value = "";
    color.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={sound} type="text" placeholder="Sound . . ." />
      <input ref={color} type="color" />
      <button>ADD</button>
    </form>
  );
};
export default Forms;
