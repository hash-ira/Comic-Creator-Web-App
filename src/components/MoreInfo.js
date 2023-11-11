import { FaLightbulb } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "./../Styles/moreInfo.css"

const MoreInfo = () => {
  return (
    <>
      <div className="moreinfo-icon-btn" data-tooltip-id="tn-info-tooltip">
        <FaLightbulb color="#EB5757" /> <span>Click Me</span>
      </div>
      <Tooltip id="tn-info-tooltip" clickable openOnClick>
        <Content />
      </Tooltip>
    </>
  );
};

const Content = () => (
  <div className="moreinfo-project-info">
    <h2>⭐ Dashtoon Assignment</h2>
    <h4>📝 Description</h4>
    <ul>
      <li>
        This project was built as a part of the oncampus placement process for
        Dashtoon 2023.
      </li>
      <li>The app was built using ReactJS</li>
      <li>
        Source code:{" "}
        <a href="https://github.com/hash-ira/comic-creator-web-app">
          https://github.com/hash-ira/comic-creator-web-app
        </a>
      </li>
    </ul>
    <h4>🚀 Features</h4>
    <ul>
      <li>
        Integrated a loader component to enhance user experience during data fetching or rendering, providing visual feedback.
      </li>
      <li>
        The app is responsive and can be used on any device
      </li>
      <li>
        Utilized a Swiper Card component to render generated comics, providing an interactive and engaging way for users to view and navigate through their creations.
      </li>
      <li>
        Maintained the project using Git for version control, allowing for collaboration and tracking changes over time.
      </li>
    </ul>
    <h4>👨‍💻 Author</h4>
    <ul>
      <li>
        Name:{" "}
        <b>
          <a href="https://github.com/hash-ira">Yash Hingane</a>
        </b>
      </li>
      <li>
        Email:{" "}
        <a href="mailto:hingane_y@es.iitr.ac.in">
          hingane_y@es.iitr.ac.in
        </a>
      </li>
      <li>Enroll No.: 19410011</li>
      <li>Institute: IIT Roorkee</li>
    </ul>
  </div>
);

export default MoreInfo;