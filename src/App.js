import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shuffleCards } from "./redux/CardsSlice";
import CardTable from "./components/Card/CardTable";
import EndGame from "./components/EndGame/EndGame";
import User from "./components/User/User";

function App() {
  const dispatch = useDispatch();
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    dispatch(shuffleCards());
  }, [dispatch]);

  const cards = useSelector((state) => state.Cards.items);
  const user1List = useSelector((state) => state.Cards.user1List);
  const user2List = useSelector((state) => state.Cards.user2List);



  if (
    cards.filter((i) => i.isOpen === true).length === cards.length &&
    finish === false
  ) {
    setFinish(true);
    console.log("bitti oyun");
  }
  return (
    <>
    <div className="GameScreen">
    
      <User items={user1List} name="Club 1"/>
      <CardTable />
      <User items= {user2List}  name="Club 2" />
      <EndGame finish={finish} / >
    </div>
    </>
  );
}

export default App;
