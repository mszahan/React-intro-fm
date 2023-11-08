// import React from "react";
import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path='details/:id' element= {<Details/>}/>
        <Route path='/' element= {<SearchParams />}/>
      </Routes>
    </BrowserRouter>
      
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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
