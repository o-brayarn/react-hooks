import { useReducer } from "react";

const initialState = {
  message: "Hi",
};
function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}!`,
      };
    case "whisper":
      return {
        message: `Excuse me, I just said ${state.message}`,
      };
  }
}
const ActionDispatch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>WHISPER</button>
    </>
  );
};
export default ActionDispatch;
