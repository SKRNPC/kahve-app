import "./App.css";
import Coffees from "./components/Coffees";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <div className="kahve-app">
        <Sidebar />
        <Coffees />
      </div>
    </div>
  );
}

export default App;
