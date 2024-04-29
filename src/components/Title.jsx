import Proptypes from "prop-types";

Title.propTypes = {
  children: Proptypes.string,
};

export default function Title({ children }) {
  return (
    <h3 className="capitalize font-semibold w-full text-center text-4xl sm:text-[40px] mb-12 leading-tight">
      {children}
    </h3>
  );
}
