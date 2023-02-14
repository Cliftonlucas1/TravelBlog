import { Link } from 'react-router-dom'



const Listings = (props) => {
  const showPost = (post) => {

  }

  return (
    <div className="post-grid">
      {
      props.posts.map((post) => (
        <div className="post-card" onClick={() => showPost(post)} key={post.id}>
         <Link to={`${boat.id}`}>
          <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
          <h3>{boat.name}</h3>
          </Link>


          {/* <Link to={`${home}`}> */}


        </div>
      ))}
    </div>
  )
}

export default Listings