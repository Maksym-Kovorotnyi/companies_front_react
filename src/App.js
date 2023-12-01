import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import CompaniesPage from "./pages/CompaniesPage/CompaniesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute/PublicRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
