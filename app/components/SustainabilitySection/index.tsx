import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <section className="relative py-32">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/rice-field.avif"
          alt="Rice fields"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Center Content */}
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-[#ECEAE5] rounded-xl shadow-sm px-12 py-16 text-center">

          {/* Heading */}
          <h2 className="text-[44px] md:text-[52px] font-medium mb-6">
            The Future of Sustainable
            <br />
            Poha
          </h2>

          {/* Paragraph */}
          <p className="text-[#5F645E] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We bridge traditional family values with advanced eco-conscious
            manufacturing. Our dedicated processes utilize renewable energy
            and waste-reduction systems to ensure that our high-quality,
            hygienic poha leaves a minimal environmental footprint while
            delivering maximum nutritional value.
          </p>

          {/* Button */}
          <button className="border border-[#2F352E] text-[#2F352E] px-8 py-4 rounded-lg hover:bg-[#2F352E] hover:text-white transition">
            Our Eco Commitment
          </button>

        </div>
      </div>

    </section>
  );
}