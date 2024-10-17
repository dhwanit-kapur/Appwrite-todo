import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Notes from "./pages/Notes";

function App() {
  return (
    <div id="app">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Notes />} path="/" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
