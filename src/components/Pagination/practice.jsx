import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetails";

const practice = () => {
    const [products,setProducts] =useState([]);
    const [page ,setPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    

    const fetchProducts = async()=>{
        const response  = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await response.json();

        if(data && data.products){
            setProducts(data.products);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    const selectPageHandler =(selectedPage)=>{
        if(selectedPage >=1 && selectedPage <= products.length/10 && selectedPage !==page){
            setPage(selectedPage);
        }
    }

   
  return (
    <div>

        {
            products.length > 0 && (
                <div>
                    {
                        products.slice(page *10- 10,page *10).map((prod)=>{
                            <span key={prod.id}
                            className="p-4 bg-red-200 text-center rounded-lg cursor-pointer hover:scale-105 transition"
                            >
                                <img src={prod.thumbnail}
                                 alt={prod.title}
                                 onClick={() => setSelectedProduct(prod)} // Open product details on click
                                 className="w-full h-40 object-cover rounded-lg mb-2"
                                 />
                                 <span className="block font-semibold">{prod.title}</span>
                            </span>
                        })
                    }
                </div>
            )
        }

        {
            products.length > 0 && (
                <div>
                    
                        <span 
                        onClick={()=>selectPageHandler(page -1)}
                        className={`p-3 borderd rounded-md cursor-pointer ${page > 1 ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"}`}
                        >
                             ⏮
                        </span>
{/* 
                    //Dynamically generated page numbers based on product count */} 
                    {
                        [...Array(products.length/10)].map((_,i)=>(
                            <span key={i}
                            className={`px-4 py-2 border rounded-md cursor-pointer ${page === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
                            onClick={()=>selectPageHandler(page +1)}
                            >
                                {i+1}
                            </span>
                        ))
                    }

                        <span 
                        onClick={()=>selectPageHandler(page +1)}
                        className={`p-3 borderd rounded-md cursor-pointer ${page < products.length/10  ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"}`}
                        >
                          ⏭
                        </span>
                    
                </div>
            )
        }

        {   
            selectedProduct && <ProductDetail product={selectedProduct} onClose={()=>setSelectedProduct(null)}/>
        }
    </div>
  )
}

export default practice