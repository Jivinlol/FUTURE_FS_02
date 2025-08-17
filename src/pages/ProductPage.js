import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../data/product';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const products = useProducts();
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);
  const [addedtoCart, setaddtoCart] = useState(false);

  const [comments, setComments] = useState([
    { id: 1, author: "Sarah M.", text: "Great quality product! Exactly as described.", rating: 5 },
    { id: 2, author: "John D.", text: "Fast shipping and excellent customer service.", rating: 4 },
    { id: 3, author: "Emma L.", text: "Love this! Perfect addition to my collection.", rating: 5 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddToCart = () => {
    addToCart(product);
    setaddtoCart(true);
  };

  const shopMore = () => {
    navigate("/allproducts");
  };

  const gotoCart = () => {
    navigate("/cart");
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() && newAuthor.trim()) {
      const comment = {
        id: comments.length + 1,
        author: newAuthor,
        text: newComment,
        rating: newRating
      };
      setComments([...comments, comment]);
      setNewComment('');
      setNewAuthor('');
      setNewRating(5);
    }
  };

  if (!product) return <div className="p-6 text-xl">Product not found.</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={"data:image/png;base64," + product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-lg shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Description</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description || "This carefully selected plant accessory is crafted with attention to detail and designed to elevate your space."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleAddToCart()}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => shopMore()}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Shop More
            </button>

            {addedtoCart && (
              <button
                onClick={() => gotoCart()}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Go to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        {/* Existing Comments */}
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>

        {/* Add New Comment Form */}
        <form onSubmit={handleSubmitComment} className="space-y-4 max-w-md">
          <h3 className="text-xl font-semibold">Add a Review</h3>
          <input
            type="text"
            placeholder="Your name"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Your review"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            rows={4}
            required
          />
          <label className="block">
            Rating:
            <select
              value={newRating}
              onChange={(e) => setNewRating(parseInt(e.target.value))}
              className="ml-2 px-2 py-1 border rounded"
            >
              {[5, 4, 3, 2, 1].map((rate) => (
                <option key={rate} value={rate}>{rate}</option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
