import { useState } from 'react'
import axios from 'axios'

const Post = (props) => {
  const initialState = {
    user: '',
    place:'',
    description: '',
    image: ''
  }
  const [postState, setPostState] = useState(initialState)

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/posts', postState)
    setPostState(initialState)

  }







  return (
    <form onSubmit={handleSubmit}>
<h2>Add A New Post!</h2>
  <label htmlFor="user"> name:</label>
  <input
    type="text"
    id="user"
    onChange={handleChange}
    value={postState.user}
  />
   <label htmlFor="place">Location</label>
  <textarea
   type="text"
    id="place"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={postState.place}
  ></textarea>
  <label htmlFor="description">Description</label>
  <textarea
   type="text"
    id="description"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={postState.description}
  ></textarea>
   <label htmlFor="image">Description Picture</label>
  <textarea
   type="text"
    id="image"
    cols="20"
    rows="20"
    onChange={handleChange}
    value={postState.image}
  ></textarea>
  <button type="submit">Send</button>
</form>
  )
}

export default Post
