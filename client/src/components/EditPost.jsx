import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"


const EditPost = ({post}) => {
const {id}=useParams()

let navigate=useNavigate()

  const [editPost, setEditPost] = useState()

  useEffect(()=>{
    const getPost = async () => {

      const response = await axios.get(
        `http://localhost:3001/api/posts/${id}`
  

         ) 
         setEditPost(response.data.post)
         console.log(response.data)

    }
    getPost()
  }, [id])


  const handleChangeEdit = (event) => {
    setEditPost({ ...editPost, [event.target.id]: event.target.value })
  }

const handleSubmitEdit = async (event) => {
    event.preventDefault()
    console.log(event.target)
  
    await axios.put(`http://localhost:3001/api/posts/${id}`, editPost)
navigate('/listings')

}










return (
  <form onSubmit={handleSubmitEdit}>
<h2>Add A New Post!</h2>
<label htmlFor="user"> name:</label>
<input
  type="text"
  id="user"
  onChange={handleChangeEdit}
  value={editPost?.user}
/>
 <label htmlFor="place">Location</label>
<textarea
  id="place"
  cols="30"
  rows="10"
  onChange={handleChangeEdit}
  value={editPost?.place}
></textarea>
<label htmlFor="description">Description</label>
<textarea
  id="description"
  cols="30"
  rows="10"
  onChange={handleChangeEdit}
  value={editPost?.description}
></textarea>
 <label htmlFor="image">Description Picture</label>
<textarea
  id="image"
  cols="30"
  rows="10"
  onChange={handleChangeEdit}
  value={editPost?.image}
></textarea>
<button type="submit">Send</button>
</form>
)

}


export default EditPost
