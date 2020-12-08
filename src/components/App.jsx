import React from "react";
import content from "../content";
import Card from "./Card";

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
      youtube = {content.telegram}
      telegram = {content.telegram}
      blog = {content.blog}
      portfolio = {content.portfolio}
      />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>clubopedia</span>
      </h1>
      <dl className = "dictionary">
      {content.map(createCard)}
      </dl>
      
    </div>
  );
}

export default App;
