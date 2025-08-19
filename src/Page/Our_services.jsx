import { FaVideo, FaSearch, FaCode, FaPaintBrush, FaShareAlt, FaChartLine } from "react-icons/fa";

export default function OurServices() {
  const services = [
    {
      icon: <FaVideo className="text-3xl text-white" />,
      title: "Video Editing",
      desc: "Professional video editing services for social media, marketing campaigns, and corporate content.",
      btnColor: "from-pink-500 to-red-500",
    },
    {
      icon: <FaSearch className="text-3xl text-white" />,
      title: "SEO Services",
      desc: "Boost your search engine rankings and drive organic traffic to your website.",
      btnColor: "from-green-400 to-blue-500",
    },
    {
      icon: <FaCode className="text-3xl text-white" />,
      title: "Website Development",
      desc: "Custom websites that are fast, responsive, and optimized for conversions.",
      btnColor: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-white" />,
      title: "Graphic Design",
      desc: "Eye-catching designs that communicate your brand message effectively.",
      btnColor: "from-pink-500 to-purple-500",
    },
    {
      icon: <FaShareAlt className="text-3xl text-white" />,
      title: "Social Media Marketing",
      desc: "Engage your audience and build your brand presence across social platforms.",
      btnColor: "from-red-400 to-pink-500",
    },
    {
      icon: <FaChartLine className="text-3xl text-white" />,
      title: "Digital Strategy",
      desc: "Comprehensive digital marketing strategies tailored to your business goals.",
      btnColor: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="service" className="py-20 px-6 sm:px-10 lg:px-16 font-roboto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-white/10 bg-white/10 backdrop-blur-md p-8 rounded-2xl 
             shadow-inner hover:shadow-[inset_20px_0_40px_rgba(236,72,153,0.6),inset_0_0_40px_rgba(147,51,234,0.6),inset_-20px_0_40px_rgba(59,130,246,0.6)]
             transition-all duration-500 group flex flex-col justify-between"
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.btnColor} flex items-center justify-center mb-6`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6 text-sm sm:text-base">{service.desc}</p>

            {/* Button */}
            <button
              className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${service.btnColor} text-white font-medium shadow-md hover:scale-105 transition-transform`}
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex items-center justify-center">
        <button className="px-6 sm:px-8 py-3 text-base sm:text-lg text-white rounded-full font-bold
                     bg-gradient-to-r from-pink-500 to-purple-600 
                     hover:scale-105 hover:shadow-[0_6px_15px_rgba(236,72,153,0.3),0_10px_20px_rgba(147,51,234,0.3)] 
                     transition duration-300">
          Get Custom Quote
        </button>
      </div>
    </section>
  );
}
