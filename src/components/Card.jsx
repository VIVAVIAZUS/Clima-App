import React from 'react';
import MiniCardTemp from './MiniCardTemp';
import PropTypes from "prop-types";
import "./styles/card.css"
import {IoCloseCircleOutline} from "react-icons/io5"




export default function Card(props) {
  // Compruebo si la la propiedad "onClose" contiene una funcion
  function handleOnClose(){
    console.log(typeof props.onClose);
    if(typeof props.onClose==="function"){
      props.onClose();
    }
  }

  return <div className={styles.card}>
    <button className={styles.btn} onClick={handleOnClose}>
      <IoCloseCircleOutline/>
    </button>
    <h1 className={styles.city}>{props.name}</h1>
    
    <MiniCardTemp className={styles.min} temp="min" value={props.min}/>

    <MiniCardTemp className={styles.max} temp="max" value={props.max}/>

    <img className={styles.imag} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Icono del clima" />
  </div>
};


Card.propTypes={
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,


}