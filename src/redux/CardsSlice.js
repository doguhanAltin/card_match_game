import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
  name: "Cards",
  initialState: {
    items: [
      {
        id: "1",
        name: "Tarık Camdal",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74776-1632346822.jpeg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 4.75,
      },
      {
        id: "2",
        name: "Tarık Camdal",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74776-1632346822.jpeg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 4.75,
      },
      {
        id: "3",
        name: "Salih Dursun",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/big/176961-1545499104.jpeg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 2.75,
      },
      {
        id: "4",
        name: "Salih Dursun",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/big/176961-1545499104.jpeg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 2.75,
      },
      {
        id: "7",
        name: "Rodrigo Tabata",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/52911-1489050501.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 8.0,
      },
      {
        id: "8",
        name: "Rodrigo Tabata",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/52911-1489050501.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 8.0,
      },
      {
        id: "9",
        name: "Mehmet Topuz",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/17140-1441144417.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 9.0,
      },
      {
        id: "10",
        name: "Mehmet Topuz",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/17140-1441144417.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 9.0,
      },
      {
        id: "11",
        name: "Alper Potuk",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/99186-1634682690.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 7.25,
      },
      {
        id: "12",
        name: "Alper Potuk",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/99186-1634682690.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 7.25,
      },
      {
        id: "17",
        name: "Aras Ozbiliz",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/124891-1600615943.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.3,
      },
      {
        id: "18",
        name: "Aras Ozbiliz",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/124891-1600615943.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.3,
      },
      {
        id: "19",
        name: "Ogenyi Onazi",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/131709-1579134340.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.5,
      },
      {
        id: "20",
        name: "Ogenyi Onazi",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/131709-1579134340.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.5,
      },
      {
        id: "21",
        name: "Ismail Cipe",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/282460-1616164761.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.0,
      },
      {
        id: "22",
        name: "Ismail Cipe",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/282460-1616164761.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.0,
      },
      {
        id: "23",
        name: "Ismail Köybaşı",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74641-1630526785.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 5.5,
      },
      {
        id: "24",
        name: "Ismail Köybaşı",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74641-1630526785.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 5.5,
      },
      {
        id: "25",
        name: "Jermain Lens",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/38497-1568300883.JPG?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 5.5,
      },
      {
        id: "26",
        name: "Jermain Lens",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/38497-1568300883.JPG?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 5.5,
      },
      {
        id: "27",
        name: "Adem Ljajic",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/69374-1568213594.JPG?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 7.75,
      },
      {
        id: "28",
        name: "Adem Ljajic",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/69374-1568213594.JPG?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 7.75,
      },
      {
        id: "29",
        name: "Fode Koita",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/395862-1630526948.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.6,
      },
      {
        id: "30",
        name: "Fode Koita",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/395862-1630526948.png?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 1.6,
      },
      {
        id: "31",
        name: "Sercan Yıldırım",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/47604-1572863364.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.0,
      },
      {
        id: "32",
        name: "Sercan Yıldırım",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/47604-1572863364.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.0,
      },
      {
        id: "33",
        name: "Lucas Ontivero",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/265916-1464122223.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 2.0,
      },
      {
        id: "34",
        name: "Lucas Ontivero",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/265916-1464122223.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 2.0,
      },
      {
        id: "35",
        name: "Izet Harjovic",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74996-1605121766.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.5,
      },
      {
        id: "36",
        name: "Izet Harjovic",
        imgUrl:
          "https://img.a.transfermarkt.technology/portrait/header/74996-1605121766.jpg?lm=1",
        isOpen: false,
        disabled: false,
        locked: false,
        value: 3.5,
      },
    ],
    numberOfTour: 0,
    user1List: [],
    user2List: [],
    user1Point: 0,
    user2Point: 0,
    matchedCard: [],
    finish: false,
  },
  reducers: {
    openCard: (state, action) => {
      const { id } = action.payload;
      const sa = state.items.find((item) => item.id === id);
      sa.isOpen = !sa.isOpen;
      sa.disabled = true;
      state.matchedCard.push(sa);
    },
    MatchCard: (state) => {
      if (state.matchedCard.length === 2) {
        if (state.matchedCard[0].name === state.matchedCard[1].name) {
          state.numberOfTour % 2 === 0
            ? state.user2List.push(state.matchedCard[0])
            : state.user1List.push(state.matchedCard[0]);

          state.numberOfTour % 2 === 0
            ? state.user2Point-=state.matchedCard[0].value
            : state.user1Point-=state.matchedCard[0].value;

          state.matchedCard = [];
        } else {
          const it1 = state.items.find((i) => i.id === state.matchedCard[0].id);
          const it2 = state.items.find((i) => i.id === state.matchedCard[1].id);

          it1.isOpen = false;
          it2.isOpen = false;
          it1.disabled = false;
          it2.disabled = false;
          state.matchedCard = [];
        }
        state.numberOfTour += 1;
      }
      state.items.forEach((i) => (i.locked = false));
    },
    lockCard: (state) => {
      state.items.forEach((i) => (i.locked = true));
    },
    shuffleCards: (state) => {
      const newArr = state.items.slice();
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      state.items = newArr;
    },
  },
});

export default CardsSlice.reducer;
export const { openCard, MatchCard, lockCard, shuffleCards } =
  CardsSlice.actions;
