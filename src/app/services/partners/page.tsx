import Testimonials from "@/components/testimonial";
import Link from "next/link";
import Image from "next/image";
import { BiNotepad, BiPurchaseTagAlt, BiSolidStore } from "react-icons/bi";
import { FaGift, FaLeaf, FaUserPlus } from "react-icons/fa";

const products = [
  {
    title: "Fertilizer",
    description: "High-quality fertilizer for better crop yields.",
    imageUrl: "/assets/fertilizer-services.png",
    link: "/fertilizer",
  },
  {
    title: "Seeds",
    description: "Premium seeds for healthy and robust crops.",
    imageUrl: "/assets/seed-services.png",
    link: "/seeds",
  },
  {
    title: "Equipment",
    description: "Efficient tools for effective farming.",
    imageUrl: "/assets/tool-services.png",
    link: "/equipment",
  },
];

const Services = () => {
  return (
    <div className="pt-12 md:pt-[80px]">
      <section className="grid w-full grid-cols-1 bg-green-700 pt-10 md:grid-cols-2 md:pt-20">
        <div className="relative h-[300px] w-full md:h-[600px]">
          <Image
            src="/assets/illu-smallholders-hero.jpg"
            alt="team"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10">
          <h1 className="pb-4 text-start text-3xl font-bold text-white md:pb-8 md:text-5xl">
            Boost your farm's productivity with GoHarvest
          </h1>
          <p className="text-lg text-white md:text-2xl">
            Quality products and services to boost your productivity
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-3xl font-semibold text-gray-800">
            Our Products
          </h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={index}
                className="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
              >
                <div className="flex h-56 w-full items-center justify-center">
                  <div className="relative h-32 w-28">
                    <Image
                      src={product.imageUrl}
                      alt={`${product.title} image`}
                      fill
                      className="rounded-t-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-10">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Gabung Sebagai Member di Aplikasi GoHarvest
            </h2>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-green-100 p-4">
                <FaUserPlus className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Sign up now!
                </h3>
                <p className="text-gray-600">
                  Receive 5000 GoKoin for free and redeem daily prizes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-green-100 p-4">
                <FaGift className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Win vouchers for a trip to Japan!
                </h3>
                <p className="text-gray-600">
                  Loyal customers have the chance to win this amazing vacation.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-green-100 p-4">
                <FaLeaf className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Stay updated with agricultural news!
                </h3>
                <p className="text-gray-600">
                  Gain insights and valuable knowledge about modern farming.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full lg:h-[500px]">
            <Image
              src="/assets/goHarvest.jpg"
              alt="Smartphone Preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 lg:px-20">
        <div className="flex justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-96 md:w-96">
            <Image
              src="/assets/harvest-store.webp"
              alt="GoMart"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Visit Us at Harvest GoMart
          </h1>
          <p className="text-lg text-gray-600">
            Your One-Stop Modern Farming Store
          </p>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            The solution for your farming and agricultural needs
          </h2>
          <Link
            href="#"
            className="font-medium text-green-600 hover:text-green-800"
          >
            View Harvest GoMart Location →
          </Link>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">
                  <BiSolidStore />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Convenient shopping in one place
                </h3>
                <p className="text-gray-600">
                  Supported by modern stores and ordering systems
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">
                  <BiPurchaseTagAlt />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  High-quality products at competitive prices
                </h3>
                <p className="text-gray-600">
                  The more you shop, the more you save
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">
                  <BiNotepad />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Educational programs, promotions, and great facilities
                </h3>
                <p className="text-gray-600">
                  Enjoy the best shopping experience at Harvest GoMart!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-green-700 py-16">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-16 lg:px-20">
          <div className="space-y-6 text-white">
            <h1 className="text-3xl font-bold md:text-5xl">
              Join as a GoHarvest Partner
            </h1>
            <p className="text-lg md:text-xl">
              Get easy access to high-quality agricultural inputs at competitive
              prices.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80 lg:h-96">
              <Image
                src="/assets/mitra-all.webp"
                alt="Farmer"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex items-center justify-center pt-10 text-center text-3xl font-bold md:text-4xl">
          What do they say about GoHarvest
        </h1>
        <Testimonials />
      </div>
    </div>
  );
};

export default Services;
