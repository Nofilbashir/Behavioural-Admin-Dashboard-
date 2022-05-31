import React from "react";
import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
function App() {
  return (
  <Router>

    <div className="App">
      <Topbar/>
      <div className="container">
      <Sidebar/>

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<UserList/>}></Route>
      <Route path="/user/:userId" element={<User/>}></Route>
      </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
