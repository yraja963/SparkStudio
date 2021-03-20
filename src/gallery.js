import {useState,useEffect} from "react"
import Post from "./post"
import Pagination from "./pagination"
export default function Gallery(){
    const [image,setImage]=useState([])
    const [loading,setLoading]=useState(false)
    const [currentpage,setCurrentpage]=useState(1)
    const [imageperpage,setImageperpage]=useState(5)
     useEffect(() => {
         getphoto();
         async function getphoto(){
             setLoading(true)
             const res=await fetch(" https://images-api.nasa.gov/search?media_type=image");
             const data=await res.json()
             setImage(data.collection.items)
             setLoading(false);
             console.log(data.collection.items)
         }
     },[])
      
     const lastindex= currentpage*imageperpage;
     const firstindex=lastindex-imageperpage;
     const currentImage=image.slice(firstindex,lastindex)

return(
<div><Post image={currentImage} loading={loading} />
<Pagination imageperpage={imageperpage} totalimages={image.length} />
{/* {<img src={image[0].href} />} */}
</div>)
 }
// 
// 
