import "./Button.css";

const Button = ({btnText, onClick}) => {
  return (
    <>
      <button onClick={onClick} className="button-6" role="button">
        {btnText}
      </button>
    </>
  );
};

export default Button;
