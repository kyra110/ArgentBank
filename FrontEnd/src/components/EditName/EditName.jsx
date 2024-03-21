import { useState } from "react";
import Button from "../Button/Button";
//Variable pour manipuler le store redux
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../../redux/loginSlice";

const EditName = () => {
  // enregistrement de la slice login depuis le store dans une variable
  const loginStore = useSelector((state) => state.login);

  /*Faire le PUT pour modifier le userName en base de données*/
  const [newUserName, setNewUserName] = useState("");
  console.log(newUserName);
  console.log(loginStore.userProfil);
  const dispatch = useDispatch(); // Utilise useDispatch
  const handlePutProfile = async (e) => {
    e.preventDefault();
    //Récupération du token dans le store
    const token = loginStore.userToken;
    //Requete de connexion utilisateur
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName:newUserName }),
    });
    if (response.ok) {
      dispatch(infoUserName(newUserName ));
      const data = await response.json();
      console.log("le user name a bien été modifié", data);
    } else {
      console.error("une erreur s'est produite");
    }
  };
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>

      <h1>Edit User info</h1>
      <form onSubmit={handlePutProfile}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            type="text"
            id="username"
            placeholder={loginStore.userProfil.userName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            disabled
            placeholder={loginStore.userProfil.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            disabled
            placeholder={loginStore.userProfil.lastName}
          />
        </div>
        <Button btnText={"Save"} />
        <Button btnText={"Cancel"} />
      </form>
    </section>
  );
};

export default EditName;
