import PropTypes from "prop-types";

DepartmentCard.propTypes = {
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  department: PropTypes.string,
  type: PropTypes.string,
};

function DepartmentCard({ image, backgroundColor, department, type }) {
  return type === "short" ? (
    <div
      className={`flex flex-col ${backgroundColor} p-5 gap-8 rounded-xl w-fit h-fit items-center hover:scale-105 cursor-pointer duration-300`}
    >
      <img
        src={image}
        alt={department}
        className="rounded-xl object-cover w-[229px] h-[198px]"
      />
      <p>{department}</p>
    </div>
  ) : (
    <div
      className={`grid grid-cols-2 ${backgroundColor} p-5 justify-between rounded-xl h-fit items-center w-fit hover:scale-105 cursor-pointer duration-300`}
    >
      <img
        src={image}
        alt={department}
        className="rounded-xl object-cover w-[229px] h-[198px]"
      />
      <p className="flex-wrap px-5 w-full text-center">{department}</p>
    </div>
  );
}

export default DepartmentCard;
