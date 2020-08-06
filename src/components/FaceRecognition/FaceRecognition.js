import React from 'react';
import './FaceRecognition.css'


/* API Docs:
 https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection#documentation
 https://github.com/Clarifai/clarifai-javascript
*/

const FaceRecognition = ({ imageUrl, box }) => {
    // console.log('check', imageUrl)
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt='Scanned' width='500px' height='auto' />
                <div class='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;