import { useRoutes } from "react-router-dom";
import "./App.css";
import { desktopRoutes } from "./route";

function App() {
  const roter = useRoutes(desktopRoutes);
  return <div className=" flex flex-col w-full h-full ">{roter}</div>;
}

export default App;
