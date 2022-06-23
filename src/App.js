import React from "react";
import Topbar from "./components/Topbar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import NewUser from "./pages/Newuser/NewUser";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import Products from './pages/Products/Products'
import EditProduct from "./pages/EditProduct/EditProduct"; 
import NewProduct from "./pages/NewProduct/NewProduct";
import { useStateContext } from './components/contexts/ContextProvider';
function App() {
  const {chartdata,setChartData}=useStateContext();
  return (
  <Router>

    <div className="App">
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/user" element={<UserList/>}></Route>
      <Route path="/user/:userId" element={<User/>}></Route>
      <Route path="/newuser/" element={<NewUser/>}></Route>
      <Route path="/products/" element={<Products/>}></Route>
      <Route path="/product/:productId" element={<EditProduct/>}></Route>
      <Route path="/newproduct/" element={<NewProduct/>}></Route>


      </Routes>
      <button className="data__btn" onClick={()=>setChartData(!chartdata)}>Change data</button>
      </div>
    </div>
    </Router>
  );
}

export default App;
