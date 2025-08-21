import { FaUsers, FaBullseye, FaBolt } from "react-icons/fa";

export default function AboutMarkiva() {
  const features = [
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Expert Team",
      desc: "Our talented team of designers, developers, and marketers bring years of experience.",
    },
    {
      icon: <FaBullseye className="text-white text-2xl" />,
      title: "Results-Driven",
      desc: "We focus on delivering measurable results that drive your business growth.",
    },
    {
      icon: <FaBolt className="text-white text-2xl" />,
      title: "Innovative Solutions",
      desc: "We stay ahead of digital trends to provide cutting-edge marketing solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-16 lg:py-24 text-white "
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            About <span className="text-pink-400">Markiva</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
            We are a full-service digital marketing agency dedicated to helping
            businesses achieve their online goals through innovative strategies
            and creative solutions.
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
            Since our founding, we've been at the forefront of digital marketing
            innovation, helping brands connect with their audiences and drive
            meaningful results through data-driven strategies and creative
            excellence.
          </p>
          <ul className="space-y-4 text-sm sm:text-base">
            {[
              "24/7 support available",
              "Over 500 successful projects completed",
              "Proven track record of increasing ROI by 300%+",
              "Trusted by leading brands worldwide",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 cursor-pointer hover:font-semibold transition"
              >
                <span className="text-green-400 text-lg sm:text-xl">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 
                         bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg 
                         hover:scale-[1.03] hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-gradient-to-tr from-pink-500 to-purple-600 shadow-md flex-shrink-0">
                {feature.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
