import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetails"; // Import the product details component

const Pagination2 = () => {
    // State to store the fetched products
    const [products, setProducts] = useState([]);
    // State to track the current page number
    const [page, setPage] = useState(1);
    // State to store the selected product when a user clicks an image
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to fetch products from the API
    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await response.json();

        // If the response contains products, update the state
        if (data && data.products) {
            setProducts(data.products);
        }
    };

    // useEffect to fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to handle page selection
    const selectPageHandler = (selectedPage) => {
        // Ensure the selected page is within the valid range and is not the current page
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    return (
        <div className="p-6">
            {/* If there are products available, display them */}
            {products.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {
                        //slice is a array finction it can take 2 no one is start and end what u  want in (0,5)this will give only 5 element
                         //this page * 10 - 10 means when 2nd page came it should give 11 to 20 so this is imp
                    products.slice(page * 10 - 10, page * 10).map((prod) => (
                        <span 
                            key={prod.id} 
                            className="p-4 bg-red-200 text-center rounded-lg cursor-pointer hover:scale-105 transition"
                        >
                            {/* Clicking on the image will set the selected product for details view */}
                            <img 
                                src={prod.thumbnail} 
                                //this alt is very img it showing what is img all about
                                alt={prod.title} 
                                onClick={() => setSelectedProduct(prod)} // Open product details on click
                                className="w-full h-40 object-cover rounded-lg mb-2"
                            />
                            <span className="block font-semibold">{prod.title}</span>
                        </span>
                    ))}
                </div>
            )}

            {/* Pagination Controls */}
            {products.length > 0 && (
                <div className="flex justify-center items-center space-x-2 mt-6">
                    {/* Previous Page Button */}
                    <span
                        onClick={() => selectPageHandler(page - 1)}
                        className={`p-3 border rounded-md cursor-pointer ${
                            page > 1 ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        ⏮
                    </span>

                    {/* Dynamically generate page numbers based on product count */}
                    {[...Array(products.length / 10)].map((_, i) => (
                        <span
                            key={i}
                            className={`px-4 py-2 border rounded-md cursor-pointer ${
                                page === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-300"
                            }`}
                            onClick={() => selectPageHandler(i +1)}
                        >
                            {i + 1}
                        </span>
                    ))}

                    {/* Next Page Button */}
                    <span
                        onClick={() => selectPageHandler(page + 1)}
                        className={`p-3 border rounded-md cursor-pointer ${
                            page < products.length / 10 ? "hover:bg-gray-300" : "opacity-50 cursor-not-allowed"
                        }`}
                    >
                        ⏭
                    </span>
                </div>
            )}

            {/* Show Product Detail Component if a product is selected */}
            {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        </div>
    );
};

export default Pagination2;
