import React from "react";
import { ExclusiveCoursesInfo } from "../CoursesThumbnails/ExclusiveCoursesInfo";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import Header from "../components/Header";

const ExclusiveCourses = () => {
  return (
    <div>
      <Header />
      <div className="tutorials__header__container">
        <div className="Header">
          <h1 className="header_text">
            Search For Our{" "}
            <Typical
              steps={["Exclusive Courses", 1000, "Exclusive Tutorials", 1000]}
              loop={Infinity}
            />
          </h1>
        </div>
      </div>
      {ExclusiveCoursesInfo.map((val, index) => {
        return (
          <div className="cardss_container">
            <div className="cardss" key={index}>
              <Link to={val.url} className="card__link__course">
                <div className="CourseCard" id={val.id}>
                  <div className={val.className}>
                    <p style={{ color: "white" }}>{val.exclusive}</p>
                  </div>
                  <img src={val.image} className="card_img" alt="" />
                  <p style={{ color: "white" }}>{val.course_name}</p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExclusiveCourses;
