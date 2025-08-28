import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton'

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <div className="min-h-screen  p-6">
      <BackButton />
      <div className="max-w-3xl mx-auto bg-orange-200 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Checkout Page</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Products:</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{item.title}</span>
              <span className="font-medium text-gray-700">${item.price}</span>
            </div>
          ))}

          <div className="text-right mt-4 text-lg font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Shipping Address:</h3>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded px-4 py-2 bg-orange-100"
              required
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded px-4 py-2 bg-orange-100"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded px-4 py-2 bg-orange-100"
              required
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border rounded px-4 py-2 bg-orange-100"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
