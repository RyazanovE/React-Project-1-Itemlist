import React  from "react";



function ListItem(props) {
    let contentClasses = ['content']
    
    if (props.elemCompl) {
        contentClasses.push('checked')
    }    

    return (    
    <div className="itemList">
    <div className="checkbox"><input type="checkbox" onChange={() => {props.change(props.elemID)}}></input></div>
      <div className="itemID">{props.elemID}</div>
      <div className={contentClasses.join(' ')}>{props.elemContent}</div>
      <button className="delete-button" onClick={() => {props.remove(props.elemID)
      
      }}> &#10006;</button>
    </div>
    
  );
}


export default ListItem