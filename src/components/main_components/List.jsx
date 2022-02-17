import React  from "react";
import ListItem from "./ListItem";
import { TransitionGroup, CSSTransition} from "react-transition-group";

function List(props) {

 if (props.postList.length) {
   return (
    <ul className="list-group list-mygroup">
    <TransitionGroup >
 { props.postList.map((el, index) => {
    return (
      <CSSTransition classNames="post" timeout={500}  key={el.id}>
         
            <ListItem elemID={index+1} num={el.id} elemContent={el.title} elemCompl={el.completed} remove={props.remove} change={props.change}></ListItem> 
         
      </CSSTransition> 
    )
  }
  )
  }

  </TransitionGroup>
     </ul>

   )



} else {
    return <div style={{fontSize: "22px"}}>No tasks</div> 
  }
    
  }
  
  export default List