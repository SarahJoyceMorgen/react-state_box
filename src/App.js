import "./styles.css";
import React, {useState} from "react";

export default function App() {
  let [isActive,toggle ] = useState (false);


  function handleClick() {
   toggle(!isActive);

    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
