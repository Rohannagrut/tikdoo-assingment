import "./App.css";
import AnotherSlidebar from "./Components/AnotherSlidebar";

import Navbar from "./Components/Navbar";
import slidebar from "./Components/Slidebar";
import Videobar from "./Components/Videobar";
import Sidebar from "./Components/sidebar";

import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <div className="flex flex-row px-14">
        <slidebar />
        <div className="w-full">
          <Navbar />
          <div className="flex">
            <Sidebar />
            <AnotherSlidebar />
            <Videobar />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
