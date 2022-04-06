// imports
import React, { useState } from "react";
import RocketLauncher from "./components/RocketLauncher";
import "./App.css";

// functional component
function App() {
let [launch, setLaunch] = useState(true);
let [rocketName, setRocketName] = useState("Apollo");

const handleChange = (e) => {
setRocketName(e.target.value);
};

// jsx
return (
<main>
  <h1>{rocketName}</h1>
  <button onClick={() => setLaunch(!launch)}>
    {launch ? "Abort Rocket Launch" : "Start Rocket Launch"}
  </button>
    {launch ? <RocketLauncher /> : null}
  <input type='text' onChange={handleChange} />
</main>
);
}

export default App; 