import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeProducts from "./routes/HomeProducts.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import MenProducts from "./components/MenProducts.jsx";
import WomanProducts from "./components/WomanProducts.jsx";
import KidsProducts from "./components/KidsProducts.jsx";
import HomeAndLiving from "./components/HomeAndLiving.jsx";
import BeautyProducts from "./components/BeautyProducts.jsx";
import WishListProducts from "./components/WishListProducts.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeProducts />,
      },
      { path: "bag", element: <Bag /> },
      { path: "men", element: <MenProducts /> },
      { path: "woman", element: <WomanProducts /> },
      { path: "kids", element: <KidsProducts /> },
      { path: "homeandliving", element: <HomeAndLiving /> },
      { path: "beauty", element: <BeautyProducts /> },
      { path: "wish-list", element: <WishListProducts /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
