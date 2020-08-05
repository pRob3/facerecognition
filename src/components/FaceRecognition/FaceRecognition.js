import React from 'react';


// API Docs:
// https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection#documentation

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center '>
            <img src={imageUrl} alt='Scanned' />
        </div>
    );
}

export default FaceRecognition;