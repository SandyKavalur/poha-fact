export default function ContactSection() {
  return (
    <section className="bg-[#EDEBE6] pt-24 pb-10" id="contactus">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-[60px] leading-[1.05] font-medium mb-8">
              Contact Us
            </h2>

            <p className="text-[#5F645E] text-lg leading-relaxed max-w-md">
              We bring family tradition and modern sustainability to your
              kitchen. Reach out for bulk inquiries, distribution partnerships,
              or to learn more about our manufacturing standards. Our team is
              dedicated to hygiene and quality at every step.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pl-16">

            {/* Divider */}
            {/* <div className="w-16 h-[1px] bg-[#BDBAB3] mb-10"></div> */}

            {/* Headquarters */}
            <div className="mb-10">
              <h4 className="font-semibold  mb-2">
                Headquarters
              </h4>

              <p className="text-[#5F645E] leading-relaxed">
                315/2, NH 63, Bypass, road, behind Fire Station
                <br />
                Koppal, Karnataka 583231
              </p>
            </div>

            {/* Inquiries */}
            <div className="mb-10">
              <h4 className="font-semibold  mb-2">
                Inquiries
              </h4>

              <p className="text-[#5F645E]">
                hello@gavishripoha.com
                <br />
                +91 98765 43210
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="bg-[#505846] text-white px-8 py-4 rounded-lg hover:bg-[#3f4536] transition"
              >
                WhatsApp Us
              </a>

              <a
                href="mailto:hello@gavishripoha.com"
                className="border border-[#2F352E] text-[#2F352E] px-8 py-4 rounded-lg hover:bg-[#2F352E] hover:text-white transition"
              >
                Email Us
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright Footer */}
      <div className="border-t border-[#D8D5CF] mt-20 pt-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between text-sm text-[#6B7068]">

          <p>
            © {new Date().getFullYear()} Gavi Shri Poha Industries. All rights reserved.
          </p>

          <p>
            Crafted with care in Karnataka, India
          </p>

        </div>
      </div>

    </section>
  );
}