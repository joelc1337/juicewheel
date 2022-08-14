import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// eslint-disable-next-line no-unused-vars
// import App from './components/App';
import Header from './components/Header'
import FoodCard from "./components/foodCard";
import reportWebVitals from './reportWebVitals';
import FoodCards from "./components/foodCards";
import SearchBar from './components/searchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <SearchBar/>  
    <div class="row container-fluid d-flex align-items-center">
      <FoodCards/>
    </div>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//https://stackoverflow.com/questions/68916389/how-can-i-render-images-in-a-loop-in-react