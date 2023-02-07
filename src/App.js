import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyFooter />
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
