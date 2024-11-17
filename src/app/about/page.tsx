import { useMemo } from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
const AboutUs = () => {
  const teamLeaders = useMemo(
    () => [
      {
        name: "Allan Josh",
        title: "CEO & Founder",
        description:
          "With over 20 years in the agribusiness sector, Allan leads GoHarvest with a vision to empower farmers and agribusinesses to be more productive.",
        image: "/assets/allan.jpg",
      },
      {
        name: "James Arthur",
        title: "COO",
        description:
          "James oversees daily operations, ensuring quality and timely delivery of agri-products to our customers.",
        image: "/assets/james.jpg",
      },
      {
        name: "Alyssia Stone",
        title: "Head of Marketing",
        description:
          "Alyssia drives GoHarvest's brand strategy, connecting us with our valued partners and customers.",
        image: "/assets/alyssia.jpg",
      },
    ],
    [],
  );

  return (
    <div className="pt-12 md:pt-[80px]">
      <section className="mb-16 grid w-full grid-cols-1 bg-green-700 pt-10 md:grid-cols-2 md:pt-20">
        <div className="relative h-56 md:h-auto">
          <Image
            src="/assets/aboutteams.png"
            alt="team"
            fill
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10">
          <h1 className="pb-4 text-start text-3xl font-bold text-white md:pb-8 md:text-5xl">
            Advancing Indonesia's Agribusiness
          </h1>
          <p className="pb-6 text-start text-lg text-white md:pb-12 md:text-2xl">
            GoHarvest was founded with a mission to empower farmers and
            agribusinesses through the timely supply of high-quality products
            and services at competitive prices. Over the years, we have grown to
            become a trusted partner for agricultural businesses, driving
            productivity and sustainability in the sector.
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="px-10 md:px-0">
          <h2 className="mb-6 text-3xl font-bold text-green-700">
            Our Vision & Mission
          </h2>
          <p className="text-gray-700">
            Our vision is to be a leading agribusiness partner that transforms
            agriculture in Indonesia. We aim to build a sustainable agricultural
            ecosystem where farmers, agribusinesses, and the environment thrive
            in harmony.
          </p>
          <p className="mt-6 text-gray-700">
            Our mission is to empower farmers, agribusinesses, and communities
            by providing innovative, sustainable, and high-quality agricultural
            products and services that boost productivity and create lasting
            value.
          </p>
          <div className="mt-8 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-600" />
              <span>
                Enhancing productivity through innovation and technology.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-600" />
              <span>
                Empowering farmers with timely access to quality products.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-600" />
              <span>
                Promoting sustainable farming practices for long-term impact.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-600" />
              <span>
                Building strong partnerships with agribusinesses and
                stakeholders.
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/visi-mission.jpeg"
            alt="Vision and Mission"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="container mx-auto mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-green-700">
          Meet Our Team
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamLeaders.map((member, index) => (
            <div
              key={index}
              className="transform text-center transition duration-300 hover:scale-105"
            >
              <div className="relative mx-auto mb-6 h-40 w-40">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="mt-4 text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-700">
          Our Culture
        </h2>

        <div className="container mx-auto mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Core Values That Drive Us
          </h3>
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-green-700">
                Innovation
              </h4>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and creative solutions to
                address challenges in the agriculture industry and enhance our
                service delivery.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-green-700">
                Sustainability
              </h4>
              <p className="text-gray-600">
                We are committed to promoting sustainable farming practices and
                ensuring a healthier planet for future generations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-green-700">
                Collaboration
              </h4>
              <p className="text-gray-600">
                Working together is key. We believe in strong partnerships, both
                internally and with our clients, to achieve mutual growth and
                success.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-green-700">
                Integrity
              </h4>
              <p className="text-gray-600">
                Honesty and transparency are the foundations of our business. We
                uphold the highest ethical standards in all our interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto md:mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Teamwork and Employee Well-being
          </h3>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="mb-6 text-gray-700">
                At GoHarvest, we prioritize the well-being of our employees. We
                foster a culture of collaboration, where every team member's
                voice is heard and valued. We offer continuous learning
                opportunities and encourage a healthy work-life balance.
              </p>
              <p className="mb-6 text-gray-700">
                Our team is passionate about making a positive impact on the
                agricultural sector. Together, we tackle challenges and
                celebrate victories as one.
              </p>
            </div>
            <div className="relative h-72">
              <Image
                src="/assets/Employee.jpeg"
                alt="Teamwork"
                fill
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
