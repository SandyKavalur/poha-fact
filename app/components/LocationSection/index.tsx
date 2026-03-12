// components/LocationSection.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLocationDot, 
  faClock, 
  faPhone, 
  faEnvelope, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'

export default function LocationSection() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/80 to-white py-16 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
            Visit our facility
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-24 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-12 h-1 mx-2 bg-amber-400 rounded-full"></div>
            <div className="w-24 h-1 bg-amber-300 rounded-full"></div>
          </div>
          <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
            Come visit our manufacturing unit or reach out to us through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Our Location</h3>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    315/2, NH 63, Bypass road<br />
                    behind Fire Station<br />
                    Koppal, Karnataka 583231<br />
                    India
                  </p>
                  <button className="mt-3 text-amber-600 hover:text-amber-700 text-sm font-medium inline-flex items-center gap-1 group">
                    Get directions 
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform" 
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
                  <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Working Hours</h3>
                  <div className="mt-2 space-y-1 text-stone-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-amber-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards Row (split into two) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-800 text-sm">Call Us</h4>
                <p className="text-amber-600 text-xs mt-1">+91 12345 67890</p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-800 text-sm">Email Us</h4>
                <p className="text-amber-600 text-xs mt-1">info@pohaheritage.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden h-full">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 px-6 py-4 border-b border-amber-200">
                <div className="flex items-center gap-2 text-stone-700">
                  <FontAwesomeIcon icon={faLocationDot} className="text-amber-600" />
                  <span className="font-medium">Find us on Google Maps</span>
                </div>
              </div>
              
              {/* Map Container - Replace src with your actual Google Maps embed URL */}
              <div className="relative w-full" style={{ height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6492625574574!2d76.1915832!3d15.3412844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9cd0f9c103681%3A0xf9e0380792cea30a!2sGavishree%20Poha%20Industries!5e0!3m2!1sen!2sin!4v1773336598784!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poha Manufacturing Location"
                ></iframe>
              </div>
              
              {/* Map Footer with Quick Actions */}
              <div className="bg-white px-6 py-4 border-t border-amber-100 flex flex-wrap gap-3 justify-between items-center">
                <div className="flex gap-2 text-sm text-stone-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Open today until 7 PM
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors">
                    Share Location
                  </button>
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm">
            <i className="fa-regular fa-building mr-1"></i>
            We welcome bulk buyers and distributors to visit our facility for a tour and tasting session.
          </p>
        </div>
      </div>
    </section>
  )
}