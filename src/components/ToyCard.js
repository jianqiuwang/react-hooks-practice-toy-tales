import React from "react";

function ToyCard({toy, onHandleDelete, onUpdateToy}) {
  function handleToyDelete(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE"
    })
    .then(resp=>resp.json())
    .then(()=>onHandleDelete(toy))
  }

  function handleLikesUpdate(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes : toy.likes += 1
      })
    })
    .then(resp=>resp.json())
    .then((updatedToy)=>onUpdateToy(updatedToy))

  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikesUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleToyDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
