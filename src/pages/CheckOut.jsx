import React, { useState } from 'react';
import { FiArrowLeft, FiCreditCard, FiTruck, FiLock } from 'react-icons/fi';
import MobileSidebar from '../components/MobileSidebar';


const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zip: '',
    phone: '',
    saveInfo: false,
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: ''
  });

  const cartItems = [
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Black',
      size: 'M',
      price: 35.00,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Premium Hoodie',
      color: 'Grey',
      size: 'L',
      price: 60.00,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      // Process order submission
      console.log('Order submitted:', { ...formData, cartItems, total });
      alert('Order placed successfully!');
    }
  };

  return (

    <>
     <MobileSidebar />
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
            <FiArrowLeft className="mr-1" /> Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= step ? 'bg-indigo-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-400'}`}>
                  {step}
                </div>
                <span className={`mt-2 text-sm font-medium ${activeStep >= step ? 'text-indigo-600' : 'text-gray-500'}`}>
                  {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit}>
              {activeStep === 1 && (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Shipping information</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, etc. (optional)</label>
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP code</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                      Save this information for next time
                    </label>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Payment method</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div 
                      className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'credit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`}
                      onClick={() => setPaymentMethod('credit')}
                    >
                      <FiCreditCard className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm font-medium">Credit card</span>
                    </div>
                    <div 
                      className={`flex items-center p-4 border rounded-lg cursor-pointer ${paymentMethod === 'paypal' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`}
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-5 mr-3" />
                      <span className="text-sm font-medium">PayPal</span>
                    </div>
                  </div>

                  {paymentMethod === 'credit' && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="0000 0000 0000 0000"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiration date</label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                          <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleChange}
                            placeholder="CVC"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">You'll be redirected to PayPal to complete your purchase securely.</p>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Continue with PayPal
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeStep === 3 && (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Review your order</h2>
                  
                  <div className="border-b border-gray-200 pb-6 mb-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Shipping address</h3>
                    <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
                    <p className="text-gray-600">{formData.address}</p>
                    {formData.apartment && <p className="text-gray-600">{formData.apartment}</p>}
                    <p className="text-gray-600">{formData.city}, {formData.state} {formData.zip}</p>
                    <p className="text-gray-600">{formData.country}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                    <button 
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                  </div>

                  <div className="border-b border-gray-200 pb-6 mb-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Payment method</h3>
                    <p className="text-gray-600 flex items-center">
                      {paymentMethod === 'credit' ? (
                        <>
                          <FiCreditCard className="mr-2" /> Credit card ending in •••• {formData.cardNumber.slice(-4)}
                        </>
                      ) : (
                        <>
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-4 mr-2" /> PayPal
                        </>
                      )}
                    </p>
                    <button 
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                  </div>

                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">Order items</h3>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <div className="flex">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.color} / {item.size}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {activeStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {activeStep < 3 ? 'Continue to next step' : 'Place order'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 lg:ml-8 mt-10 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.color} / {item.size}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Tax</p>
                  <p className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</p>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                  <p className="text-base font-medium text-gray-900">Order total</p>
                  <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <FiLock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                <p>Your order is secure and encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;