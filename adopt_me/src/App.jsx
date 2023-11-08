// import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from './SearchParams.jsx';
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})


const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <header>
        <Link to='/'>
          Adopt Me!
        </Link>
      </header>
      <Routes>
        <Route path='details/:id' element= {<Details/>}/>
        <Route path='/' element= {<SearchParams />}/>
      </Routes>
    </QueryClientProvider>
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
