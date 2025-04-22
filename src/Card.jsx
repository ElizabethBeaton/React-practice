// card components

import profilePic from "./assets/girl.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="image"></img>
      <h2 className="card-title">Lizzie</h2>
      <p className="card-text">I am a Wed Designer and I like going to the gym</p>
    </div>
  );
}

export default Card;
