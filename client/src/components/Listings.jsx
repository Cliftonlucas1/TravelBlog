import { useEffect, useState } from "react"
import axios from "axios"
import EditPost from "./EditPost"






const Listings = (props) => {
  
  const [allPost, setAllPost] = useState()
  const updateForm = () => {
  setShowForm(true)
  }
  
  const [showForm, setShowForm] = useState(false)
  
  
  
    const [editPost, setEditPost] = useState('')
  
  
  
    const handleChangeEdit = (event) => {
          setEditPost({ ...editPost, [event.target.id]: event.target.value })
        }
  
    const handleSubmitEdit = async (event) => {
          event.preventDefault()
          await axios.put('http://localhost:3001/api/posts', editPost)
          // setEditPost(edit)
          setShowForm(false)
    }
  
  useEffect(() =>{
    const getPost = async () => {

      const response = await axios.get(
        'http://localhost:3001/api/posts' 

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

     <button size='small'  onClick={() => {updateForm()}}>Edit</button>
     <button size='small'>Delete</button>
      
      {showForm? <div>
        <form onSubmit={handleSubmitEdit}>
<h2>Add A New Post!</h2>
  <label htmlFor="user"> name:</label>
  <input
    type="text"
    id="user"
    onChange={handleChangeEdit}
    value={allPost.user}
  />
   <label htmlFor="place">Location</label>
  <textarea
    id="place"
    cols="30"
    rows="10"
    onChange={handleChangeEdit}
    value={allPost.place}
  ></textarea>
  <label htmlFor="description">Description</label>
  <textarea
    id="description"
    cols="30"
    rows="10"
    onChange={handleChangeEdit}
    value={allPost.description}
  ></textarea>
   <label htmlFor="image">Description Picture</label>
  <textarea
    id="image"
    cols="30"
    rows="10"
    onChange={handleChangeEdit}
    value={allPost.image}
  ></textarea>
  <button type="submit">Send</button>
</form>
      </div> : <></>}
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