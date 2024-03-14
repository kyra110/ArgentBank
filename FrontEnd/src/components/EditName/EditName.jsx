const EditName = () => {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit User info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>

        <button className="sign-in-button">Save</button>
        <button className="sign-in-button">Cancel</button>
      </form>
    </section>
  );
};

export default EditName;
