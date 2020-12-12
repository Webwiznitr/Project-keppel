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
        
          <center> {/*Facebook*/}
          <a href={props.facebook} className="social-icons facebook">
          {props.facebook.length>3 ? <FacebookIcon></FacebookIcon>:null}
          </a>

          {/*Twitter*/}
          <a href={props.twitter} className="social-icons twitter" >
          {props.twitter.length>2 ? <TwitterIcon></TwitterIcon>:null}
          </a>

          {/*Instagram*/}
          <a href={props.instagram} className="social-icons instagram" >
          {props.instagram.length>2 ? <InstagramIcon></InstagramIcon>:null}
          </a>

          {/*LinkedIn*/}
          <a href={props.linkedin} className="social-icons linkedin" >
          {props.linkedin.length>2 ? <LinkedInIcon></LinkedInIcon>:null}
          </a>

          {/*Youtube*/}
          <a href={props.youtube} className="social-icons youtube" >
          {props.youtube.length>2 ?<YouTubeIcon></YouTubeIcon>:null}
          </a>

          {/*Telegram*/}
          <a href={props.telegram} className="social-icons telegram">
          {props.telegram.length>2 ?<TelegramIcon></TelegramIcon>:null}
          </a>

          {/*Blog*/}
          <a href={props.blog} className="social-icons blog" >
          {props.blog.length>2 ?<BookIcon></BookIcon>:null}
          </a>


          {/*Portfolio*/}
          <a href={props.portfolio} className="social-icons portfolio" >
          {props.portfolio.length>2 ?<LanguageIcon></LanguageIcon>:null}
          </a>
          </center>
          
          
          </div>
          
        </dt>
        <dd><q><em>{props.meaning}</em></q></dd>
        <dt><center>
          <p style={{fontSize: "1.2rem", fontWeight: "600", color: "#00587a"}}>{props.pname}</p>
          <p style={{marginTop: "-4%"}}>Contact - {props.contact}</p>
        </center></dt>
      </div>
  );
}

export default Card;