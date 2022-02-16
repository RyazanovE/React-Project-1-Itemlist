import React from 'react'
import MyInput from "../components/input/MyInput";
import MySelect from "../components/select/MySelect";

const PostFilter = (props) => {

    return(
            <div>
                <button onClick={() => (props.setVisible(true))}>Create task</button>
                <MyInput text="" placeholder="Search" style={{marginTop: "10px", marginLeft: "30px"}} value={props.SearchQuery} onChange={(event) => {
                props.setSearchQuery(event.target.value)
                }}></MyInput>

                <MySelect onChange={(selected) => (props.setSelectedSort(selected))} value={props.SelectedSort} defaultValue="Sort by:" options={[{value: "id", name:"By id"}, {value:"content", name:"By content"}]}/>
                <button type="button" onClick={() => {props.SortId(props.SelectedSort)}} style={{width: "50px"}}>Sort</button>
           </div>
    )
}

export default PostFilter