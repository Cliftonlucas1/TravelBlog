import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"


const Comment = () => {
  const {id}=useParams()
  
  let navigate=useNavigate()
  
    const [comment, setComment] = useState()
  
  const [post, setPost] = useState()

    useEffect(()=>{
      const getPost = async () => {
  
        const response = await axios.get(
          `http://localhost:3001/api/posts/${id}`
    
  
           ) 
           setPost(response.data.post)
           console.log(post)
  
      }
      getPost()
    }, [])
  
  
    const handleComment = (event) => {
      setComment({ ...comment, [event.target.id]: event.target.value })
    }
  
  const handleSubmitComment = async (event) => {
      event.preventDefault()
      console.log(event.target)
    
      await axios.put(`http://localhost:3001/api/comments/${id}`, comment)
  navigate('/listings')
  
  }
  
  
  
  
  
  
  
  
  
  
  return (
<div>
<div className='listing-wrapper'>
      <img src={post.image} alt="vacation-Poster" />
      <h2>{post.user}</h2>
     <h2>{post.place}</h2> 
     <h3>{post.description}</h3> 

     <button size='small'  onClick={() => navigate(`/EditPost/${post._id}`)}>Edit</button>
     <button size='small' onClick={() => navigate(`/DeletePost/${post._id}`)}>Delete</button>
     <button size='small'  onClick={() => navigate(`/Comment/${post._id}`)}>Add Comment</button>

      
    </div>

    <form onSubmit={handleSubmitComment}>
  <h2>Add A Comment!</h2>
  <label htmlFor="name"> name:</label>
  <input
    type="text"
    id="name"
    onChange={handleComment}
    value={comment?.name}
  />
   <label htmlFor="discription">Discription</label>
  <textarea
    id="discription"
    cols="30"
    rows="10"
    onChange={handleComment}
    value={comment?.discription}
  ></textarea>
  <label htmlFor="image">Add Image</label>
  <textarea
    id="image"
    cols="30"
    rows="10"
    onChange={handleComment}
    value={comment?.image}
  ></textarea>
  <button type="submit">Send</button>
  
  </form>
  </div>
  )
  
  }
  
  
  export default Comment
  







