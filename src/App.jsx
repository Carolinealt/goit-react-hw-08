import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { Suspense, useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegistrationPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
