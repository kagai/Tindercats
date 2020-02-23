import React, { useContext } from "react";
import { CatsContext } from "../../Context/CatsContext";
import api from "../../services/api";

import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.png";

const ButtonComponent = ({ match }) => {
  const [cats, setCats] = useContext(CatsContext);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setCats(cats.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setCats(cats.filter(user => user._id !== id));
  }
  return (
    <div className="buttons">
      <button type="button" onClick={() => handleDislike(cats.id)}>
        <img src={dislike} alt="dislike" />
      </button>
      <button type="button" onClick={() => handleLike(cats.id)}>
        <img src={like} alt="like" />
      </button>
    </div>
  );
};

export default ButtonComponent;
