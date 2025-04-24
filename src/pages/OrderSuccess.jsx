import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 md:p-12 max-w-lg w-full text-center">
        {/* Animated checkmark */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4 animate-bounce">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m1-5a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          🎉 Order Successful!
        </h1>
        <p className="text-gray-600 text-base mb-4">
          Thank you for your purchase! Your order has been confirmed and is being processed.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          You’ll receive an email receipt and delivery updates shortly.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/List"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/MyOrders"
            className="text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
