import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  function handleOnseach(){
    if(typeof props.onSearcha === "function"){
      const input= document.getElementById("searchBar")
      props.onSearcha(input.value);
    }
  }
  return <div>

    <input id="searchBar" type="text" />
    <button onClick={handleOnseach}></button>
  </div>
};