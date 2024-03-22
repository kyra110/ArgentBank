import PropTypes from "prop-types"

const Button = ({btnText,onClick}) => {
  return (
    <button className="sign-in-button" onClick={onClick}>{btnText}</button>
  );
};


Button.propTypes ={
  btnText: PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}

export default Button;