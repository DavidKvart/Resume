import { Outlet } from "react-router-dom";
import FinnalDisplay from "./finalDisplay";

////this controlls the pages in the building prosses
const Resume = (props) => {
  return (
    <>
      <div class="progress" style={{ width: "80%", marginLeft: "0px", marginBottom: "1rem", backgroundColor: "#212529", border: "solid 1px white" }}>
        <div class="progress-bar bg-light" role="progressbar" style={{ width: props.resume.progress + "%", color: "black" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          {Math.floor(props.resume.progress)}%
        </div>
      </div>
      <div className="flexBox">
        <Outlet />
        <FinnalDisplay resume={props.resume} />
      </div>
    </>
  );
};

export default Resume;
