import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import LanguageIcon from '@material-ui/icons/Language';
import BookIcon from '@material-ui/icons/Book';

function Card(props) {
  return (
    
      <div className="term">
        <dt>
          
          <img src={props.img} className="img-box"></img>
          <span>{props.name}</span>
          <div className="social">
          <a href={props.facebook} className="social-icons facebook">
          <FacebookIcon></FacebookIcon>
          </a>
          <a href={props.twitter} className="social-icons twitter" >
          <TwitterIcon></TwitterIcon>
          </a>
          <a href={props.instagram} className="social-icons instagram" >
          <InstagramIcon></InstagramIcon>
          </a>
          <a href={props.linkedin} className="social-icons linkedin" >
          <LinkedInIcon></LinkedInIcon>
          </a>
          <a href={props.youtube} className="social-icons youtube" >
          <YouTubeIcon></YouTubeIcon>
          </a>
          <a href={props.telegram} className="social-icons telegram" >
          <TelegramIcon></TelegramIcon>
          </a>
          <a href={props.blog} className="social-icons blog" >
          <BookIcon></BookIcon>
          </a>
          <a href={props.portfolio} className="social-icons portfolio" >
          <LanguageIcon></LanguageIcon>
          </a>
          
          
          
          </div>
          
        </dt>
        <dd>{props.meaning}</dd>
      </div>
  );
}

export default Card;