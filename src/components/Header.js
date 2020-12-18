import React from "react";
import "../screens/styles/Home.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header__container">
        <h1 className="header">
          <strong className="strong">⭐ Strengthen Up Your Angles ⭐</strong>{" "}
        </h1>
        <Link to="/Courses" className="link_to_courses">
          <h3 className="sub_header">
            ⭐ By taking Our{" "}
            <strong className="strong">Awesome Courses ⭐</strong>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
