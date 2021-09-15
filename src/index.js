import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
//Components
import Home from './home.js';
import reportWebVitals from './reportWebVitals';

function Wrapper(){
  return(
    <main className='wrapper'>
      <Home/>
    </main>
  );
}

ReactDOM.render(<Wrapper />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
