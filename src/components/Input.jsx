import React, { useState } from "react";
import "./../Styles/input.css"

function Input() {
  const [inputText, setInputText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await fetch('https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud', {
        method: 'POST',
        headers: {
          'Accept': 'image/png',
          'Authorization': 'Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM', // Include your Bearer token
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "inputs": inputText }),
      });

      if (response.ok) {
        const imageBlob = await response.blob();
        setImageURL(URL.createObjectURL(imageBlob));
        console.log(imageBlob);
        setErrorMessage(''); // Clear any previous error message
      } else if (response.status === 401) {
        setErrorMessage('Authentication failed. Please check your Bearer token.');
        setImageURL(''); // Clear the image URL
      } else {
        setErrorMessage('An error occurred. Please try again later.');
        setImageURL(''); // Clear the image URL
      }
    } catch (error) {
      console.error('Request error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setImageURL(''); // Clear the image URL
    }
  };


  return (
    <div className="form-container">
      <input
        className="form-input"
        type="text"
        placeholder="Enter promt for scene 1"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      <div>
        {imageURL && <img src={imageURL} alt="Image" />}
      </div>
    </div>
  );
}

export default Input;
