import React, { useContext } from "react";
import "./Main.css";

import SummaryComponent from "../SummaryComponent/summary.component";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { CatsContext } from "../../Context/CatsContext";

import logo from "../../assets/logo_2.svg";

export default function MainComponent() {

  const [cats] = useContext(CatsContext);
  return (
   <div className="main-container">
   {console.log('----------cats--------',cats)}
      <img src={logo} alt="TinderCats" />
      {cats.length > 0 ? (
        <ul>
          {cats.map(cat => (
            <li key={cat.id}>
              <img src={cat.url} alt="cat.name" />
              {cat.breeds.map((breed)=>(
                <SummaryComponent cat= {breed} key={cat.id}/>
              ))}
              <ButtonComponent />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">No cats ...........</div>
      )}
    </div>
  );
}
