/**
 * Main App Component - Routing Configuration
 * 
 * This component sets up all the routes for the application using React Router.
 * 
 * UI/UX Enhancement Ideas:
 * - Add route protection (require authentication for certain routes)
 * - Implement route transitions/animations
 * - Add breadcrumb navigation
 * - Consider adding a 404 page for unknown routes
 * - Add route-based page titles for better browser UX
 * 
 * To add a new page:
 * 1. Create a new component in src/pages/
 * 2. Import it here
 * 3. Add a <Route> element with the path and component
 */

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SaveData from "./pages/SaveData";
import ShowData from "./pages/ShowData";

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Public routes - accessible without authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes - require authentication */}
        {/* TODO: Uncomment ProtectedRoute wrapper when ready to enforce authentication */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/save-data" element={<SaveData />} />
        {/* <Route path="/save-data" element={<ProtectedRoute><SaveData /></ProtectedRoute>} /> */}
        <Route path="/show-data" element={<ShowData />} />
        {/* <Route path="/show-data" element={<ProtectedRoute><ShowData /></ProtectedRoute>} /> */}
        
        {/* TODO: Add a 404 route for unmatched paths */}
      </Routes>
    </Layout>
  );
}
