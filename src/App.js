import "./App.css";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lockCard, MatchCard, shuffleCards } from "./redux/CardsSlice";
import CardTable from "./components/Card/CardTable";
import EndGame from "./components/EndGame/EndGame";

function App() {
  const dispatch = useDispatch();
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.Cards.items);
  const user1Point = useSelector((state) => state.Cards.user1Point);
  const user2Point = useSelector((state) => state.Cards.user2Point);



  if (
    cards.filter((i) => i.isOpen === true).length === cards.length &&
    finish === false
  ) {
    setFinish(true);
    console.log("bitti oyun");
  }
  return (
    <div className="GameScreen">
      <div>{user1Point}</div>
      <CardTable />
      <div>{user2Point}</div>
      <EndGame finish={finish} / >
    </div>
  );
}

export default App;
