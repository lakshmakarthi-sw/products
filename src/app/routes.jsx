import { createBrowserRouter } from "react-router";
import MessagePage from "../components/Message";
import ProductPage from "../features/products/ProductPage";
import AboutPage from "../features/about/AboutPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "*",
    element: <MessagePage content="Page Not Found" redirectTo="/" />
  }
]);

export default router;