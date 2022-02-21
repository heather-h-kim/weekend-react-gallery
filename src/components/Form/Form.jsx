import {useState} from 'react';
import axios from 'axios';


function ImageForm ({getImage})  {
    console.log('in ImageForm');
    const [imageDescription, setImageDescription] = useState('');
    const [imagePath, setImagePath] = useState('');


    const handleSubmit = (event) => {
        console.log('in handleSubmit');
        event.preventDefault();

        axios({
            method: 'POST',
            url:'/gallery',
            data: {
                path: imagePath,
                description: imageDescription,
                likes: 0
            }
        }).then((result) => {
            console.log('result is', result);
            setImageDescription('');
            setImagePath('');
            getImage();
        }).catch((error) => {
            console.log('Error posting new image', error);
        })
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Description:</label>
            <input 
                type="text"
                value={imageDescription}
                onChange={(event) => setImageDescription(event.target.value)}
            />
            <label>URL:</label>
            <input 
                type="text"
                value={imagePath}
                onChange={(event) => setImagePath(event.target.value)}
            />
            <button type="submit">Add</button>   
        </form>

    )
}

export default ImageForm;