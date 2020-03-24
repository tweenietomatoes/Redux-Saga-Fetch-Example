import React from 'react';

import { useSelector, useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.posts.posts)

   function fetchPosts() {
   dispatch({type: 'FETCH_POSTS'})
   }

  return (
    <div className="App">
    <main>
    <center><button onClick={()=> fetchPosts()}><h1>Fetch Posts</h1></button></center>
    { selector.map( post => <li key={post.id}>{post.title}</li> )} 
    </main>
  </div> 
  );
}

export default App;
