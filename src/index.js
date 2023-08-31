import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FacebookPost from './App';
import img from './image/my img.jpg'
import postimg from './image/373016035_842820577210394_8933836662957754288_n.jpg'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookPost profImage = {img} Image = {postimg} name='Muhammed Usman Khan' time = '30 minutes ago' />
    <FacebookPost profImage = {img} Image = {postimg} name='Muhammed Usman Khan' time = '30 minutes ago' />
    <FacebookPost profImage = {img} Image = {postimg} name='Muhammed Usman Khan' time = '30 minutes ago' />
    <FacebookPost profImage = {img} Image = {postimg} name='Muhammed Usman Khan' time = '30 minutes ago' />
    <FacebookPost profImage = {img} Image = {postimg} name='Muhammed Usman Khan' time = '30 minutes ago' />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
