import React from 'react'
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";

const PostFilter = (props) => {

    return(
            <div style={{display: 'flex', alignItems: "center", paddingTop: 20}}>
                <button className="btn btn-outline-primary"  style={{margin: "0 20px", width: "300px"}} onClick={() => (props.setVisible(true))}>Create task</button>
                <MyInput className="form-control mr-sm-2"  text="" placeholder="Search"  value={props.SearchQuery} onChange={(event) => {
                props.setSearchQuery(event.target.value)
                }}></MyInput>
              
                <MySelect style={{height: 38, marginLeft: 20, borderColor: "green", color: "green", outline: 'none'}} onChange={(selected) => (props.setSelectedSort(selected))} value={props.SelectedSort} defaultValue="Sort by:" options={[{value: "id", name:"By id"}, {value:"title", name:"By content"}]}/>
                <button type="button" className='btn btn-outline-success my-2 my-sm-0' onClick={() => {props.SortId(props.SelectedSort)}} style={{width: "60px", marginRight: 20, borderRadius: 0}}>Sort</button>
               
           </div>
    )
}

export default PostFilter