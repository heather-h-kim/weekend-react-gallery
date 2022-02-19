import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList }) {
    console.log('in GalleryList');
    console.log('galleryList is', galleryList);
    return (
        <>
            <div>
                {galleryList.map(galleryItem =>
                (<GalleryItem
                    key={galleryItem.id}
                    galleryItem={galleryItem} 
                />)
                )}
            </div>
        </>
    )
}

export default GalleryList;