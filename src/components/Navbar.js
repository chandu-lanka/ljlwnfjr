import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../assets/logo_channel.png";
import Home from "../screens/Home";
import { Menu, Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Tutorials from "../screens/Tutorials";
import { CoursesInfo } from "../CoursesThumbnails/MiddleCoursesInfo";
import ExclusiveCourses from "../screens/ExclusiveCourses";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Router>
      <nav className="navbar">
        <Switch>
          <Link to="/">
            <img src={logo} className="logo" alt="theorangetriangle" />
          </Link>
        </Switch>
        <div className={clicked ? "link__container active" : "link__container"}>
          <Switch className="div">
            <Link to="/" className="link">
              <div className="div">
                <p>Home</p>
              </div>
            </Link>
          </Switch>
          <Switch className="div">
            <Link to="/Courses" className="link">
              <div className="div">
                <p>Courses</p>
              </div>
            </Link>
          </Switch>

          {/* <Switch className="div_exclusive">
            <Link to="/Courses/exclusive" className="link">
              <div className="div_exclusive">
                <p>Exclusive Courses</p>
              </div>
            </Link>
          </Switch> */}

          <a
            href="https://www.youtube.com/channel/UCAaxdq2ej0RRdvhEmg-KbuQ"
            className="link"
            target="_blank"
          >
            <div className="div">
              <p>Youtube</p>
            </div>
          </a>
        </div>
        <div className="menu-icon" onClick={handleClick}></div>
        <div className="menu-icon" onClick={handleClick}>
          <IconButton>
            {clicked ? <Close size="6x" /> : <Menu size="6x" />}
          </IconButton>
        </div>
      </nav>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/Courses" exact>
        <Tutorials />
      </Route>

      {/* <Route path="/Courses/exclusive" exact>
        <ExclusiveCourses />
      </Route> */}

      {/* <Route path="/Courses/exclusive/javascript-course">
        <h1>JavaScript</h1>
      </Route> */}

      {CoursesInfo.map((val, index) => {
        return (
          <Route path={val.url} key={index}>
            <div className="img_course_container_youtube">
              <a href={val.youtube_link} target="_blank">
                <img
                  src={val.image}
                  alt={val.course_name}
                  className="course_page_img"
                />
              </a>

              <div className="descriptionofcourse">
                <h2>{val.course_name}</h2>
                <p>{val.description}</p>
                <button
                  className="gotoyoutube"
                  onClick={() => {
                    window.location = val.youtube_link;
                  }}
                >
                  Watch Course
                </button>
              </div>
            </div>
          </Route>
        );
      })}
    </Router>
  );
};

export default Navbar;
