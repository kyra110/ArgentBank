import { NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";

//Variable pour manipuler le store redux
import { useSelector } from "react-redux";

const Navigation = () => {
  const loginStore = useSelector((state) => state.login);
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
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
