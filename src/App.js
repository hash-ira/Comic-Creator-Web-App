import React from 'react'
import './App.css';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  const [imgArr , setImgArr] = React.useState([
    {
      id : 0,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 1,
      ImgURL: "",
      text : ""
    },
    {
      id : 2,
      ImgURL: "",
      text : ""
    },
    {
      id : 3,
      ImgURL: "",
      text : ""
    },
    {
      id : 4,
      ImgURL: "",
      text : ""
    },
    {
      id : 5,
      ImgURL: "",
      text : ""
    },
    {
      id : 6,
      ImgURL: "",
      text : ""
    },
    {
      id : 7,
      ImgURL: "",
      text : ""
    },
    {
      id : 8,
      ImgURL: "",
      text : ""
    },
    {
      id : 9,
      ImgURL: "",
      text : ""
    }
  ]
  );

  return (
    <div className="App">
      <Navbar/>
      <Input imgArr = {imgArr} setImgArr = {setImgArr}/>
      <Carousel imgArr = {imgArr} setImgArr = {setImgArr}/>
    </div>
  );
}

export default App;
