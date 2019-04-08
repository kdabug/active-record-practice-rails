import React from "react";
import { Link } from "react-router-dom";

const GameFooter = props => {
  const { show, userData } = props;
  return (
    <div className="footer">
      <div className="footer-text">
        {show ? (
          <>
            <Link
              to={"/user/" + userData.id + "/username/" + userData.username}
            >
              PROFILE
            </Link>
            <Link to="/logout">LOGOUT</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/contact">CONTACT</Link>
        <a href="https://github.com/kdabug/trial-project/blob/master/flow_images/wireframe.jpg">
          github
        </a>
      </div>
    </div>
  );
};
export default GameFooter;
