import { HiOutlineArrowUp } from "react-icons/hi";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

function Button({ children, className }) {
  return (
    <button
      className={`flex gap-2 items-center bg-buesa-red p-4 text-white rounded-2xl ${className}`}
    >
      {children}
      <span className=" rotate-45">
        <HiOutlineArrowUp />
      </span>
    </button>
  );
}

Button.defaultProps = {
  children: "Explore Library",
  className: "",
};

export default Button;
