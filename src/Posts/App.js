import axios from "axios";
import React, { useState, useMemo}  from "react";

import MyModal from "../components/modal/MyModal";
import Form from "../Posts/Form"
import List from "./List"
import PostFilter from "./PostFilter.jsx"



function App() {
    const [posts, setPosts] = useState(
      [
        { id: 1, content: "Homework", completed: false },
        { id: 2, content: "Cleaning", completed: false },
        { id: 3, content: "Shopping", completed: false },
      ],
      []
    );
    const [SearchQuery, setSearchQuery] = useState('') //search input value 
    const [visible, setVisible] = useState(false) //modal window
    const [SelectedSort, setSelectedSort] = useState('')  //тип сортировки

    const searchedQuery = useMemo(() => {
      return posts.filter(post => post.content.toLowerCase().includes(SearchQuery.toLowerCase()))
  }, [SearchQuery, posts])
  
    async function fetchPosts() {
      const arr = []

      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2')

  
    }
    
    

    function SortId(sortType) {
        setPosts([...posts].sort((a, b) => String(a[sortType]).localeCompare(String(b[sortType]))))   
    }
  
    function removeItem(id) {
      fetchPosts()
           setPosts(posts.filter((postm, ind) => {
              return ind + 1 !== id
          }))
        
    }
  
    function changeCheck(id) {
      setPosts(posts.map((post) => {
          if (post.id === id) {
              post.completed = !post.completed
          }
          return post
      }))
    }
  
    function AddPost(value) {
      
      if (!posts.length) {
          setPosts((currentPosts) => (currentPosts.concat([{
              content: value,
              id: 1,
              completed: false
          }])))
      } else {
      setPosts((currentPosts) => (currentPosts.concat([{
          content: value,
          id: currentPosts[ currentPosts.length-1].id+1,
          completed: false
      }])))
  }
    }
  


    return (
        <div className="container"> 
            <MyModal visible={visible} setVisible={setVisible}>
                  <Form setVisible={setVisible} postList={posts} setPosts={setPosts} addPost={AddPost} sort={SortId} sort={SelectedSort}/>
            </MyModal>

          <div className="mainModule">

            <PostFilter setVisible={setVisible} SearchQuery={SearchQuery} setSearchQuery={setSearchQuery} setSelectedSort={setSelectedSort} SelectedSort={SelectedSort} SortId={SortId}/>

            <div className="list">
           
              <List postList={searchedQuery}  remove={removeItem} change={changeCheck} ></List>

            </div>
          </div>
        </div>
    );
  }


  export default App