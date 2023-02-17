import { useEffect, useState } from "react"
import axios from "axios"



import { useNavigate } from "react-router-dom"


const Listings = (props) => {
let navigate=useNavigate()
  const [allPost, setAllPost] = useState()


  const getPost = async () => {

    const response = await axios.get(
      `http://localhost:3001/api/posts/`
  

       ) 
       setAllPost(response.data.posts)
      
  }

  const deleteComment = async (commentId) => {

    
 
  await axios.delete(`http://localhost:3001/api/comments/${commentId}`)
     getPost()
    
  
    }




  useEffect(() =>{
    
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
<div className="buttonGroup">
    <button size='small' id="edit" onClick={() => navigate(`/EditPost/${post._id}`)}>Edit</button>
    <button size='small' id="delete" onClick={() => navigate(`/DeletePost/${post._id}`)}>Delete</button>
    <button size='small' id="addComment" onClick={() => navigate(`/Comment/${post._id}`)}>Add Comment</button>
    </div>
    
   {post.comments.map((comment)=>(
    <div>
     <p>{comment.name}</p>
     <p>{comment.description}</p>
     <img id="commentPic" src={comment.image} alt="Comment-Poster" />


<button id="delete" onClick={() => deleteComment(comment._id) }>X</button>
     </div>
   ))}
    

     
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