import DepartmentCard from "./DepartmentCard";
import Marquee from "react-fast-marquee";
import Title from "./Title";

function Department() {
  const departmentListOne = [
    {
      image: "./images/mech-elect-civil.webp",
      backgroundColor: "bg-department-grey",
      department: "Mechanical Engineering",
      type: "short",
    },
    {
      image: "./images/mechatronics.webp",
      backgroundColor: "bg-department-peach",
      // eslint-disable-next-line react/jsx-key
      department: ["Mechatronics", <br />, "Engineering"],
      type: "long",
    },
    {
      image: "./images/comp-telecoms.webp",
      backgroundColor: "bg-department-grey",
      department: "Telecommunication Engineering",
      type: "long",
    },
  ];
  const departmentListTwo = [
    {
      image: "./images/mech-elect-civil.webp",
      backgroundColor: "bg-department-peach",
      department: "Civil Engineering",
      type: "long",
    },
    {
      image: "./images/comp-telecoms.webp",
      backgroundColor: "bg-department-grey",
      department: "Computer Engineering",
      type: "short",
    },
    {
      image: "./images/mech-elect-civil.webp",
      backgroundColor: "bg-department-peach",
      department: "Electrical Engineering",
      type: "short",
    },
    {
      image: "./images/biomed.webp",
      backgroundColor: "bg-department-peach",
      department: "Biomedical Engineering",
      type: "short",
    },
  ];

  return (
    <div className="bg-white pb-[120px] pt-[77px]">
      <Title>departments</Title>

      {/* LIST 1 (Of departments) going to the left ← as if the user is swiping that way*/}
      {/* <div className="overflow-scroll"> */}
      <div>
        <Marquee
          direction="left"
          speed={95}
          pauseOnClick={true}
          pauseOnHover={true}
          className="p-2 flex gap-12"
        >
          <div className="flex items-start gap-12 mb-4">
            {departmentListOne.map((dept, index) => (
              <DepartmentCard
                key={index}
                image={dept.image}
                department={dept.department}
                type={dept.type}
                backgroundColor={dept.backgroundColor}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* LIST 1 (Of departments) going to the right → as if the user is swiping that way*/}
      <div>
        <Marquee
          direction="right"
          speed={95}
          pauseOnClick={true}
          pauseOnHover={true}
          className="p-2 flex gap-12"
        >
          <div className="flex items-start gap-12">
            {departmentListTwo.map((dept, index) => (
              <DepartmentCard
                key={index}
                image={dept.image}
                department={dept.department}
                type={dept.type}
                backgroundColor={dept.backgroundColor}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Department;
