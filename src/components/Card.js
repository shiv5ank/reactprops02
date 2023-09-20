import React from "react";
import "./Card.css";
import bright1 from "../images/bright1.jpg";
import bright from "../images/brightPoster.jpeg";
import Tomb from "../images/Tomb.png";
import Tomb2 from "../images/tombposter.jpg";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const Card = () => {
  return (
    <div className="card_container">
      <div className="movie_card">
        <div className="left_container">
          <div className="movie_container">
            <div className="poster">
              <img
                src={bright1}
                alt="bright1"
                style={{
                  height: "170px",
                  borderRadius: "5px",
                  margin: "3px",
                }}
              ></img>
            </div>
            <div className="details">
              <h2>Bright</h2>
              <p class="blue_content">2017, David Ayer</p>
              <span
                class="duration"
                style={{
                  border: "0.5px solid white",
                  margin: "0.1rem",
                  padding: "0.2rem",
                  fontSize: "12px",
                }}
              >
                117 min
              </span>{" "}
              &nbsp;
              <span class="movie_type">Action, Crime, Fantasy</span>
            </div>
          </div>
          <div className="movie_info">
            <p class="info">
              Set in a world where fantasy creatures live side by side with
              humans. A human cop is forced to work with an Orc to find a weapon
              everyone is prepared to kill for.
            </p>
          </div>
          <div className="icon_container">
            <div className="icons">
              <ShareRoundedIcon style={{ color: "grey" }} />
            </div>
            <div className="icons">
              <FavoriteRoundedIcon style={{ color: "grey" }} />
            </div>
            <div className="icons">
              <ChatBubbleRoundedIcon style={{ color: "grey" }} />
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="movie_banner">
            <img
              src={bright}
              alt="banner"
              style={{
                height: "58vh",
                width: "30vw",
                borderRadius: "10px",
                margin: "5px",
              }}
            ></img>
          </div>
        </div>
      </div>

      <div className="movie_card">
        <div className="left_container">
          <div className="movie_container">
            <div className="poster">
              <img
                src={Tomb}
                alt="bright1"
                style={{
                  height: "170px",
                  borderRadius: "5px",
                  margin: "3px",
                }}
              ></img>
            </div>
            <div className="details">
              <h2>Tomb Raider</h2>
              <p class="blue_content">2018, Roar Uthaug</p>
              <span
                class="duration"
                style={{
                  border: "0.5px solid white",
                  margin: "0.1rem",
                  padding: "0.2rem",
                  fontSize: "12px",
                }}
              >
                125 min
              </span>{" "}
              &nbsp;
              <span class="movie_type">Action, Fantasy</span>
            </div>
          </div>
          <div className="movie_info">
            <p class="info">
              Lara Croft, the fiercely independent daughter of a missing
              adventure, must push herself beyond her limits when she finds
              herself on the island where her father dissappeared.
            </p>
          </div>
          <div className="icon_container">
            <div className="icons">
              <ShareRoundedIcon style={{ color: "grey" }} />
            </div>
            <div className="icons">
              <FavoriteRoundedIcon style={{ color: "grey" }} />
            </div>
            <div className="icons">
              <ChatBubbleRoundedIcon style={{ color: "grey" }} />
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="movie_banner">
            <img
              src={Tomb2}
              alt="banner"
              style={{
                height: "60vh",
                width: "30vw",
                borderRadius: "10px",
                margin: "5px",
                marginTop: "10px",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
