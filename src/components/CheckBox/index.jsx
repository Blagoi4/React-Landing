import "./CheckBox.css";
const CheckBox = ({
  inputName,
  inputId,
  labelHtmlFor,
  xLinkHref,
  symbolId,
}) => {
  return (
    <div className="checkbox-wrapper-4">
      <input
        className="inp-cbx"
        name={inputName}
        id={inputId}
        type="checkbox"
      />
      <label className="cbx" htmlFor={labelHtmlFor}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref={xLinkHref}></use>
          </svg>
        </span>
        <span>{inputName}</span>
      </label>
      <svg className="inline-svg">
        <symbol id={symbolId} viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default CheckBox;
