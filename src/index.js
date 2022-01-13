import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreContext, StoreProvider } from './store'

//fake comments
function emitComment(id) {
  setInterval(() => {
    // tao su kien tu comment trong 2s
    // su kien trong dom khac con khi muon tu tao event thi dung doi tuong windown
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
