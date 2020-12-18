import PythonCourseImg from "../CoursesThumbnails/PythonCourse.svg";
import FigmaImg from "./DESIGN YOUR WEBSITES WITH FIGMA.png";
import PygameImg from "./MAKE GAMES WITH PYTHON.png";
import DiscordBotImg from "../CoursesThumbnails/Make A Discord Bot.png";
import HCJ from "./OUR HTML, CSS, JS Tutorials.png";
import githubImg from "./GITHUB.png";

export const CoursesInfo = [
  {
    course_name: "Python 3 Course",
    image: `${PythonCourseImg}`,
    id: "even",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/python-3-course",
    youtube_link:
      "https://www.youtube.com/watch?v=TvIJtbhz4JM&list=PLlYWi4FzZ2dDyGbBSv_ks_4EuC8f_9yPq",
    description: [
      "In this course you'll learn the latest of python 3. From a complete beginner you will become an absolute master at the basics of python. So Angles What are you waiting for lets get started!",
    ],
  },

  {
    course_name: "Figma Tutorial",
    image: `${FigmaImg}`,
    id: "odd",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/figma-course",
    youtube_link: "https://www.youtube.com/watch?v=_d8Gu6uBIiY&t=257s",
    description: [
      "In this course you'll learn how to design your websites with figma. From A complete beginner you'll become an absolute master at figma. So Angles What are you waiting for lets get started!",
    ],
  },

  {
    course_name: "Pygame Tutorial",
    image: `${PygameImg}`,
    id: "even",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/pygame-course",
    youtube_link:
      "https://www.youtube.com/watch?v=TfI2uvvWpiY&list=PLlYWi4FzZ2dB6bkT7jArc38rJA15ZmDHW",
    description: [
      "In this course you'll learn how to build a game with python using a module called pygame. From complete beginner you'll get a grasp and a total understanding of pygame. So Angles What are you waiting for lets go!",
    ],
  },

  {
    course_name: "Discord Bot Tutorial",
    image: `${DiscordBotImg}`,
    id: "odd",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/discord-bot-course",
    youtube_link:
      "https://www.youtube.com/watch?v=s2aS_NQZJx8&list=PLlYWi4FzZ2dBujmLsFlVq0a8L-dfbUfFz",
    description: [
      "In this course you'll make a discord bot from scratch, you'll learn about discord.js and node.js and javascript as well. You'll be able to make your discord server from boring to absolutely amazing so lets go!",
    ],
  },

  {
    course_name: "HTML, CSS, and JS Tuts",
    image: `${HCJ}`,
    id: "even",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/html-css-js-course",
    youtube_link:
      "https://www.youtube.com/watch?v=_UBnlFQwKYM&list=PLlYWi4FzZ2dDS8THwr7JoYpLoOKYocOrZ",
    description: [
      "These tutorials are a few of my HTMl, CSS, and JavaScript tutorials put together. You'll learn how to join things together make simple projects and many more so what are you waiting for Angle lets go!",
    ],
  },

  {
    course_name: "Github -> Upload, Deploy",
    image: `${githubImg}`,
    id: "odd",
    exclusive: "On Youtube",
    className: "youtube",
    url: "/Courses/github-course",
    youtube_link:
      "https://www.youtube.com/watch?v=sRJpoCLKHkk&list=PLlYWi4FzZ2dAKVucuux_y29W29M0ZvQPS",
    description: [
      "In this course you'll learn how to Add your files to Github, And Deploy a website to the web with github, you'll also learn how to make a repository and upload with github desktop, Lets get Started!",
    ],
  },
];
