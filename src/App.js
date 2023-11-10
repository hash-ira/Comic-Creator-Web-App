import React from 'react'
import './App.css';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  const [currIdx, setCurrIdx] = React.useState(0);
  const [imgArr , setImgArr] = React.useState([
    {
      id : 0,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 1,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 2,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 3,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 4,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 5,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 6,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 7,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 8,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    },
    {
      id : 9,
      ImgURL: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
      text : ""
    }
  ]
  );

  return (
    <div className="App">
      <Navbar/>
      <Input 
          imgArr = {imgArr} 
          setImgArr = {setImgArr}
          currIdx={currIdx}/>

      <Carousel 
          imgArr = {imgArr} 
          setImgArr = {setImgArr}
          currIdx = {currIdx}
          setCurrIdx = {setCurrIdx}/>

    </div>
  );
}

export default App;
