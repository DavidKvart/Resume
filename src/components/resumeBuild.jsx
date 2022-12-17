import { Outlet } from "react-router-dom";
import FinnalDisplay from "./finalDisplay";

////this controlls the pages in the building prosses
const Resume = (props) => {
  return (
    <>
      <Outlet />
      <FinnalDisplay resume={props.resume} />
    </>
  );
};

export default Resume;
