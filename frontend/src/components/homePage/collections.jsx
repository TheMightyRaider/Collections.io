import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { randomColor } from "randomcolor";

function Collections({ collection }) {
  //states
  const [totLikes, setTotLikes] = useState(0);
  const [totFollowers, setTotFollowers] = useState(0);

  //utility fucntions
  let history = useHistory();
  const openCollection = (id) => {
    history.push("/detail/" + id);
  };
  const color = randomColor({
    luminosity: "light",
    hue: "rgba",
  });

  //lifecycle function
  useEffect(() => {
    if (collection) {
      var len = collection.snippets.length;
      var likes = 0;
      for (var i = 0; i < len; i++) {
        likes = likes + collection.snippets[i].hearts.length;
      }
      setTotLikes(likes);
      setTotFollowers(collection.followers.length);
    }
  }, []);

  const mystyle = {
    background: color,
  };

  return (
    <div className="collection">
      <div
        onClick={() => {
          openCollection(collection.id);
        }}
        className="card"
        style={mystyle}
      >
        {/* <img src={""} alt="TEMP"></img> */}
        <p>{collection.name}</p>
      </div>
      <p className="card-text">
        created by <span className="cyan">{collection.owner}</span>
      </p>
      <p className="card-text">
        {totLikes} HEARTS, {totFollowers} FOLLOWERS
      </p>
    </div>
  );
}

export default Collections;
