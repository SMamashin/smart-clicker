import './index.scss';
import React from 'react';

function App() {

  const [count, SetCount] = React.useState(0);

  const OnCountPlus = () => {
    SetCount(count + 1)
  }

  const OnCountMinus = () => {
    if (count == 0) {
      SetCount(0)
    }
    else {
    SetCount(count - 1)
    }
  }

  const OnCountNull = () => {
    SetCount(0)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={OnCountMinus}>- Минус</button>
        <button className="plus" onClick={OnCountPlus}>Плюс +</button>
        <br></br>
        <button className='null' onClick={OnCountNull}>Обнулить</button>
      </div>
    </div>
  );
}

export default App;
