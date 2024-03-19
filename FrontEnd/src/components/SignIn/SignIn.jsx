/* eslint-disable no-empty */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

//Variables importées pour l'utilisation redux
import { useDispatch,} from "react-redux";
import { loginUser,infoUser } from "../../redux/loginSlice";

const SignIn = () => {
  // initialisation de variables pour le formulaire de conexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remenberMe, setRemenberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Utilise useDispatch

  const handlelogin = async (e) => {
    e.preventDefault();
    //Requette de conexion utilisateur
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Si la requette abutit je transforme la reponse en JSON et fait une redirection /user
        const userData = await response.json();
        // J'envoi les donnée de l'utilisateur grace a dispatch "loginUser/payload"
        await dispatch(loginUser(userData.body.token));
        const token = userData.body.token
        console.log(token);
        if (remenberMe) {
          localStorage.setItem('token',token)
        }
        /***Deuxième requètte pour les infos user***/ 
        const userInfoResponse = await fetch("http://localhost:3001/api/v1/user/profile",{
          method:"POST",
          headers :{
            "Authorization": `Bearer ${token}`,
          }
        })
        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json()
          //récupération des data important dans un objet que je stoke dans 
          //login/userProfil grace a l'action infoUser 
          const userData ={
            email : userInfo.body.email,
            firstName : userInfo.body.firstName,
            lastName : userInfo.body.lastName,
            userName: userInfo.body.userName
          }
          console.log("voici les infos du user :", userData);
          dispatch(infoUser(userData))
          navigate("/user");
        }else{
          console.error("Erreur lors de la récupération des données de l'utilisateur:", userInfoResponse.statusText);
        }
      }else {
        console.error("Erreur de serveur: " + response.statusText);
        setErreur("Erreur de serveur: " + response.statusText);
      }
  };

  const handleRememberMe = (e) => {
    setRemenberMe(e.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handlelogin}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" exemple@gmail.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={remenberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button btnText={"Sign In"} />
        </form>
        {erreur && <p className="errorConexion">{erreur}</p>}
      </section>
    </main>
  );
};

export default SignIn;
