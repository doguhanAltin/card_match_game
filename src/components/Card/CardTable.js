import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { lockCard,MatchCard } from "../../redux/CardsSlice.js";
import Card from "./Card.js"
function CardTable() {
 const dispatch = useDispatch();
  const cards = useSelector((state) => state.Cards.items);
  const matchedCard = useSelector((state) => state.Cards.matchedCard);
  if (matchedCard.length === 2) {
    dispatch(lockCard());
    setTimeout(() => {
      dispatch(MatchCard());
    }, 500);
  }
  return (
    <div>
      <div className="App">
        {cards.map((item) => (
          <Card key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
