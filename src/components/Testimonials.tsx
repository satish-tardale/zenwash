import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Miss.Ruchita nawadkar',
      role: 'Marketing Director',
      company: 'Tech Startup',
      image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'Finally, a laundry service that understands busy professionals. The convenience is unmatched.',
      rating: 5,
      location: 'india'
    },
    {
      name: 'Mr.Kuldip jagadale',
      role: 'Family Dad',
      company: 'Father of 3',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'With three kids, laundry was overwhelming. This service gives me my weekends back.',
      rating: 5,
      location: 'india'
    },
    {
      name: 'Mr.Satish tardale',
      role: 'Fashion Designer',
      company: 'Creative Studio',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'The care they put into delicate fabrics is incredible. My designer pieces are in perfect condition.',
      rating: 5,
      location: 'india'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent">Beta Users</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've experienced the future of laundry care.
          </p>
        </div>

        {/* Beta Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-900 font-medium">Based on Beta Testing Feedback</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative opacity-75"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-cyan-400 opacity-20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
               
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-cyan-600 font-medium">{testimonial.location}</p>
                </div>
              </div>

              {/* Beta Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-900 to-cyan-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Beta Tester
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-12">
          <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Reviews Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're currently in beta testing with select users. Full customer reviews will be available at launch.
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;