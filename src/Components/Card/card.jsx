/* eslint-disable react/button-has-type */
import React ,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faGrinTongueSquint ,faCheck,faRemoveFormat} from '@fortawesome/free-solid-svg-icons';
import {  useToasts } from 'react-toast-notifications';
import { CatsContext } from '../../Context/CatsContext';

import './card.css';


const Card = () => {
   const [cats,setCats] = useContext(CatsContext);
   const [like, setLike] = useState(false);
   const [dislike, setDislike] = useState(false);
   const { addToast } = useToasts();
  
  // check if its already liked and bar the user from liking again
  const handleLike =(id)=> {
    if (localStorage.getItem("Dislike") === null) {
      addToast(`Cat liked ...`, { appearance: `success` });
      localStorage.setItem('like',id);
      setLike(true);
    }else{
      addToast(`Already disliked ...`, { appearance: `error` });
    }
   
  };
// check if its already disliked and bar the user from disliking again
  const  handleDislike =(id)=> {
    if (localStorage.getItem("Dislike") === null) {
      addToast(`Cat Disliked ...`, { appearance: `success` });
      localStorage.setItem('Dislike',id);
      setDislike(true);
    }else{
      addToast(`Already disliked ...`, { appearance: `error` });
    }
  
  };

  return (
    <>
      <h1>Tinder Cats</h1>
      {cats.map((cat)=>(
            <div className="matchesList" key={cat.id}>
            <div className="matches petCard">
            <Link to={`preview/${cat.id}`}>
              <img
                src={cat.url}
                className="petPic rounded"
                alt="cat profile pic"
              />
              </Link>
              <button className="unmatch smallIcon" onClick={() => handleLike(cat.id)}>
                {like ? (<FontAwesomeIcon icon={faHeart} />):(<FontAwesomeIcon icon={faCheck} />)}
              </button>
              <button className="emailEnvelope smallIcon" onClick={() => handleDislike(cat.id)}>
                {dislike ?(<FontAwesomeIcon icon={faGrinTongueSquint} />):(<FontAwesomeIcon icon={faRemoveFormat} />)}
              </button>
            {cat.breeds.map((breed)=>(
              <div className="petInfo" key={cat.id} style={{
                color: "#fff",
                textAlign: "left",
              }}>
                <h1 style={{
                  fontSize:"25px"
                }}>{breed.name} </h1>
               <h3>{breed.temperament}</h3>
              </div>
            ))}
            </div>
            
          </div>
      ))}

    </>
  );
};

export default Card;
