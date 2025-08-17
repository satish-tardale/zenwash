import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_lgnvyoc",        // ✅ replace with EmailJS Service ID
        "template_zbl56j5", // ✅ template that sends form details to YOU
        formRef.current,
        "jWcs2Yalvx50Hp7fS"         // ✅ EmailJS Public Key
      )
      .then(
        () => {
          // ✅ Send auto-reply to user separately
          emailjs.send(
            "service_lgnvyoc",
            "template_f1ioj9e", // ✅ template for auto-response
            {
              to_email: (formRef.current as any)["user_email"].value,
              to_name: (formRef.current as any)["user_name"].value,
            },
            "jWcs2Yalvx50Hp7fS"
          );

          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error:any) => {
          console.error("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-900 to-cyan-400 text-white p-4 rounded-xl inline-flex mb-4">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-600">We’ll get back to you shortly</p>
          </div>

          {/* Contact Form */}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help?"
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
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 text-white py-3 px-6 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {success && (
            <div className="mt-6 text-center text-green-600 font-medium">
              ✅ Your message has been sent! Check your inbox.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
