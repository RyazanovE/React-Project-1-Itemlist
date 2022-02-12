import React, { useState}  from "react";
import Form from "../Posts/Form"
import List from "./List"

function App() {
    const [posts, setPosts] = useState(
      [
        { id: 1, content: "Homework", completed: false },
        { id: 2, content: "Cleaning", completed: false },
        { id: 3, content: "Shopping", completed: false },
      ],
      []
    );
  
    function SortId() {
      setPosts((currentPosts) => (currentPosts.map((post, index) => {
              post.id = index + 1
              return post
          })
      ))
    }
  
    function removeItem(id) {
          setPosts(posts.filter((post) => {
              return post.id !== id
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
        <div className="mainModule">
          <div className="form">
            <Form addPost={AddPost} sort={SortId}/>
          </div>
          <div className="list">
            <List postList={posts}  remove={removeItem} change={changeCheck} ></List>
          </div>
        </div>
      </div>
    
    );
  }


  export default App