import React from 'react';
import MiniCardTemp from "./MiniCardTemp"

export default function Card(props) {
  // Compruebo si la la propiedad "onClose" contiene una funcion
  function handleOnClose(){
    console.log(typeof props.onClose);
    if(typeof props.onClose==="function"){
      props.onClose();
    }
  }

  return <div>
    <button onClick={handleOnClose}>x</button>
    <h1>{props.name}</h1>
    
    <div>
      <label>Min</label>
      <span>{props.min}</span>
    </div>
    <div>
      <label>Max</label>
      <span>{props.max}</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icono del clima" />
  </div>
};