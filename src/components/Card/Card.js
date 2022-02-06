import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCard, MatchCard } from "../../redux/CardsSlice";
import "./card.css";
function Card({ props }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={
          props.locked || props.disabled
            ? undefined
            : () => dispatch(openCard({ id: props.id }))
        }
        className="cardDiv"
      >
        <div className="innerCard">
          {props.isOpen ? (
            <div className="openedCard">
              {" "}
              <img src={props.imgUrl} alt="" />{" "}
            </div>
          ) : (
            <div className="closedCard"> ? </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
