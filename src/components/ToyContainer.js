import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onHandleDelete, onUpdateToy}) {
  const showToyArray = toys.map((toy)=><ToyCard key={toy.id} toy={toy} onHandleDelete={onHandleDelete} onUpdateToy={onUpdateToy}/>)
  return (
    <div id="toy-collection">{showToyArray}</div>
  );
}

export default ToyContainer;
