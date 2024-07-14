import { Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const Layout = ({ children }) => {
  return (<div>
    <AppBar />
    <Suspense fallback={<p>loading</p>}>
      {children}
    </Suspense></div>)
};
export default Layout;
