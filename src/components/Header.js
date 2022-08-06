import React, { useState } from "react";

function Header(props) {
    const [inputValue , setInputValue] = useState(0)
    const changeHandler = (e)=>{
        if(e <= 0){
            setInputValue(0)
        }else if ((e >= 100)){
            setInputValue(100)
        }else{
            setInputValue(e)
        }
    }
    const countHandler = (count)=>{
        props.count(count)
    }
  return (
    <div className="header">
      <h1>Free lorem Ipsun Senteces</h1>
      <div className="header-select">
        <p>How Many sentences You need ? (max 100)</p>
        <input type='number' value={inputValue} onChange={(e) => changeHandler(e.target.value)} />
        <button  onClick={() => countHandler(inputValue)}>Submit</button>
      </div>
    </div>
  );
}

export default Header;
