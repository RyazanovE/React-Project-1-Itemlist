import React, { useState}  from "react";



function Form(props) {
    const [inputValue, setValue] = useState('')
    
  

    function inputSubmit() {
        if (!inputValue.trim()) {
            alert("error")
        } else {
            props.addPost(inputValue)
            setValue(() => (''))
        }
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            inputSubmit()}
        }>
          <input type="text" placeholder="Enter task" value={inputValue}  onChange={(event) => {setValue(event.target.value)}}></input>
          <button type="button" onClick={() => {props.sort()}} style={{width: "50px"}}>Sort</button>
          <button type="submit" style={{width: "50px"}}>Add</button>
        </form>
      );
}

export default Form