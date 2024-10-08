import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../pages/notFoundPage";
import { HomePage } from "../pages/homePage";
import { BootcampsLayout } from "../layout/BootcampsLayout";
import { BootcampsPage } from "../pages/BootcampsPage";
import { BootcampPage, loader as bootcampLoader } from "../pages/BootcampPage";
import Layout from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/bootcamps",
        element: <BootcampsLayout />,
        children: [
          {
            index: true,
            element: <BootcampsPage />
          },
          {
            path: "/bootcamps/:bootcampId",
            element: <BootcampPage />,
            loader: bootcampLoader
          }
        ],
      },
    ],
  },
]);

export function AppRout() {
  return <RouterProvider router={router} />
}