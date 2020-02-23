
import React from 'react';
import "./singlePet.css";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
const SinglePet = ({cat,url}) => {
    return ( 
        <div
        id="petCard"
        className="expanded"
      >
        <div>
          <div id="picContainer">
            <img
              src={url}
              className="petPic"
              alt="pet profile pic"
            />
          </div>
        </div>
        <div>
          <h1> <strong>Name: </strong>{cat.name}</h1>
          <h2> <strong>Origin: </strong>{cat.origin}</h2>
          <h3>
              {cat.temperament}
          </h3>
          <p> <strong>Description: </strong> {cat.description}</p>
        </div>
      </div>

      );
};
 
export default SinglePet;