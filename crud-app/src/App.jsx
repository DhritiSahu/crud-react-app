import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create.jsx";
import Read from "./Read.jsx";
import Update from "./Update.jsx";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
