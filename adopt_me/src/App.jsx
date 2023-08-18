// import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";


const App = () =>{
  return (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="dog" breed="Havanese"/>
    <Pet name="Jayden" animal="cat" breed="Mixed"/>
    <Pet name="Rebec" animal="bird" breed="Unknown"/>
  </div>
  );
};



// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Alex",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Pepper",
//       breed: "Doel",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Rebec",
//       breed: "Mixed",
//     }),
//   ]);
// };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
