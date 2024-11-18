import Testimonials from "@/components/testimonial";
import Link from "next/link";
import Image from "next/image";
import {
  BiSolidStore,
  BiPurchaseTagAlt,
  BiNotepad,
  BiUserCheck,
  BiMobileAlt,
  BiSolidTruck,
} from "react-icons/bi";
import { FaRegHandshake, FaSearchPlus, FaTruckMoving } from "react-icons/fa";

const Services = () => {
  const logos = [
    "/assets/logo-sampoerna-kayoe.webp",
    "/assets/logo-sampoerna-agro.webp",
    "/assets/logo-sahabat-agro-group.webp",
    "/assets/logo-pt-hardaya-into-plantations.webp",
    "/assets/logo-indotruck-utama.webp",
    "/assets/logo-global-palm-resources.webp",
    "/assets/logo-first-resources.webp",
    "/assets/logo-bumitama-agri.webp",
    "/assets/logo-bank-sahabat-sampoerna.webp",
  ];
  return (
    <div className="pt-12 md:pt-[80px]">
      <section className="grid w-full grid-cols-1 bg-green-700 pt-10 md:grid-cols-2 md:pt-20">
        <div className="relative h-[300px] w-full md:h-[600px]">
          <Image
            src="/assets/illu-corporate-hero.webp"
            alt="team"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10">
          <h1 className="pb-4 text-start text-3xl font-bold text-white md:pb-8 md:text-5xl">
            Get the Quality Agri Products You Need Quickly{" "}
          </h1>
          <p className="text-lg text-white md:text-2xl">
            GoHarvest is a service designed to meet the agricultural product
            needs of corporations.{" "}
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <div className="relative">
            <Image
              src="/assets/corporate-web.webp"
              alt="Hero Image"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold">Harvest GoMart</h2>
            <h3 className="mb-6 text-2xl font-semibold text-green-700">
              A platform for buying and selling high-quality agri-input products
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <BiUserCheck className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">
                  Verified sellers and buyers on Harvest GoMart
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <BiMobileAlt className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">An easy-to-use platform</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <BiSolidTruck className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">Fast and secure delivery services</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="md:grid-cols-reverse container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Transparent and Digitized Procurement Process
            </h2>
            <h3 className="mb-6 text-2xl font-semibold text-green-700">
              More Efficient Procurement Process
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FaRegHandshake className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">
                  Save time in creating Request for Quotes (RFQs), instantly
                  compare vendors, products, and prices.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FaSearchPlus className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">Quickly find quality sellers.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FaTruckMoving className="text-2xl text-green-600" />
                </div>
                <p className="leading-6">Real-Time Data</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/assets/corporate-list.webp"
              alt="Hero Image"
              width={800}
              height={500}
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
            className="font-medium text-green-700 hover:text-green-800"
          >
            View Harvest GoMart Location →
          </Link>

          <div className="space-y-4">
            {[
              {
                icon: <BiSolidStore />,
                title: "Convenient shopping in one place",
                description: "Supported by modern stores and ordering systems",
              },
              {
                icon: <BiPurchaseTagAlt />,
                title: "High-quality products at competitive prices",
                description: "The more you shop, the more you save",
              },
              {
                icon: <BiNotepad />,
                title: "Educational programs, promotions, and great facilities",
                description:
                  "Enjoy the best shopping experience at Harvest GoMart!",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl text-green-600">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center bg-green-700 px-4 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Kiri: Teks */}
          <div className="max-w-lg text-white">
            <h1 className="mb-4 text-4xl font-bold">
              Join over 2000+ companies in the GoHarvest ecosystem{" "}
            </h1>
            <p className="mb-6">Meet your company's needs with GoHarvest </p>
            <Link
              href="/contact"
              className="rounded-md bg-white px-4 py-2 font-semibold text-green-600 transition hover:bg-gray-200"
            >
              Contact us
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {logos.map((logo, index) => (
              <div key={index} className="rounded-lg bg-white p-4 shadow-md">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={150}
                  height={100}
                  className="mx-auto object-contain"
                />
              </div>
            ))}
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
