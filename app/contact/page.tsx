import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Header */}
      <div className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl">
            Get in touch with our team for quotes, inquiries, or support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Have a question about our products? Need a custom solution? We're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-600 text-sm">
                    Shop no.20 Ground floor Madina Plaza opposite mama parsi school main MA Jinnah Road, Karachi<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-600 text-sm">
                    0325-3450683<br />
                    0344-1339925
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm">
                    mamotrixpvtltd@gmail.com<br />
                    sales@mamotrix.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] outline-none transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-black text-white font-bold rounded-md hover:bg-[#00ff88] hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
