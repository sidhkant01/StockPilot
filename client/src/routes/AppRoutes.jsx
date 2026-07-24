import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Suppliers from "../pages/Suppliers";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../components/layout/AdminLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Products />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Suppliers */}
        <Route
          path="/suppliers"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Suppliers />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Purchases */}
        <Route
          path="/purchases"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Purchases />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Sales */}
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Sales />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;