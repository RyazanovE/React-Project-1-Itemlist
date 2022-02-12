import React  from "react";
import ListItem from "./ListItem";

function List(props) {
    return props.postList.map((el) => {
      return (
        <ListItem key={el.id} elemID={el.id} elemContent={el.content} elemCompl={el.completed} remove={props.remove} change={props.change}></ListItem>
      );
    });
  }
  
  export default List