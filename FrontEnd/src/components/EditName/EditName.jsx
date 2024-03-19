import Button from "../Button/Button";
//Variable pour manipuler le store redux
import { useSelector } from "react-redux";
const EditName = () => {
  // enregistrement de la slice login depuis le store dans une variable
  const loginStore = useSelector(state=>state.login)
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      
      <h1>Edit User info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder={loginStore.userProfil.userName}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" disabled placeholder={loginStore.userProfil.firstName}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" disabled placeholder={loginStore.userProfil.lastName}/>
        </div>
        <Button btnText={"Save"}/>
        <Button btnText={"Cancel"}/>
      </form>
    </section>
  );
};

export default EditName;
