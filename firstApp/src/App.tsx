import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "./Components/MainLayout.tsx";
import PatientLayout from "./Components/PatientLayout.tsx";
import Doctors from "./Components/Doctors.tsx";
import DoctorDetails from "./Components/DoctorDetails.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Navigate to="/doctors" replace /> },
      {
        path: "doctors",
        Component: PatientLayout,
        children: [
          { index: true, Component: Doctors },
          { path: ":doctorId", Component: DoctorDetails },
        ],
      },
    ],
  },
]);
