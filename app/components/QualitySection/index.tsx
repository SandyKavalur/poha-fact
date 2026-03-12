import Image from "next/image";

export default function QualitySection() {
  return (
    <section className="bg-[#efede8]">
      <div className="grid lg:grid-cols-[40%_60%]">

        {/* Left Image */}
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <Image
            src="/assets/QualitySection/white-poha.jpeg"
            alt="Poha quality process"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex items-center">
          <div className="max-w-xxl px-10 lg:px-16 py-16">

            <h2 className="text-[40px]
              md:text-[52px]
              lg:text-[62px]
              leading-[1.05]
              font-medium
              tracking-[-0.02em]">
              Uncompromising
              <br />
              Standards of
              <br />
              Quality & Hygiene
            </h2>

            {/* Divider */}
            <hr className="mt-8 mb-8 h-px border-gray-300 w-full opacity-10"></hr>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed text-[#5F645E]">
              At Gavi Shri Poha Industries, we believe that true quality begins
              with a clean perspective. Our state-of-the-art facility integrates
              advanced automated technology to minimize human contact,
              ensuring that every grain remains pure, healthy, and safe.
              From rigorous grain selection to triple-stage cleaning and
              eco-friendly packing, we maintain a sterile environment that
              honors the natural integrity of our heritage crop.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}