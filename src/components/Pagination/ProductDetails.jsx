
const ProductDetail = ({ product, onClose }) => {
  // If no product is selected, return null (hide the component)
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        {/* Close button to hide the product detail view */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-gray-500 hover:bg-red-400 text-white p-1 rounded-md"
        >
          ❌
        </button>

        {/* Display product image */}
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
        
        {/* Product details */}
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-700"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-gray-700"><strong>Price:</strong> ${product.price}</p>
        <p className="text-gray-700"><strong>Description:</strong> {product.description}</p>
        <p className="text-gray-700"><strong>Rating:</strong> ⭐ {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
