import PropTypes from "prop-types"

const Button = ({btnText}) => {
  return (
    <button className="sign-in-button">{btnText}</button>
  );
};


Button.propTypes ={
  btnText: PropTypes.string.isRequired
}

export default Button;