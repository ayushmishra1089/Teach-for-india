import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
