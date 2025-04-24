import OrderDetail from "../components/OrderDetail";
import MobileSidebar from "../components/MobileSidebar";

const orders = [
  {
    id: "001",
    date: "April 10, 2025",
    total: "$129.99",
    status: "Delivered",
    items: ["Wireless Mouse", "Bluetooth Keyboard"],
  },
  {
    id: "002",
    date: "April 17, 2025",
    total: "$59.49",
    status: "Shipped",
    items: ["USB-C Charger", "Laptop Sleeve"],
  },
];

const MyOrders = () => {
  return (
    <>
    <MobileSidebar />
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderDetail key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default MyOrders;
