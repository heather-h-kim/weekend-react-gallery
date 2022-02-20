import Axios from 'axios';
import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({ galleryItem, updateLikes }) {
    console.log('galleryItem is', galleryItem);
    const [description, setDescription] = useState('false');
 

    const handleClick = () => {
        console.log('image clicked');
        setDescription(!description);
    }

     
    //count loves
    const countClick = () => {
      updateLikes(galleryItem.id);
    }


    return (
        <div>
            {description ? <img className='image-box' onClick={handleClick} src={galleryItem.path} /> : <div className='description-box' onClick={handleClick}><p>{galleryItem.description}</p></div>}
            <br></br>
            <button onClick={countClick}>Love it!</button>
            <p>{galleryItem.likes} people love this!</p>

        </div>
    )
}

export default GalleryItem;