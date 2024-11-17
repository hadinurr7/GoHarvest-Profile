import Image from "next/image";
import Testimonials from "./testimonial";
import Link from "next/link";
import { FaHistory, FaIndustry, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden pt-20 md:pt-[80px]">
      <div className="relative h-[95vh] w-full">
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/assets/clip.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        ></video>
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 text-white md:pt-0">
          <h1 className="mb-4 text-3xl font-bold md:text-7xl">GoHarvest</h1>
          <p className="mb-6 flex items-center text-center text-lg md:text-4xl">
            Leading Agricultural Supply Chain Company in Indonesia
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            4 Years of Building Indonesia
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-10 py-20 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              src="/assets/globe.png"
              alt="globe"
              width={80}
              height={80}
              className="mb-3"
            />
            <h1 className="text-5xl text-green-700">7</h1>
            <h2 className="mb-3 text-xl">
              Provinces Supplied with Fertilizers
            </h2>
            <p className="text-gray-500">
              Distributing agricultural input needs to companies, KUDs, Toko
              Tani, and farmers in 7 provinces
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              src="/assets/fertilizer.png"
              alt="fertilizer"
              width={80}
              height={80}
              className="mb-3"
            />
            <h1 className="text-5xl text-green-700">2%</h1>
            <h2 className="mb-3 text-xl">National Fertilizer Distribution</h2>
            <p className="text-gray-500">
              Distributing 2% of the national fertilizer supply to various
              regions for farmers and businesses.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <Image
              src="/assets/person.png"
              alt="person"
              width={80}
              height={80}
              className="mb-3"
            />
            <h1 className="text-5xl text-green-700">1100</h1>
            <h2 className="mb-3 text-xl">Toko Tani & KUD</h2>
            <p className="text-gray-500">
              Distributing fertilizers across Indonesia with the integration of
              physical and digital networks to 7 provinces nationwide.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-green-700 px-5 pb-32 pt-20 font-bold text-white">
        <h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          Company Overview
        </h1>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex h-full flex-col items-center rounded-lg bg-green-800 p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-center text-4xl text-yellow-400">
              <FaHistory />
            </div>
            <h2 className="mb-4 text-center text-xl font-semibold text-white">
              History of GoHarvest
            </h2>
            <p className="mb-4 flex-grow text-sm text-gray-200 md:text-justify">
              GoHarvest was founded with a clear mission to empower farmers and
              agribusiness companies to become more productive and efficient.
              The company emerged as a solution to the challenges faced by the
              agricultural industry, focusing on providing high-quality
              agricultural goods and services at competitive prices, delivered
              on time.
            </p>
            <Link href="/about">
            <button className="mt-auto self-center rounded-lg bg-white px-6 py-2 text-green-600 transition-all hover:bg-green-500 hover:text-white">
              Learn More
            </button>
            </Link>
            
          </div>

          <div className="flex h-full flex-col items-center rounded-lg bg-green-800 p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-center text-4xl text-yellow-400">
              <FaUsers />
            </div>
            <h2 className="mb-4 text-center text-xl font-semibold text-white">
              Our Teams
            </h2>
            <p className="mb-4 flex-grow text-sm text-gray-200 md:text-justify">
              Our team is made up of dedicated professionals committed to
              innovation and quality in every aspect of our work. We foster a
              collaborative environment, bringing together expertise from
              various sectors of the agribusiness industry to ensure our
              clients' needs are met efficiently and effectively.
            </p>
            <Link href="/about">
            <button className="mt-auto self-center rounded-lg bg-white px-6 py-2 text-green-600 transition-all hover:bg-green-500 hover:text-white">
              Learn More
            </button>
            </Link>
          </div>

          <div className="flex h-full flex-col items-center rounded-lg bg-green-800 p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-center text-4xl text-yellow-400">
              <FaIndustry />
            </div>
            <h2 className="mb-4 text-center text-xl font-semibold text-white">
              Our Culture
            </h2>
            <p className="mb-4 flex-grow text-sm text-gray-200 md:text-justify">
              GoHarvest thrives on a culture of sustainability, innovation, and
              collaboration. We are passionate about creating lasting
              relationships with our clients and stakeholders while continuously
              evolving to meet the needs of the agricultural industry.
            </p>
               <Link href="/about">
            <button className="mt-auto self-center rounded-lg bg-white px-6 py-2 text-green-600 transition-all hover:bg-green-500 hover:text-white">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Solutions We Provide For You
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg sm:mt-5 sm:text-xl">
          Enjoy a variety of benefits through GoHarvest
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 pb-14 md:grid-cols-2 md:px-0">
        <div className="relative flex flex-col items-center overflow-hidden rounded-lg text-center shadow-lg">
          <div className="relative h-60 w-full md:h-80">
            <Image
              src="/assets/mitra.jpg"
              alt="Mitra"
              fill
              className="rounded-lg"
            />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 p-6 font-bold text-white">
            <p className="max-w-xs pb-4 text-center text-sm sm:pb-6 sm:text-base">
              For Farmers & Partners: Cost-effective solutions to access quality
              products
            </p>
          </div>
          <Link href="/services/partners">
            <button className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform rounded-md bg-green-700 px-6 py-2 text-lg font-medium text-white transition-colors hover:bg-green-600 sm:px-4 sm:py-2 sm:text-base">
              See Business Solutions
            </button>
          </Link>
        </div>

        <div className="relative flex flex-col items-center overflow-hidden rounded-lg text-center shadow-lg">
          <div className="relative h-60 w-full md:h-80">
            <Image
              src="/assets/panen.jpg"
              alt="Panen"
              fill
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 p-6 font-bold text-white">
            <p className="max-w-xs pb-4 text-center text-sm sm:pb-6 sm:text-base">
              For Businesses: Secure and faster large-scale raw material supply
            </p>
          </div>
          <Link href="/services/companies">
            <button className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform rounded-md bg-green-700 px-6 py-2 text-lg font-medium text-white transition-colors hover:bg-green-600 sm:px-4 sm:py-2 sm:text-base">
              See Business Solutions
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="flex items-center justify-center text-center text-3xl font-bold md:text-4xl">
          What do they say about GoHarvest
        </h1>
        <Testimonials />
      </div>
    </section>
  );
};

export default Hero;
