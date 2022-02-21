import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form';

function App() {
  console.log('in App');
  const [galleryList, setGalleryList] = useState([]);

  const getImage = () => {
    console.log('in getItem');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( (response) => {
      console.log('response is', response);
      console.log('data is', response.data);
      setGalleryList(response.data);
    })
  }
  
  const updateLikes = (id) => {
    console.log('in updateLikes');
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((response) => {
      console.log('PUT response.data is', response.data);
      getImage();
    }).catch((error) => {
      console.log('Error updating likes', error);
    })
  }

  const deleteImage = (id) => {
    console.log('in deleteImage');
    axios({
      method: 'DELETE',
      url: `/gallery/delete/${id}`
    }).then((response) => {
      console.log('Deleted');
      getImage();
    }).catch((error) => {
      console.log('Error deleting the image');
    })
  }


  useEffect(() => {
    console.log('in useEffect');
    getImage();
  },[])
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Form getImage={getImage}/>
        {/* <p>Gallery goes here</p> */}
        <GalleryList galleryList={galleryList} updateLikes={updateLikes} deleteImage={deleteImage}/> 
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
