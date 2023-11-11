import React, { useState } from 'react';
import { Tooltip } from "react-tooltip";
import '../Styles/Display.css';


function Display({ imgArr }) {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='display-btn-container'>
            <button className="Display-btn" onClick={handleButtonClick} data-tooltip-id="tn-display-tooltip">Display Comic</button>
            <Tooltip id="tn-display-tooltip" clickable openOnClick>
                <ComicPage imgArr={imgArr} />
            </Tooltip>
        </div>
    );
}
const ComicPage = ({imgArr}) => (
    <div className="display-comic-container">
        {imgArr.map((img, index) => (
            <>
                {img.text.length === 0 ? (
                    <div className="display-panel">
                    </div>
                ) : (
                    <img src={img.ImgURL} alt="slide_image" className="display-panel" />
                )}
            </>
        ))}
    </div>
);

export default Display;
