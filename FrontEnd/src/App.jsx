import Header from "./components/Header/Header.jsx";
import MainHome from "./components/MainHome/MainHome.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from "./components/User/User.jsx";
import EditName from "./components/EditName/EditName.jsx";
import SecurityRoutes from "./SecurityRoutes.jsx";


const App = () => {
const  basename= import.meta.env.MODE  === "production" ? "/ArgentBank/" : "/";

  return (
    <BrowserRouter basename={basename}>
    <Header/>
    <Routes>
    <Route path="/" element={<MainHome/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/user" element={<SecurityRoutes><User/></SecurityRoutes>}/>
    <Route path="/editUser" element={<SecurityRoutes><EditName/></SecurityRoutes>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;