import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NavBar from "./Pages/NavBar";
import ShowItem from "./Pages/ShowItem";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import myStore from "./Store/Store";
import Category from "./Pages/Category";

function App() {
  return (
    <Provider store={myStore}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/show_item/:id"} component={ShowItem} />
        <Route exact path={"/category/:CatId"} component={Category} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
