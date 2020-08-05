import React from 'react';


/* API Docs:
 https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection#documentation
 https://github.com/Clarifai/clarifai-javascript
*/

const FaceRecognition = ({ imageUrl }) => {
    // console.log('check', imageUrl)
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt='Scanned' width='500px' height='auto' />
            </div>
        </div>
    );
}

export default FaceRecognition;