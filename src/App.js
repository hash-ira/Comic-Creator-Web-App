import React from "react";
import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MoreInfo from "./components/MoreInfo";
import Display from "./components/Display";

function App() {
  const [currIdx, setCurrIdx] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingIdx, setLoadingIdx] = React.useState(11);
  const [imgArr, setImgArr] = React.useState([
    {
      id: 0,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 1,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 2,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 3,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 4,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 5,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 6,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 7,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 8,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
    {
      id: 9,
      ImgURL:
        "https://www.printablee.com/postpic/2014/07/blank-comic-book-panels-templates_421202.png",
      text: "",
      isLoading: false,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <Input
        imgArr={imgArr}
        setImgArr={setImgArr}
        currIdx={currIdx}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setLoadingIdx={setLoadingIdx}
      />

      <Carousel
        imgArr={imgArr}
        setImgArr={setImgArr}
        currIdx={currIdx}
        setCurrIdx={setCurrIdx}
        loadingIdx={loadingIdx}
      />
      <Display
        imgArr={imgArr}
      />
    </div>
  );
}

export default App;
