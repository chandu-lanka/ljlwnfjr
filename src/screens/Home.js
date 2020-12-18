import React, { useEffect } from "react";
import "./styles/Home.css";
import Typical from "react-typical";
import Card from "../components/Card";
import LetsBuildAWebsiteCard from "../components/LetsBuildAWebsiteCard";
import ReactNativeCard from "../components/ReactNativeCard";
import ReactCourseCard from "../components/ReactCard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    document.title =
      "Welcome to The Orange Triangle || Angle Up Your Web + App Skills";
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div>
      <div className="home__content">
        <Header />
        <div className="intro-container">
          <div className="intro__container">
            <h1 className="intro">
              Angle Up Your
              <Typical
                steps={["Web Skills", 2000, "And", 1000, "App Skills", 2000]}
                loop={Infinity}
              />
            </h1>
          </div>
        </div>

        <div className="cards">
          <Card>
            <h4 className="head">Learn Web Development</h4>
            <p className="desc">
              Learn Web Technologies like HTML, CSS, JAVASCRIPT and make awesome
              and cool websites from scratch
            </p>
            <button
              className="enrollnow"
              onClick={() => {
                window.location = "/Courses";
              }}
            >
              Start Now
            </button>
          </Card>
          <Card>
            <h4 className="head">Learn Web Frameworks</h4>

            <p className="desc">
              Learn Web Frameworks like React.js, Gatsby.js, Next.js from
              scratch and make dynamic and awesome web apps
            </p>
            <button
              className="enrollnow"
              onClick={() => {
                window.location = "/Courses";
              }}
            >
              Start Now
            </button>
          </Card>
          <Card>
            <h4 className="head">Learn App Development</h4>

            <p>
              Learn App Development and make awesome apps that you can publish
              to the app stores with React Native
            </p>
            <button
              className="enrollnow"
              onClick={() => {
                window.location = "/Courses";
              }}
            >
              Start Now
            </button>
          </Card>
        </div>

        <div className="section2__container">
          <div className="section2">
            <h1 className="section2-header">
              Some Of Our{" "}
              <Typical
                steps={[
                  "Best Courses",
                  1000,
                  "Best Tuts",
                  1000,
                  "Best Courses To Come",
                  1000,
                ]}
                loop={Infinity}
              />
            </h1>
          </div>
        </div>

        <div className="bestcoursescards">
          <ThemeProvider theme={theme}>
            <LetsBuildAWebsiteCard />
            <ReactNativeCard />
            <ReactCourseCard />
          </ThemeProvider>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
