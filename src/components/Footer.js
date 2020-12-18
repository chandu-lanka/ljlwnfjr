import React from "react";
import "./styles/Footer.css";
import { Button, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import logo from "../assets/logo_channel.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo__container">
        <a href="#">
          <img src={logo} alt="The Orange Triangle" className="footer__logo" />
        </a>
        <span className="youtube_channel_name">The Orange Triangle</span>
      </div>
      <div className="footer__copyright">
        <p className="copyright">
          © The Orange Triangle | 2020 | All Rights Reserved
        </p>
      </div>

      <div className="footer__social__media">
        <a href="https://twitter.com/chandulanka18" target="_blank">
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </a>

        <a href="https://instagram.com/chandu.lanka13" target="_blank">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
        <a
          href="https://www.youtube.com/channel/UCAaxdq2ej0RRdvhEmg-KbuQ"
          target="_blank"
        >
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default Footer;
