import React from 'react';
import Popup from "reactjs-popup";

function EndGame(props) {
  return <Popup open={props.finish} closeOnDocumentClick nested>
  {
    <div>
      <div>Oyun Bitti</div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Yeniden Başla
      </button>
    </div>
  }
</Popup>;
}

export default EndGame;
