import { Route, Routes } from "react-router";
import "./App.css";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"))
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"))
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"))
import Layout from "./Layout";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="container">
      {isRefreshing ? <h2>loading</h2> : <Layout>
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
      </Layout>
      }

    </div>
  );
}

export default App;
