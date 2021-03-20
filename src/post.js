const Post=({image,loading})=>{
    if(loading){
        return <h2>Loading...</h2>

    }

    return(<ul className="list-group mb-4">{image.map(post=>(<li key={image.id} className="list-group-item"></li>))}
    {image.title}
    </ul>)
}
export default Post;