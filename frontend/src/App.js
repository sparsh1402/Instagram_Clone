import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; /*npm install react-router-dom*/
import home from './components/home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path = "/profile" element = {<Profile/>}></Route>
        </Routes>
          <ToastContainer theme="dark" />
      
        
      </div>
    </BrowserRouter>

  );
}

export default App;
