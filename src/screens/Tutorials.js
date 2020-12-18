import React, { useState, useEffect } from "react";
import "./styles/Tutorials.css";
import Typical from "react-typical";
import { CoursesInfo } from "../CoursesThumbnails/MiddleCoursesInfo";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Tutorials = () => {
  useEffect(() => {
    document.title = "Our Courses";
    console.log("This Is Working");
  }, []);

  const [search, setSearch] = useState("");

  document.addEventListener("keypress", () => {
    const odd = document.getElementById("odd");
    try {
      odd.style.marginLeft = 0 + "px";
      odd.style.marginTop = 0 + "px";
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="tutorials">
      <Header />
      <div className="tutorials__header__container">
        <div className="Header">
          <h1 className="header_text">
            Search For Our{" "}
            <Typical
              steps={["Courses", 1000, "Tutorials", 1000]}
              loop={Infinity}
            />
          </h1>
        </div>
      </div>
      <div className="search_box">
        <input
          type="text"
          className="search"
          placeholder="Search Courses"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {CoursesInfo.filter((val) => {
          if (setSearch === "") {
            return val;
          } else if (
            val.course_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="cardss_container">
              <div className="cardss" key={key}>
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
    </div>
  );
};

export default Tutorials;
