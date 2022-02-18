import React, { useState, useMemo, useEffect}  from "react";

import PostService from "../API/PostService";
import Loader from "../components/Loader/Loader";
import MyModal from "../components/modal/MyModal";
import Form from "../components/main_components/Form"
import List from "../components/main_components/List"
import PostFilter from "../components/main_components/PostFilter"
import {useFetching} from '../hooks/useFetching'
import {usePagination} from '../hooks/usePagination'
import Error from "../components/error/Error"
import { getPageCount } from "../utils/pages";
import Pagination from "../components/pagination/Pagination";



function Posts() {
    const [posts, setPosts] = useState([]);
    const [SearchQuery, setSearchQuery] = useState('') //search input value 
    const [visible, setVisible] = useState(false) //modal window
    const [SelectedSort, setSelectedSort] = useState('')  //тип сортировки
    const [totalPages, setTotalPages] = useState(0) //всего страниц
    const [limit, setLimit] = useState(8) //лимит страниц в запросе
    const [page, setPage, pagesArray] = usePagination(totalPages)   //текущая страницв

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
     
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))  
    })


    const changePage = (page) => {
      setPage(page)
    }

    useEffect(() => {fetchPosts()}, [page])

    const searchedQuery = useMemo(() => {
      return posts.filter(post => post.title.toLowerCase().includes(SearchQuery.toLowerCase()))
  }, [SearchQuery, posts])
  
    

    function SortId(sortType) {
        setPosts([...posts].sort((a, b) => String(a[sortType]).localeCompare(String(b[sortType]))))   
    }

    function removeItem(id) {
           setPosts(posts.filter((post, ind) => {
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
              title: value,
              id: 1,
              completed: false
          }])))
      } else if (posts.length < limit + 2){
      setPosts((currentPosts) => (currentPosts.concat([{
          title: value,
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
              {postError && <Error />}
              { (isPostsLoading)
              ? <Loader />
              : <List postList={searchedQuery}  remove={removeItem} change={changeCheck} ></List>                 
              }
              
            </div>

              <Pagination pagesArray={pagesArray} changePage={changePage}/>

          </div>

        </div>
    );
  }


  export default Posts