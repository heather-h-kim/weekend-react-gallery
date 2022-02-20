import Axios from 'axios';
import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({ galleryItem }) {
    console.log('in GalleryItem');
    const [description, setDescription] = useState('false');
    let [count, setCount] = useState(0);

    const displayDescription = (galleryItem) => {
        return (
            <div>
                <p>{galleryItem.description}</p>
            </div>
        )
    }

    const handleClick = () => {
        console.log('image clicked');
        setDescription(!description);
        
    }

     
    //count loves
    const countClick = ( ) =>{
      setCount(count+1);
      
    }

    //update counts
    const updateCounts = () => {
        
    }

    console.log('count is', count);
    return (
        <div>
            {description ? <img className='box' onClick={handleClick} src={galleryItem.path} /> : <div className='box' onClick={handleClick}><p>{galleryItem.description}</p></div>}
            <br></br>
            <button onClick={countClick}>Love it!</button>
            <p>{count} people love this!</p>

        </div>
    )
}

export default GalleryItem;