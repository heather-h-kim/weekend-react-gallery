import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ galleryList, updateLikes, deleteImage}) {
    console.log('in GalleryList');
    console.log('galleryList is', galleryList);
    return (
        <>
            <div className='container'>
                {galleryList.map(galleryItem =>
                (<GalleryItem
                    key={galleryItem.id}
                    galleryItem={galleryItem} 
                    updateLikes={updateLikes}
                    deleteImage={deleteImage}
                />)
                )}
            </div>
        </>
    )
}

export default GalleryList;