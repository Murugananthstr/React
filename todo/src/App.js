import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/auth/SignIn";
import Signup from "./components/auth/SignUp";
import DashBoard from "./components/dashboard/DashBoard";
import NavBar from "./components/layout/NavBar";
import Blog from "./components/Blogs/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Blogs" component={Blog} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
