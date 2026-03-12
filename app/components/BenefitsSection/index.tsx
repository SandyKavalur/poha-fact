// Import specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheatAwn, faLeaf, faHeartPulse, faMugSaucer, faIndianRupeeSign, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faAward, faCheckCircle, faCertificate, faShieldHeart } from '@fortawesome/free-solid-svg-icons'

export default function BenefitsSection() {
  const benefits = [
    "Crispy texture",
    "Flavorful taste",
    "Nutritious and wholesome",
    "Convenient breakfast option",
    "Affordable pricing",
  ];

  const certifications = [
    "FSSAI (Food Safety and Standards Authority of India)",
    "ISO 9001:2015 (Quality Management System)",
    "ISO 22000:2018 (Food Safety Management System)",
  ];

  return (
    <section className="relative grain-bg py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-amber-200/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-yellow-300/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[52px] md:text-[60px] font-medium mb-2">
            Quality You Can Trust
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-24 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-12 h-1 mx-2 bg-amber-400 rounded-full"></div>
            <div className="w-24 h-1 bg-amber-300 rounded-full"></div>
          </div>
          <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
            Every flake of our poha carries the richness of tradition and the
            crisp of modern care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          <div className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 shadow-md hover:border-amber-300 hover:bg-white transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl  flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {/* <i className="fa-solid fa-wheat-awn"></i> */}
                <FontAwesomeIcon icon={faWheatAwn} className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-1">
                  Crispy texture{" "}
                  <span className="text-xs bg-amber-200 px-2 py-0.5 rounded-full text-amber-800 ml-1">
                    #crunch
                  </span>
                </h3>
                <p className="text-stone-600 mt-1">
                  Light, golden flakes that stay perfectly crispy even after
                  preparation.
                </p>
              </div>
            </div>
          </div>

          <div className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 shadow-md hover:border-amber-300 hover:bg-white transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faLeaf} className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-800">
                  Flavorful taste
                </h3>
                <p className="text-stone-600 mt-1">
                  Subtle earthy aroma and delicate flavour – pairs beautifully
                  with spices.
                </p>
              </div>
            </div>
          </div>

          <div className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 shadow-md hover:border-amber-300 hover:bg-white transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faHeartPulse} className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-800">
                  Nutritious & wholesome
                </h3>
                <p className="text-stone-600 mt-1">
                  Iron‑rich, gluten‑free & packed with energy. goodness in every
                  bite.
                </p>
              </div>
            </div>
          </div>

          <div className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 shadow-md hover:border-amber-300 hover:bg-white transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faMugSaucer} className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-800">
                  Convenient breakfast
                </h3>
                <p className="text-stone-600 mt-1">
                  Quick to prepare — just soak, season and serve. ideal for busy
                  mornings.
                </p>
              </div>
            </div>
          </div>

          <div className="group card-hover bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 shadow-md hover:border-amber-300 hover:bg-white transition-all">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-800">
                  Affordable pricing
                </h3>
                <p className="text-stone-600 mt-1">
                  Premium quality at honest prices — loved by families and
                  hotels alike.
                </p>
              </div>
            </div>
          </div>

          <div className="group card-hover bg-gradient-to-br from-amber-50 to-amber-100/70 rounded-3xl p-6 border border-amber-200 shadow-md flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl mb-2 block">🌾</span>
              <span className="font-medium text-stone-700">
                freshly milled,
              </span>
              <span className="block text-sm text-stone-500">
                no preservatives
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="wave-border mb-6 opacity-70"></div>

          <div className="bg-white/70 backdrop-blur-sm rounded-4xl p-8 md:p-10 border border-amber-200/60 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-28 h-28 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 border-4 border-white shadow-lg">
                  {/* <i className="fa-solid fa-award text-5xl"></i> */}
                  <FontAwesomeIcon icon={faAward} className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mt-4 flex items-center gap-1">
                  Certifications{" "}
                  {/* <i className="fa-regular fa-file-lines text-amber-600"></i> */}
                  <FontAwesomeIcon icon={faFileLines} className="text-amber-600" />
                </h3>
                <p className="text-stone-500 text-sm">
                  we comply with global standards
                </p>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500 shadow-sm flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-amber-700 text-2xl">
                    <FontAwesomeIcon icon={faCheckCircle} className="" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">FSSAI</div>
                    <div className="text-xs text-stone-500">
                      Food Safety & Standards
                      <br />
                      Authority of India
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full mt-1">
                      licensed
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500 shadow-sm flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-amber-700 text-2xl">
                    <FontAwesomeIcon icon={faCertificate} className="" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      ISO 9001:2015
                    </div>
                    <div className="text-xs text-stone-500">
                      Quality Management
                      <br />
                      System
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-5 border-l-4 border-amber-500 shadow-sm flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-amber-700 text-2xl">
                    <FontAwesomeIcon icon={faShieldHeart} className="" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">
                      ISO 22000:2018
                    </div>
                    <div className="text-xs text-stone-500">
                      Food Safety Management
                      <br />
                      System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-stone-400 border-t border-amber-100 pt-5 italic">
              <i className="fa-regular fa-clock mr-1"></i> regularly audited ·
              100% compliance · from our family to yours
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10 text-amber-300/40 text-4xl">
          <i className="fa-solid fa-asterisk"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-asterisk"></i>
        </div>
      </div>
    </section>
  );
}
