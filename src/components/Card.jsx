import React from 'react';
import MiniCardTemp from './MiniCardTemp';


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
    <MiniCardTemp temp="min" value={props.min}/>
    <MiniCardTemp temp="max" value={props.max}/>

    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icono del clima" />
  </div>
};