import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"


// delete post is where you can delete a post of your choice

const DeletePost = ({post}) => {
  const {id}=useParams()
  
  let navigate=useNavigate()
  
    const [deletePost, setDeletePost] = useState()
  
    useEffect(()=>{
      const getPost = async () => {
  
        const response = await axios.get(
          `http://localhost:3001/api/posts/${id}`
    
  
           ) 
           setDeletePost(response.data.post)
           console.log(response.data)
  
      }
      getPost()
    }, [id])
  
  
    const handleChangeDelete = async (postId) => {
    await axios.delete(`http://localhost:3001/api/posts/${postId}`)
      console.log(postId)
      navigate('/listings')
    }
  
  const handleSubmitDelete = async (event) => {
      event.preventDefault()
      console.log(event.target)
    
      await axios.put(`http://localhost:3001/api/posts/${id}`, deletePost)
  }
  
  
  return (
    <div>
    <form onSubmit={() => handleSubmitDelete(deletePost._id)}>
  <h2>Delete Post!</h2>
  <label htmlFor="user"> name:</label>
  <input
    type="text"
    id="user"
    onChange={handleChangeDelete}
    value={deletePost?.user}
  />
   <label htmlFor="place">Location</label>
  <textarea
    id="place"
    cols="30"
    rows="10"
    onChange={handleChangeDelete}
    value={deletePost?.place}
  ></textarea>
  <label htmlFor="description">Description</label>
  <textarea
    id="description"
    cols="30"
    rows="10"
    onChange={handleChangeDelete}
    value={deletePost?.description}
  ></textarea>
   <label htmlFor="image">Picture</label>
  <textarea
    id="image"
    cols="30"
    rows="10"
    onChange={handleChangeDelete}
    value={deletePost?.image}
  ></textarea>
  </form>
  <button type="submit" onClick={()=> handleChangeDelete(deletePost._id)}>Delete</button>
  </div>
  )
  
  }
  
  
  export default DeletePost
  