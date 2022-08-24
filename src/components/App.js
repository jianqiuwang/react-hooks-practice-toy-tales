import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  // const [likes, setLikes]=useState(0)
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(resp=>resp.json())
    .then(toys=>setToys(toys))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToyCard){
    setToys([...toys, newToyCard])
  }

  function handleDelete(item){
    const deteToy=toys.filter((toy)=>toy.id!==item.id)
    setToys(deteToy)
    
  }

  function handleUpdateToy(updatedToy){
    const updatedToys = toys.filter((toy)=>{
      if(toy.id===updatedToy.id) return updatedToy
      return true
    })
    setToys(updatedToys)

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onHandleDelete={handleDelete} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
