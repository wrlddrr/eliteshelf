const OrderDetail = ({ order }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-700">Order #{order.id}</h2>
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-2">Placed on: {order.date}</p>
        <ul className="text-gray-700 text-sm list-disc pl-5 mb-2">
          {order.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-right font-medium text-gray-800">Total: {order.total}</p>
      </div>
    );
  };
  
  export default OrderDetail;
  