import { useEffect, useState } from "react"


const Search=()=>{
    const [input,setInput]=useState()
    const [photo,setPhoto]=useState([])

    
    useEffect(() =>  {
        fetchdata();
        async function fetchdata(){
        const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=kiYfgqIP13OZPuQqqXCdnmxgr0fX8xhbMpCVYHw6'
        );
        const data = await response.json();
        setPhoto(data)
        console.log(data)
        }
    
}, []);

    return<div className="title">
    NASA Media Search
    <div className="App">
        <nav className="navbar">{photo.title}
            <button className="btn">search</button>
            <input className="inputbtn" type="text" value={input}  />
        </nav>
        <div className="img"><img className="image" src={photo.url} alt="photo" /></div>

<div>{photo.explanation}</div>
<div>{photo.date}</div>
<div>@{photo.media_type}{photo.service_version}</div>
    </div>
</div>
}
export default Search;