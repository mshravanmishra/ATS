import React, { useEffect, useRef } from "react";

export default function LandingPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let scrollStep = 1;
    let maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= maxScrollLeft || scrollAmount <= 0) {
        scrollStep = -scrollStep; // Reverse scroll direction
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="text-2xl font-bold text-red-600 flex items-center gap-2">
          🚑 AmbulanceNow
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-red-600 text-red-600 rounded px-4 py-2 hover:bg-red-50">
            Book Ambulance
          </button>
          <button
            type="button"
            className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              const menu = document.getElementById('dropdown-menu');
              if (menu.style.display === 'block') {
                menu.style.display = 'none';
              } else {
                menu.style.display = 'block';
              }
            }}
          >
            Login
          </button>
          <div
            id="dropdown-menu"
            className="origin-top-right absolute right-0 mt-12 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{ display: 'none' }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="/login"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-red-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                User Login
              </a>
              <a
                href="/driver-login"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-red-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Driver Login
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-red-50 py-20 px-6 text-center border-b border-gray-300">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-700">
          Need an Ambulance Urgently?
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Find and book the nearest available ambulance in real-time, right when you need it most.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-600 text-white rounded px-6 py-3 text-lg hover:bg-red-700">
            🚨 Book Ambulance Now
          </button>
          <button className="border border-red-600 text-red-600 rounded px-6 py-3 text-lg flex items-center gap-2 hover:bg-red-50">
            📍 Use My Location
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-2">Our Ambulance Gallery</h2>
        <p className="text-gray-600 mb-10">Real moments from emergency response teams and live rescues.</p>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide w-full px-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[
            "https://source.unsplash.com/featured/?ambulance",
            "https://source.unsplash.com/featured/?emergency",
            "https://source.unsplash.com/featured/?rescue",
            "https://source.unsplash.com/featured/?hospital",
            "https://source.unsplash.com/featured/?first-aid",
            "https://source.unsplash.com/featured/?medical"
          ].map((src, index) => (
            <div key={index} className="relative flex-shrink-0 w-80 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src={src}
                alt={`Ambulance ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl transform hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">
                <span className="text-white text-lg font-semibold">Ambulance #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 px-6 bg-gray-50 text-center border-b border-gray-300">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Why Trust Us?</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We’re committed to saving lives by providing the fastest and most reliable emergency services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-4xl font-bold text-red-600">500+</h3>
            <p className="mt-2 text-gray-700 font-medium">Ambulances Active</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-4xl font-bold text-red-600">4.8 ⭐</h3>
            <p className="mt-2 text-gray-700 font-medium">User Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-4xl font-bold text-red-600">90%</h3>
            <p className="mt-2 text-gray-700 font-medium">Reach Under 8 Min</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-4xl font-bold text-red-600">15+</h3>
            <p className="mt-2 text-gray-700 font-medium">Cities Covered</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white text-center border-b border-gray-300">
        <h2 className="text-3xl font-bold text-red-600 mb-4">What Our Users Say</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Real stories from people who got the help they needed—fast and reliably.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
            <p className="text-gray-800 italic mb-4">
              “Ambulance arrived within 5 minutes. The tracking and booking was so easy. Thank you AmbulanceNow!”
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">Pooja Sharma</h4>
                <span className="text-sm text-gray-500">Patient’s Daughter</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
            <p className="text-gray-800 italic mb-4">
              “My uncle needed help late night and AmbulanceNow saved the day. Highly recommended in emergency.”
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">Rajiv Mehta</h4>
                <span className="text-sm text-gray-500">Emergency Caller</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
            <p className="text-gray-800 italic mb-4">
              “This app helped me find an ambulance nearby in seconds. The interface was smooth and clear.”
            </p>
            <div className="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="User" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">Anita Joshi</h4>
                <span className="text-sm text-gray-500">User</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-red-500 text-6xl mx-auto">📍</div>
            <h3 className="text-xl font-semibold mt-4">Step 1: Detect Location</h3>
            <p className="text-gray-600">We find your exact location automatically or via pincode.</p>
          </div>
          <div>
            <div className="text-red-500 text-6xl mx-auto">🚑</div>
            <h3 className="text-xl font-semibold mt-4">Step 2: View Nearest Ambulances</h3>
            <p className="text-gray-600">Live map with real-time ambulance locations near you.</p>
          </div>
          <div>
            <div className="text-red-500 text-6xl mx-auto">📞</div>
            <h3 className="text-xl font-semibold mt-4">Step 3: Book & Get Help</h3>
            <p className="text-gray-600">Send request or contact driver directly for assistance.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-semibold text-lg text-red-600">🚑 How do I book an ambulance?</h4>
              <p className="text-gray-700 text-sm mt-1">You can click on the "Book Now" button after selecting a nearby ambulance on the map. Follow the instructions to confirm your booking.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-red-600">📍 How does location tracking work?</h4>
              <p className="text-gray-700 text-sm mt-1">We use real-time GPS data to show ambulances near your current location using Google Maps.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-red-600">🆘 Is this service available 24/7?</h4>
              <p className="text-gray-700 text-sm mt-1">Yes, our platform operates 24/7 across supported cities to ensure emergency help is always accessible.</p>
            </div>
          </div>

          <a href="/faq" className="inline-block mt-8 text-red-600 font-medium hover:underline">See all FAQs →</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">🚑 AmbulanceNow</h3>
            <p className="text-sm">
              Your trusted real-time ambulance tracking & emergency response platform. Fast, Reliable, and Life-saving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Privacy</a></li>
            </ul>
          </div>

          {/* Emergency & Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Emergency</h4>
            <p className="text-sm mb-2">📞 Toll-Free: <span className="text-white font-semibold">108</span></p>
            <p className="text-sm mb-4">📍 Serving: MP, Delhi, Maharashtra</p>
            <div className="flex gap-4">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-6" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; 2025 <span className="font-semibold text-white">AmbulanceNow</span>. Made with ❤️ in India 🇮🇳
        </div>
      </footer>
    </div>
  );
}
