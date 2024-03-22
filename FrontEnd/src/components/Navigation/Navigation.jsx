import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";

//Variable pour manipuler le store redux
import { useSelector } from "react-redux";

const Navigation = () => {
  const loginStore = useSelector((state) => state.login);
  const token = useSelector((state)=> state.login.userToken)
  if (token) {
    
    console.log("le token est présent dans le store donc je change Sign In en Sing out",token);
  }else{
    console.log("le token n'est pas présent donc je laisse Sign IN");
  }
  // Au click sur logout supréssion du token du local storage
  const handleRedirectHome = ()=> {
    localStorage.removeItem("token")
    console.log("Token suprimé du local storage");
  };
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="login">
        {loginStore &&
          loginStore.userProfil &&
          loginStore.userProfil.userName && (
            <p>{loginStore.userProfil.userName}</p>
          )}
        {/* Conditionnellement rendu le lien "Sign In" ou "Sign Out" */}
        {token ? (
          <NavLink className="main-nav-item" to="/" onClick={handleRedirectHome}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in" >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
