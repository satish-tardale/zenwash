import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';


interface ContactProps {
  onComingSoonClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onComingSoonClick }) =>{

    const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      content: 'myzenwash@gmail.com',
      description: 'Get in touch with our team'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      content: '9960435751',
      description: 'Available during business hours'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      content: 'pune,loni kalbhor',
      description: 'Headquarters location'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      content: '24/7 Service',
      description: 'Always available for you'
    }
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

 const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formEl = formRef.current;
    if (!formEl) return;

    // Grab values before reset
    const userEmail = (formEl as any)["user_email"]?.value || "";
    const userName = (formEl as any)["user_name"]?.value || "";

    try {
      // 1) Send email to YOU (admin)
      await emailjs.sendForm(
        "service_lgnvyoc",   // ✅ your EmailJS service ID
        "template_zbl56j5",  // ✅ admin template (set "To" as your email in EmailJS dashboard)
        formEl,
        "CR1GO0fCJHgKHriqI"  // ✅ your public key
      );

      // 2) Send auto-reply to USER
      await emailjs.send(
        "service_lgnvyoc",   // same service ID
        "template_f1ioj9e",  // ✅ user auto-reply template (set "To" as {{to_email}} in dashboard)
        {
          to_email: userEmail,
          to_name: userName,
        },
        "CR1GO0fCJHgKHriqI"
      );

      setSuccess(true);
      formEl.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };



  return (
  <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Get in <span className="bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent">Touch</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Have questions about our service? We'd love to hear from you. Our team is here to help.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-3 rounded-lg inline-flex mb-4">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked</h4>
          <div className="space-y-3">
            {[
              'What cities will you serve at launch?',
              'How does the pickup scheduling work?',
              'What happens if my clothes are damaged?',
              'Do you handle delicate fabrics?'
            ].map((question, index) => (
              <button
                key={index}
                onClick={onComingSoonClick}
                className="block w-full text-left text-gray-700 hover:text-blue-900 transition-colors duration-200 py-2 border-b border-blue-100 last:border-b-0"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form - FULL WIDTH IN RIGHT COLUMN */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-4 rounded-xl inline-flex mb-4">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
          <p className="text-gray-600">We’ll get back to you shortly</p>
        </div>

        {/* Working Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="user_lastname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Please enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your inquiry..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className="mt-6 text-center text-green-600 font-medium">
              ✅ Your message has been sent! Check your inbox.
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
