import { useState, useEffect } from "react";
const CelebrateWinner = () => {
  const [formState, setFormState] = useState({
    name: "Jackman",
    admin: false,
    data: [],
  });
  const fetchedData = (newData) => {
    setFormState((prevState) => ({
      ...prevState,
      data: [...prevState.data, ...newData],
    }));
  };
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(fetchedData);
  }, []);

  useEffect(() => {
    console.log(`Celebrate ${formState.name}`);
  }, [formState.name]);
  useEffect(() => {
    console.log(`This is user: ${formState.admin ? "admin" : "not admin"}`);
  }, [formState.admin]);

  if (formState.data) {
    return (
      <>
        <ul>
          {formState.data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button
          onClick={() =>
            setFormState((prevState) => ({ ...prevState, data: [] }))
          }
        >
          Remove data
        </button>
      </>
    );
  }

  return (
    <>
      <p>Congratulations {formState.name}</p>
      <button
        onClick={() =>
          setFormState((prevState) => ({ ...prevState, name: "Will" }))
        }
      >
        Change Winner
      </button>
      <p>{formState.admin ? "logged in" : "not logged in"}</p>
      <button
        onClick={() =>
          setFormState((prevState) => ({ ...prevState, admin: true }))
        }
      >
        Log In
      </button>
    </>
  );
};
export default CelebrateWinner;
