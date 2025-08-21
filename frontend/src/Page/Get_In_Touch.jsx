import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactInfo = [
  {
    id: 1,
    title: "Email Us",
    value: "dev@markiva.in",
    desc: "We respond within 24 hours",
    icon: <FiMail className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Call Us",
    value: "+91 9560930951",
    desc: "Mon-Fri 9AM-6PM EST",
    icon: <FiPhone className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Visit Us",
    value: "420, Sector 5, Vaishali, Ghaziabad, UP 201010",
    desc: "Schedule an appointment",
    icon: <FiMapPin className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Quick Response Guarantee",
    value: "",
    desc: "Expect a response within 2 hours during business hours.",
    icon: <FiMessageSquare className="w-6 h-6 text-white" />,
  },
];

const handleSubmit =async (e) => {
  e.preventDefault();
  const data ={
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    service: e.target.service.value,
    projectDetail: e.target.message.value,
  }
  try{
    await axios.post(`https://markiva.onrender.com/api/form/add`,
      data,
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
    )
    toast.success("Form submitted successfully!");
    e.target.reset();
    
  

  }catch(err){
    console.log(err);
        toast.error("Something went wrong. Please try again! ");
  }
  
}

export default function GetinTouch() {
  return (
    <section
      id="contact"
      className="w-full mt-5 py-16 px-6 md:px-12 lg:px-20  "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Let’s Start a Conversation
          </h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            We’re here to help you succeed. Whether you need a complete digital
            marketing strategy or specific services, our team is ready to bring
            your vision to life.
          </p>

          <div className="space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 bg-gradient-to-r from-purple-700 to-purple-600 
                           p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] 
                           transition-transform duration-300 ease-in-out"
              >
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 break-words">{item.value}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <select
                id="service"
                name="service"
                className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option className="text-black">Select a service</option>
                <option className="text-black">Web Development</option>
                <option className="text-black">UI/UX Design</option>
                <option className="text-black">Digital Marketing</option>
              </select>
            </div>

            <textarea
              id="message"
              name="message"
              placeholder="Project Details"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows="5"
            ></textarea>

            <button
              id="submit"
              name="submit"
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 
                         text-white font-semibold hover:opacity-90 active:scale-[0.98] 
                         transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </section>
  );
}
