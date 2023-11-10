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
    //Yash's code start

    // <div>
    //     <h1>cliked me succesfully</h1>
    // </div>
    
    //Yash's code end
  <div className="moreinfo-project-info">
    <h2>⭐ Dashtoon Assignment</h2>
    <h4>📝 Description</h4>
    <ul>
      <li>
        This project was built as a part of the oncampus placement process for
        Quicksell 2023.
      </li>
      <li>The app was built using ReactJS and Redux</li>
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
        Kanban Board with <b>dynamic columns</b> and cards
      </li>
      <li>
        The data is fetched from the API and stored in the <b>Redux store</b>
      </li>
      <li>The app is responsive and can be used on any device</li>
      <li>
        <b>Display Switch</b> to toggle grouping and sorting of tickets
      </li>
      <li>Availability of user is shown by the color of dot in the avatar</li>
      <li>
        <b>Drag and Drop</b> to move cards between columns. (This also changes
        the ticket's property in the store and can be seen even after changing
        the display state)
      </li>
      <li>
        Display state is stored in the local storage and is <b>persistent</b>
      </li>
      <li>
        <b>Loading screen</b> while fetching data from the API. (For
        presentation purposes, the loader is shown for 2 seconds even if the
        data is fetched before that)
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
        <a href="mailto:saurabh_sangam@cy.iitr.ac.in">
          hingane_y@es.iitr.ac.in
        </a>
      </li>
      <li>Enroll No.: 19410011</li>
      <li>Institute: IIT Roorkee</li>
    </ul>
  </div>
);

export default MoreInfo;