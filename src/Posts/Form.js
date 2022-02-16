import React, { useState}  from "react";

import MyInput from "../components/input/MyInput";

function Form(props) {
    const [inputValue, setValue] = useState('')           //значение input для addtask
    
   
  
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
            inputSubmit()
            props.setVisible(false)
        }
        }>
          <MyInput type="text" placeholder="Enter task" value={inputValue}  onChange={(event) => {setValue(event.target.value)}}></MyInput>
          <button type="submit" style={{width: "50px", marginRight: "40px"}}>Add</button>
          
        </form>
      );
}

export default Form