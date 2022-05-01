import { Route, Routes } from "react-router-dom";
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ProtectedData from "./components/ProtectedData/ProtectedData";
import NotFound from './components/NotFound/NotFound';


function App() {
  let IsLogin = true ; 
  return (
    <div className="App">
        <Nav />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route element={<ProtectedData IsLogin={IsLogin}/>}> 
                    <Route path="home" element={<Home />}></Route>
                    <Route path="Register" element={<Register />}></Route>
                </Route>  
                <Route path="login" element={<Login />}></Route>             
                <Route path="*" element={<NotFound />}></Route>

            </Routes>
        </div>
        
    </div>
  );
}

export default App;
