import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
