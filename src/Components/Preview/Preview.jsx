/* eslint-disable react/button-has-type */
import React ,{useState, useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import SinglePet from '../SinglePet/SinglePet';
import api from '../../services/api';


import "./Preview.css";


const Preview = ({match}) => {
  const [cat, setCat] = useState('');
  const [url , setUrl] = useState('');
// TODO:This can ideally be handled as state, should be moved to its own context file
  useEffect(() => { 
    async function loadCat() {
        const response = await api.get(`/images/${match.params.petId}`, {
            headers: {'x-api-key':process.env.REACT_APP_KEY}
          });
          const {description,name,alt_names,origin,temperament} = response.data.breeds[0];
          const breed = {
            "name" : name,
            "description" : description,
            "alt_name" : alt_names,
            "origin" : origin,
            "temperament" :temperament
          };
          setCat(breed);
          setUrl(response.data.url);
    }
    loadCat();
}, [match.params.petId]);
    return ( 
    <div className="flex">
    <div id="singleMatchContainer">
          <button> 
             <FontAwesomeIcon icon={faHome}/>
          </button>
         <div>
            <SinglePet match={match} url ={url} cat={cat}/>
        </div>
       
    </div>
  </div> 
  );
};
 
export default Preview;