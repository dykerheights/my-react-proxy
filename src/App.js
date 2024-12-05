import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            children: [
                { index: true, element: <HomePage /> },
                { path: '/products', element: <ProductPage /> },
            ]
        },

    ]
)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
