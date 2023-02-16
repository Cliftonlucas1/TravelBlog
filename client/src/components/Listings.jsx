import { useEffect, useState } from "react"
import axios from "axios"
import EditPost from "./EditPost"
import DeletePost from "./DeletePost"

import { useNavigate } from "react-router-dom"






const Listings = (props) => {
let navigate=useNavigate()
  const [allPost, setAllPost] = useState()

  useEffect(() =>{
    const getPost = async () => {

      const response = await axios.get(
        `http://localhost:3001/api/posts/`
    

         ) 
         setAllPost(response.data.posts)
         console.log(response.data.posts)
    }
    getPost()
  }, [])
const showPost = 
  allPost?.map((post) =>  {


    return(
      <div className='listing-wrapper'>
      <img src={post.image} alt="vacation-Poster" />
      <h2>{post.user}</h2>
     <h2>{post.place}</h2> 
     <h3>{post.description}</h3> 

     <button size='small'  onClick={() => navigate(`/EditPost/${post._id}`)}>Edit</button>
     <button size='small' onClick={() => navigate(`/DeletePost/${post._id}`)}>Delete</button>
     <button size='small'  onClick={() => navigate(`/Comment/${post._id}`)}>Add Comment</button>

      
    </div>
    )
  })

  
  
  return(
    <div>
      {showPost}
    </div>
  )
}

export default Listings