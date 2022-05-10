import atl from "../pictures/dream.gif";
import dfw from "../pictures/wings.gif";
import chi from "../pictures/sky.gif";
import lax from "../pictures/sparks.gif";
import ct from "../pictures/sun.gif";

import { useState, useEffect } from "react";

const Card = (props) => {
  const { score, setScore, bestScore, setBestScore } = props;
  const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isRandomized, setIsRandomized] = useState(false);
  const [charName, setCharName] = useState([
    "Atlanta",
    "Dallas",
    "Chicago",
    "Los Angeles",
    "Connecticut",
  ]);

  const [avatar, setAvatar] = useState([
    atl,
    dfw,
    chi,
    lax,
    ct,
  ]);

  const [pickedChar, setPickedChar] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let recordSet = [];
  let pickedCharSet = [false, false, false, false, false, false, false, false];

  const randomizeVal = () => {
    recordSet = [];
    let valSequenceCopy = [0, 0, 0, 0, 0, 0, 0, 0];
    valSequenceCopy.map((e, id) => {
      let number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
      while (recordSet.includes(number)) {
        number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
      }
      valSequenceCopy[id] = number;
      recordSet.push(valSequenceCopy[id]);
      return number;
    });

    setValSequence(recordSet);
  };

  useEffect(() => {
    if (!isRandomized) {
      randomizeVal();
      setIsRandomized(true);
    }
  });

  const scorePoint = (num) => {
    randomizeVal();
    if (pickedChar[num]) {
      if (bestScore < score) {
        setBestScore(score);
      }

      setScore(0);
      pickedCharSet = pickedCharSet.map((e) => {
        return false;
      });
      setPickedChar(pickedCharSet);
    } else {
      setScore(score + 1);
      pickedCharSet = [...pickedChar];
      pickedCharSet[num] = true;
      setPickedChar(pickedCharSet);
    }
  };

  return valSequence.map((num) => {
    return (
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img
              src={avatar[num]}
              id={charName[num]}
              onClick={(e) => {
                scorePoint(num);
              }}
            ></img>
          </div>
          <div className="content">
            <a
              className="header ui centered"
              id={charName[num]}
              onClick={(e) => {
                scorePoint(num);
              }}
            >
              {charName[num]}
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;