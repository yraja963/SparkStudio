const Pagination=({imageperpage,totalimages})=>{
    const pageNumber=[];
    for(let i=0;i<=Math.ceil(totalimages/imageperpage);i++){
        pageNumber.push(i)
    }
    return (<nav><ul className="pagination">{pageNumber.map(number=><span className="page"><a href="!#" className="page-link">{number}</a></span>)}</ul></nav>)
}
export default Pagination;
// 
// 