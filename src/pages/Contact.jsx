import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! (Form handling to be implemented)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-blue-50 p-8 rounded-xl shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 font-semibold">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
