import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  console.log('in App');
  const [galleryList, setGalleryList] = useState([]);

  const getItem = () => {
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

  useEffect(() => {
    console.log('in useEffect');
    getItem();
  },[])
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <GalleryList galleryList={galleryList}/> 
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
