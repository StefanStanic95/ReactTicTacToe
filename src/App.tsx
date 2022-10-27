import { useState } from 'react';
import './App.css';
import { Field, FieldInfo } from './Field';

const Fields: FieldInfo[] = [];
for(let i = 0; i < 9; i++) {
  Fields.push(new FieldInfo(''));
}

function App() {
  const [player, setPlayer] = useState(1);

  const checkWinner: CallableFunction = function() {
    let symbols = ['X', 'O'];
    var winConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [6, 4, 2],
      [2, 5, 8],
      [1, 4, 7]
    ]

    for(let i in symbols) {
        for(let j in winConditions){
          let c = winConditions[j];

          if(Fields[c[0]].field === symbols[i] &&
            Fields[c[1]].field === symbols[i] &&
            Fields[c[2]].field === symbols[i]) {
              alert('Winner ' + symbols[i] + '!');
            }
        }
    }
  }

  const reportChildState: CallableFunction = (field: string, index: number) =>{
    Fields[index].field = field;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginBottom: "15px"}}>It's player {player}'s turn</div>

        <div className="gameContainer">
          {Fields.map((f, index: number) =>
            <Field reportState={reportChildState}
                   player={player} setPlayer={setPlayer}
                   key={index} index={index}
                   checkWinner={checkWinner} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
