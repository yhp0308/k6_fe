import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ./App.js를 Js 생략해놓은것. -> <App />처럼 태그로 쓴다. 컴포넌트(함수)다. '사용자 정의 태그' (내가 만든 태그)
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 리턴되는게 여기 나온다. HTML 태그가 나온다.
  // <React.StrictMode>
    <App /> 
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
