import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/About";
import AddContact from "./components/home/AddContact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import EditPost from "./components/home/EditPost";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/addcontact" component={() => <AddContact />} />
          <Route path="/about" component={() => <About />} />
          <Route path="/edit/:id" component={() => <EditPost />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
