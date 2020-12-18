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
import letsbuildawebsiteimg from "../assets/LETS BUILD A WEBSITE.png";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Button, CardHeader, Avatar } from "@material-ui/core";
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

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="logo" src={logo} />}
          title="Lets Build A Website"
          subheader="December 12, 2020"
        />
        <CardMedia
          className={classes.media}
          image={letsbuildawebsiteimg}
          title="Lets Build A Website"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Whats Up Angles, in this series we'll be building a website
            challenge with frontend mentor hope you enjoy!
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
              In this series we build a totally functional website with the help
              of FrontendMentors challenges. You'll learn the basics of HTML,
              CSS, And JAVASCRIPT in this small little series
            </Typography>
            <Typography paragraph>
              Things We Did: (And Still Have Todo)
            </Typography>
            <Typography paragraph>
              1. We Made The Navbar For The Website.
            </Typography>
            <Typography paragraph>2. We made Half Of The Website</Typography>

            <Typography paragraph>
              3. Need to Make The Other Half Of the Website
            </Typography>

            <Typography paragraph>4. We need to finish the Footer</Typography>
            <Button
              className={classes.button}
              onClick={() => {
                window.location =
                  "https://www.youtube.com/watch?v=gdk8-orpdbg&list=PLlYWi4FzZ2dBzkfsKpqTmqs1rtNER5Etf";
              }}
            >
              Enroll This Course
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
