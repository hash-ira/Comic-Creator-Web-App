import React, { useState } from 'react';
import '../Styles/Display.css'; 


function Display() {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='display-btn-container'>
            <button className="Display-btn" onClick={handleButtonClick}>Display Comic</button>
            {showModal && <input onClose={handleCloseModal} />}
        </div>
    );
}

export default Display;
