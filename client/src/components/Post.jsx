import { useState } from 'react'
import axios from 'axios'

const Post = (props) => {
  const initialState = {
    issueType: '',
    subject: '',
    message: ''
  }
  const [postState, setPostState] = useState(initialState)

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/issues', postState)
    setPostState(initialState)
props.getIssues()
  }

  return (
    <form onSubmit={handleSubmit}>
<h2>Add A New Boat Listing</h2>
  <label htmlFor="userName">User Name:</label>
  <input
    type="text"
    id="userName"
    onChange={handleChange}
    value={postState.userName}
  />
  <label htmlFor="description">Description</label>
  <textarea
    id="description"
    cols="30"
    rows="10"
    onChange={handleChange}
    value={postState.message}
  ></textarea>
   <label htmlFor="descriptionPicture">Description Picture</label>
  <textarea
    id="descriptionPicture"
    cols="30"
    rows="10"
    onChange={handleChange}
    value={postState.descriptionPicture}
  ></textarea>
  <button type="submit">Send</button>
</form>
  )
}

export default Post
