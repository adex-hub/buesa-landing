import { FaSchoolCircleCheck } from "react-icons/fa6";
import Button from "./Button";
import Title from "./Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Announcement() {
  return (
    <div className="lg:pt-[108px] flex justify-center items-center w-full flex-col lg:pb-[120px]">
      <Button className="lg:mb-[148px] my-16 lg:my-0 w-fit" />
      <Title>Announcement</Title>
      <VerticalTimeline lineColor="#DCDCDE">
        <VerticalTimelineElement
          iconStyle={{ background: "#FACDCD", color: "#A57361" }}
          icon={<FaSchoolCircleCheck />}
        >
          <h3 className="vertical-timeline-element-title text-buesa-grey text-base">
            Resumption Information
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-buesa-grey/45 text-sm">
            1 day ago
          </h4>
          <p>
            <a href="#" className="underline text-buesa-red text-sm">
              Read More
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#FBE3C7", color: "#E73C37" }}
          icon={<FaSchoolCircleCheck />}
        >
          <h3 className="vertical-timeline-element-title text-buesa-grey text-base">
            Resumption Information
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-buesa-grey/45 text-sm">
            4 days ago
          </h4>
          <p>
            <a href="#" className="underline text-buesa-red text-sm">
              Read More
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#FACDCD", color: "#A57361" }}
          icon={<FaSchoolCircleCheck />}
        >
          <h3 className="vertical-timeline-element-title text-buesa-grey text-base">
            Resumption Information
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-buesa-grey/45 text-sm">
            3/12/2023
          </h4>
          <p>
            <a href="#" className="underline text-buesa-red text-sm">
              Read More
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Announcement;
