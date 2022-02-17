import React  from "react";
import {useNavigate} from 'react-router-dom'
 

function ListItem(props) {
  const navigate = useNavigate()

    let contentClasses = ['content']  
    if (props.elemCompl) {
        contentClasses.push('checked')
    }    

    return (    
    <li className="list-group-item post-item">
          <div className=" check"><input className="form-check-input me-1" type="checkbox" onChange={() => {props.change(props.elemID)}}></input></div>
            <div className=" check-num">{props.num}</div>
            <div className={contentClasses.join(' ')}>{props.elemContent}</div>
          <button className="btn btn-outline-dark btn-sm" style={{marginLeft: 'auto', marginRight: "10px"}} onClick={() => {navigate(`/posts/${props.num}`)}}>Open</button>
          <button className="btn-close delete-button" style={{marginLeft: 'auto'}} onClick={() => {props.remove(props.elemID)}}></button>
    </li>
    
  );
}


export default ListItem