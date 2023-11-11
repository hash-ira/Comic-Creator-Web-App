import React, { useState } from "react";
import "./../Styles/input.css";


function Input({ imgArr, setImgArr, currIdx, isLoading, setIsLoading, setLoadingIdx }) {
  console.log(currIdx);
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit(e);
    }
  }
  React.useEffect(
    function () {
      setInputText(imgArr[currIdx].text);
    },
    [currIdx, imgArr]
  );

  //handling setImgArray
  function changeState(textInput, imageBlobURL) {
    //remove prev state
    setImgArr(
      imgArr.filter((ele) => {
        return ele.id !== currIdx;
      })
    );

    //adding new state
    setImgArr((prev) => {
      return [
        ...prev,
        {
          id: currIdx,
          ImgURL: imageBlobURL,
          text: textInput,
        },
      ];
    });

    //sorting the array
    setImgArr((prev) => prev.sort((a, b) => a.id - b.id));
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      setIsLoading(true);
      imgArr[currIdx].isLoading = true;
      setLoadingIdx(currIdx);
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          method: "POST",
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: inputText + " Draw in comic art style." }),
        }
      );
      imgArr[currIdx].isLoading = false;
      setLoadingIdx(11)
      if (response.ok) {
        const imageBlob = await response.blob();
        let imageBlobURL = URL.createObjectURL(imageBlob);
        changeState(inputText, imageBlobURL);
        setErrorMessage(""); // Clear any previous error message
      } else if (response.status === 401) {
        setErrorMessage(
          "Authentication failed. Please check your Bearer token."
        );
        changeState(inputText, ""); // Clear the image URL
      } else {
        setErrorMessage("An error occurred. Please try again later.");
        changeState(inputText, ""); // Clear the image URL
      }
    } catch (error) {
      console.error("Request error:", error);
      setErrorMessage("An error occurred. Please try again later.");
      changeState(inputText, ""); // Clear the image URL
    }
    setIsLoading(false);
    console.log(errorMessage);
  };

  return (
    <div>
      <form type="submit" className="form-container">
        <label className="form-label">{`Enter prompt for scene ${currIdx + 1} :`}</label>
        <textarea
          type="text" rows="3" onKeyDown={onEnterPress}
          className="form-input"
          // placeholder={`Enter prompt for scene ${currIdx + 1}`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="form-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Sketch
        </button>
      </form>
    </div>
  );
}

export default Input;
