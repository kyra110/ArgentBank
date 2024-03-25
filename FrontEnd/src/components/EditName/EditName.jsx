import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

//Variable pour manipuler le store redux
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../../redux/loginSlice";
import { changeUsername } from "../../redux/api";

const EditName = () => {
  const navigate = useNavigate();
  // enregistrement de la slice login depuis le store dans une variable
  const loginStore = useSelector((state) => state.login);
  const storeUserProfil = loginStore.userProfil;
  const dispatch = useDispatch(); // Utilise useDispatch
  /****Faire le PUT pour modifier le userName en base de données****/
  // Initialisation de la variable avec le store et onChange pour récupérer la valeur de l'input
  const [newUserName, setNewUserName] = useState(storeUserProfil.userName);
  const token = loginStore.userToken;
  const handleChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };
  /*******************handleCancel*************************/
  const handleCancel = () => {
    navigate("/user");
  };
  
  /********************handleForm****************************/
  const handleForm = async (e) => {
    e.preventDefault();
    const updateUserName = await changeUsername(newUserName, token)
    if (updateUserName) {
      dispatch(infoUserName(newUserName));
      console.log("le user name a bien été modifié", updateUserName);
    } else {
      console.error("une erreur s'est produite");
    }
  };
  return (
    <main className="main bg-dark">
    <section className="sign-in-content toogle-edit-name">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit User info</h1>
      <form onSubmit={handleForm} onClick={(event) => event.stopPropagation()}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            value={newUserName}
            onChange={handleChangeUserName}
            type="text"
            id="username"
            placeholder="Tapez votre username"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            disabled
            value={storeUserProfil.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            disabled
            value={storeUserProfil.lastName}
          />
        </div>
        <Button  btnText={"Save"} className={"sign-in-button"}/>
      </form>
        <Button  btnText={"Cancel"} onClick={handleCancel} className={"sign-in-button"}/>
    </section>
    </main>
  );
};

export default EditName;
