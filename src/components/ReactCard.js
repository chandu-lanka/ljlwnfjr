import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactThumbnail from "../assets/ReactFC.svg";
import { Button } from "@material-ui/core";
import { CardHeader, Avatar } from "@material-ui/core";
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
    margin: "10px",
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
  avatar: {
    backgroundColor: red[500],
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
        title="Make Awesome Website With React"
        subheader="New Course Coming Soon!"
      />
      <CardMedia
        className={classes.media}
        image={ReactThumbnail}
        title="The Full React Course"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is the complete guide to react.js a frontend framework which I
          personally prefer because it is awesome so join the course
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
            In this Course you'll become acute to complete angle after this
            complete React.js Course
          </Typography>
          <Typography paragraph>
            In this Course you will learn:
            <li>How to setup React</li>
            <li>Components in React</li>
            <li>Hooks in React</li>
          </Typography>
          <Typography paragraph>And More...</Typography>
          <Typography paragraph></Typography>
          <Typography style={{ textAlign: "center" }}>
            After this Course You will Be able to:
            <li style={{ textAlign: "center" }}>
              Make Projects Without Fear😓
            </li>
            <li style={{ textAlign: "center" }}>
              Create components on your own
            </li>
            <li style={{ textAlign: "center" }}>
              Be ready to use Hooks without doubt
            </li>
          </Typography>

          <Button disabled className={classes.button}>
            Enroll This Course
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
