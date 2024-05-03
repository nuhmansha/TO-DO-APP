import { Components } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import Header from "./components/Header/Header";
import About from "./components/TodoApp/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
