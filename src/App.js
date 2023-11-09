import React from 'react'
import './App.css';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  const [ImgURL , setImgURL] = React.useState(
    {
      
    }
  );
  return (
    <div className="App">
      <Navbar/>
      <Input ImgURL = {ImgURL} setImgURL = {setImgURL}/>
      <Carousel ImgURL = {ImgURL}/>
    </div>
  );
}

export default App;
