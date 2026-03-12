import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F6EFE2] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tagline */}
        <p className="text-sm tracking-widest text-gray-500 mb-6 uppercase">
          Tradition Meets Sustainability
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-16">
          Purity in Every Grain,
          <br />
          Tradition in Every Flake
        </h1>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/assets/Hero/hero.avif"
            alt="Rice flakes"
            width={1200}
            height={600}
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}