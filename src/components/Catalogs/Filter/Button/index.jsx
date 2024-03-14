import "./Button.css";

const Button = ({btnText}) => {
  return (
    <>
      <button class="button-6" role="button">
        {btnText}
      </button>
    </>
  );
};

export default Button;
