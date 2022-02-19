import {useState} from 'react';

function GalleryItem({ galleryItem }) {
    console.log('in GalleryItem');
    const [description, setDescription] = useState('false');

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
    return (
        <div>
            {description ? <img onClick={handleClick} src={galleryItem.path} /> : <p onClick={handleClick}>{galleryItem.description}</p>}
        </div>
    )
}

export default GalleryItem;