import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"


function Card(props) {
  return (
    
      <div className="term">
        <dt>
          
          <img src={props.img} className="img-box"></img>
          <span>{props.name}</span>
          <div className="social">
          <FacebookIcon></FacebookIcon>
          <TwitterIcon></TwitterIcon>
          <InstagramIcon></InstagramIcon>
          <LinkedInIcon></LinkedInIcon>
          </div>
          
        </dt>
        <dd>{props.meaning}</dd>
      </div>
  );
}

export default Card;