import React, { useState}  from "react";

import MyInput from "../input/MyInput";

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
        <form style={{display:"flex"}} onSubmit={(event) => {
            event.preventDefault()
            inputSubmit()
            props.setVisible(false)
        }
        }>
          <MyInput className="form-control" type="text" placeholder="Enter task" value={inputValue}  onChange={(event) => {setValue(event.target.value)}}></MyInput>
          <button className="btn btn-primary" type="submit" style={{width: "100px", marginLeft: "20px"}}>Add</button>
          
        </form>
      );
}

export default Form