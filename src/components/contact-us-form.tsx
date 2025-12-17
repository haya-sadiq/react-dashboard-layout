function Contact() {
  return (
    <form action="#" method="post" className="bg-white rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
      <div>
        <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="block border border-gray-300 border-solid rounded-lg w-full px-4 py-2 focus:outline-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="block border border-gray-300 border-solid rounded-lg w-full px-4 py-2 focus:outline-yellow-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-800 font-medium mb-1">
          Message
        </label>
        <input
          type="text"
          id="message"
          placeholder="Your message"
          className="block border border-gray-300 border-solid rounded-lg w-full px-4 py-2 focus:outline-yellow-500"
        />
      </div>

      <button type="submit" className="w-full rounded-lg px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-lg mt-4">
            Submit
          </button>
    </form>
  );
}

export default Contact;
