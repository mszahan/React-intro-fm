// import React from "react";
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
// import AdoptedPetContext from './AdoptedPetContext';
// import { Pet } from './APIResponsesTypes';

// import SearchParams from './SearchParams.jsx';
// import Details from './Details.jsx';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // const adoptedPet = useState(null as Pet | null);
  return (
    <div
      className="p-0 m-0"
      style={{
        background: 'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader"> 🛞 </h2>
              </div>
            }
          >
            <Provider store={store}>
              <header className="w-full mb-10 text-center p-7">
                <Link
                  className="text-6xl text-slate-800 hover:text-gray-500"
                  to="/"
                >
                  Adopt Me!
                </Link>
              </header>
              <Routes>
                <Route path="details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </Provider>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
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

const container = document.getElementById('root');

if (!container) {
  throw new Error('no container found');
}
const root = createRoot(container);
root.render(<App />);

// export default App;
