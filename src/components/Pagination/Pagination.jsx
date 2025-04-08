import { useEffect, useState } from "react";
import "./pagination.css"


const Pagination = () => {
  const [products,setProducts] = useState([]);
  const [page,setPage] =useState(1);
  
  const fetchProducts = async() =>{
    const res =await  fetch(`https://dummyjson.com/products?limit=100`)
    const data = await res.json();
    //if data and data.products me kuchh he to then setProducts we will do.
    if(data && data.products){
      setProducts(data.products)
    }
   
  }
  // console.log(products)
  //we can call this fetchProducts using useEffect
  useEffect(()=>{
    fetchProducts(); 
  },[]);

  const selectPageHandler= (selectedPage)=>{
    if(selectedPage >=1 && selectedPage <=products.length/10 && selectedPage != page)
    setPage(selectedPage);
  }
  return (
    <div>
      {
        products.length>0 && (
          <div className="products"> 
          {
            //slice is a array finction it can take 2 no one is start and end what u  want in (0,5)this will give only 5 element
            //this page * 10 - 10 means when 2nd page came it should give 11 to 20 so this is imp
            products.slice(page * 10 -10,page * 10).map((prod)=>{
              return (
                <span key={prod.id} className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
                </span>
              )
            })}
        </div>
        )}
        {
          products.length > 0 && <div className="pagination">
            <span onClick={()=>selectPageHandler(page-1)} 
              className={page > 1 ? "" : "pagination__disable"}
              >⏮</span>
            {/* this will give the how much content is there and divide with 10 it will give the number  */}
            {
              [...Array(products.length /10)].map((_,i)=>{
                // this clssnameis need to highlight the page and put the gray color here 
                return <span className={page === i+1 ? "pagination__selected" : ""}
                onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
              })
            }
          
            <span onClick={()=>selectPageHandler(page+1)}
              className={page < products.length /10 ? "" :"pagination__disable"}
              >⏭</span>
          </div>
        }
      
    </div>
  )
}

export default Pagination