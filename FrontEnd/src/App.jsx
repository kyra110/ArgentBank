import Header from "./components/Header/Header.jsx";
import MainHome from "./components/MainHome/MainHome.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from "./components/User/User.jsx";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<MainHome/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/user" element={<User/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;