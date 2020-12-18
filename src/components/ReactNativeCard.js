import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Avatar, CardHeader } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import reactNativeImg from "../assets/MAKE MOBILE APPS.png";
import { Button } from "@material-ui/core";
import "./styles/ReactNativeCard.css";
import logo from "../assets/logo_channel.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  button: {
    border: "1px solid #ee8606",
    borderRadius: 15,
    color: "white",
    padding: "10px",
    background: "#ee8606",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="logo" src={logo} />}
        title="Make Apps With ReactNative"
        subheader="December 12, 2020"
      />
      <CardMedia
        className={classes.media}
        image={reactNativeImg}
        title="Make Apps With React Native"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          What's up Angles in this series we'll be learning how to make an app
          from scratch with react native. Hope you enjoy!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More:</Typography>
          <Typography paragraph>
            In this series we make a movie rating app from scrath as well as
            learn the basics of react native
          </Typography>
          <Typography paragraph>
            React Native uses A Web FrameWork called React.It is maintained by
            facebook themselves! Its a very popular framework because of its
            light speed technology, But mainly because it uses JavaScript and
            React.js.
          </Typography>
          <Typography paragraph>
            Once Your Done you'll have a firm grasp.
          </Typography>

          <Typography paragraph>Examples of what you'll learn:</Typography>
          <Typography paragraph>
            Setup, StyleSheets, External Modules,etc.
          </Typography>

          <Button
            className={classes.button}
            onClick={() => {
              window.location =
                "https://www.youtube.com/watch?v=rIZUQ8OmBjQ&list=PLlYWi4FzZ2dDir203zZzl3qrNU0J4f9oo";
            }}
          >
            Enroll This Course
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
