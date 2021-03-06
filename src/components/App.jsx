import React from "react";
import content from "../content";
import Card from "./Card";
import Footer from "./Footer";
import sectionHeader from "./sectionHeader";

function createCard(content) {
  return (
    <Card
      key={content.id}
      name={content.name}
      img={content.img}
      meaning={content.descp}
      facebook={content.facebook}
      twitter = {content.twitter}
      instagram = {content.instagram}
      linkedin = {content.linkedin}
      youtube = {content.youtube}
      telegram = {content.telegram}
      blog = {content.blog}
      portfolio = {content.portfolio}
      pname={content.pname}
      contact={content.contact}
      />
  );
}

function App() {
  return (
    <div>
      <h1>
        <header>CLUBOPEDIA</header>
      </h1>
      <sectionHeader/>
      <dl className = "dictionary">
      {content.map(createCard)}
      </dl>
      <Footer/>
    </div>
  );
}

export default App;
