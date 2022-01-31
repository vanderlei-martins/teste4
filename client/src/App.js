import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/form/Login";
import Register from "./components/form/Register";
import Starwars from "./components/pages/Starwars";

function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/characters" element={<Starwars />} />
            </Routes>
        </Router>
        // <div>
        //     <Login />
        //     <Register />
        //     <Starwars />
        // </div>
    );
}

export default App;
