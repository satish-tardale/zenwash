import React, { useEffect, useState } from "react";
import { CheckCircle, Clock, Shirt } from "lucide-react";

interface ServicesProps {
  onComingSoonClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onComingSoonClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      name: "Essential",
      description: "Perfect for everyday laundry needs",
      features: [
        "Wash & Fold Service",
        "Standard Detergent",
        "48-hour Turnaround",
        "Basic Stain Treatment",
        "Pickup & Delivery",
      ],
      popular: false,
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-900",
    },
    {
      name: "Premium",
      description: "Enhanced care for your favorite clothes",
      features: [
        "Wash & Fold + Press",
        "Premium Eco Detergent",
        "24-hour Turnaround",
        "Advanced Stain Treatment",
        "Pickup & Delivery",
      ],
      popular: true,
      gradient: "from-blue-900 to-cyan-400",
      textColor: "text-white",
    },
    {
      name: "Luxury",
      description: "White-glove service for delicate items",
      features: [
        "Hand Wash Available",
        "Luxury Detergent",
        "Same-day Service",
        "Specialist Stain Removal",
        "Priority Pickup & Delivery",
        "Individual Item Care",
      ],
      popular: false,
      gradient: "from-amber-400 to-orange-500",
      textColor: "text-white",
    },
  ];

  // Auto slide every 4 seconds (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent">
              Service Level
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday essentials to luxury care, we have the perfect service
            for every need and budget.
          </p>
        </div>

        {/* Mobile Slider View */}
    <div className="lg:hidden mb-8 relative">
  {/* Horizontal scroll container */}
  <div className="flex space-x-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {services.map((service, index) => (
      <div
        key={index}
        className="min-w-[85%] sm:min-w-[70%] shrink-0 snap-center"
      >
        <div
          className={`relative bg-white border rounded-2xl shadow-md p-6 text-center ${
            service.popular
              ? "border-cyan-200 scale-105"
              : "border-gray-200"
          } transition-transform duration-300`}
        >
          {/* Header */}
          <div
            className={`bg-gradient-to-r ${service.gradient} ${service.textColor} p-6 rounded-xl mb-6`}
          >
            <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
            <p className="mt-2 opacity-90">{service.description}</p>
            <div className="mt-3 text-sm opacity-75">
              Pricing available at launch
            </div>
          </div>

          {/* Features (vertical checklist) */}
          <div className="flex flex-col items-start space-y-3 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onComingSoonClick}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              service.popular
                ? "bg-gradient-to-r from-blue-900 to-cyan-400 text-white hover:shadow-lg hover:scale-105"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            Coming Soon
          </button>
        </div>
      </div>
    ))}
  </div>


</div>


        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
                service.popular
                  ? "transform scale-105 border-2 border-cyan-200"
                  : "border border-gray-200"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div
                className={`bg-gradient-to-r ${service.gradient} ${service.textColor} p-6 rounded-xl mb-6`}
              >
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="mt-2 opacity-90">{service.description}</p>
                <div className="mt-3 text-sm opacity-75">
                  Pricing available at launch
                </div>
              </div>

           <div className="flex flex-col items-start space-y-4 mb-8">
  {service.features.map((feature, i) => (
    <div
      key={i}
      className="flex items-center space-x-3"
    >
      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{feature}</span>
    </div>
  ))}
</div>


              <button
                onClick={onComingSoonClick}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  service.popular
                    ? "bg-gradient-to-r from-blue-900 to-cyan-400 text-white hover:shadow-lg hover:scale-105"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
    Additional Services
  </h3>
  
  <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
    {[
      {
        icon: <Shirt className="h-6 w-6" />,
        name: "Dry Cleaning",
        desc: "Professional dry cleaning",
      },
      {
        icon: <Clock className="h-6 w-6" />,
        name: "Express Service",
        desc: "Same-day turnaround",
      },
      {
        icon: <CheckCircle className="h-6 w-6" />,
        name: "Stain Removal",
        desc: "Specialized treatment",
      },
    ].map((service, index) => (
      <div key={index} className="text-center p-4">
        <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-3 rounded-xl inline-flex mb-3">
          {service.icon}
        </div>
        <h4 className="font-semibold text-gray-900 mb-1">
          {service.name}
        </h4>
        <p className="text-sm text-gray-600">{service.desc}</p>
        <span className="text-xs text-blue-600 font-medium mt-2 block">
          Coming Soon
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;


