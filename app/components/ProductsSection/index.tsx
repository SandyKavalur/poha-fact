import Image from "next/image";

const products = [
  {
    title: "Premium Thick Poha",
    description:
      "Our signature thick poha is processed with care to maintain its traditional texture, making it the perfect choice for a wholesome, authentic Indian breakfast.",
    image: "/assets/images/thick-poha.jpg",
  },
  {
    title: "Nutritious Medium Poha",
    description:
      "Versatile, moderately thick flakes that soften quickly when washed, perfect for making poha dishes, upma, or patties.",
    image: "/assets/images/medium-poha.jpg",
  },
  {
    title: "Light Thin Poha",
    description:
      "Ideal for quick snacks and light meals, our thin poha is known for its crispness and ease of cooking, delivering high nutritional value in every bite.",
    image: "/assets/images/poha-thin.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-[#F6F4EF] py-32" id="productssection">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Title */}
        <h2 className="text-[56px] md:text-[64px] font-medium mb-16">
          Our Specialty Poha
        </h2>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <div key={index}>

              {/* Image */}
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-[26px] font-medium mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[#5F645E] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Button */}
              {/* <button className="bg-[#505846] text-white px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-[#3f4536] transition">
                View Product
              </button> */}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}