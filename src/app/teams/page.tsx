"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMember {
  name: string;
  position: string;
  avatar: string;
  email: string;
}

interface TeamLeader {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function OurTeams() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading",
  );

  const teamLeaders: TeamLeader[] = useMemo(
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

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=4",
        );
        const members = response.data.results.map((member: any) => ({
          name: `${member.name.first} ${member.name.last}`,
          position: "Team Member",
          avatar: member.picture.large,
          email: member.email,
        }));

        setTeam(members);
        setStatus("success");
      } catch (error) {
        console.error("Failed to fetch team data:", error);
        setStatus("error");
      }
    };

    fetchTeamData();
  }, []);

  if (status === "loading") {
    return (
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 pb-14 pt-24 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center overflow-hidden rounded-lg bg-white text-center shadow-lg"
          >
            <Skeleton className="h-60 w-full rounded-t-lg" />
            <div className="p-6">
              <Skeleton className="mb-2 h-6 w-24" />
              <Skeleton className="mb-2 h-4 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="pt-24 text-center text-xl text-red-600">
        Error: Failed to load team data
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="pb-12 pt-36 text-center">
        <h1 className="text-4xl font-bold text-green-800">Meet Our Experts</h1>
        <p className="mt-4 text-gray-600">
          Meet the dedicated team members behind GoHarvest.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-green-700">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamLeaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden rounded-lg bg-white text-center shadow-lg transition hover:shadow-xl"
            >
              <div className="relative mt-6 h-40 w-40 overflow-hidden rounded-full border-4 border-green-700">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">
                  {leader.name}
                </h3>
                <p className="mt-2 text-gray-600">{leader.title}</p>
                <p className="mt-4 text-gray-500">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center text-2xl font-semibold text-green-700">
          Our Team Members
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden rounded-lg bg-white text-center shadow-lg transition hover:shadow-xl"
            >
              <div className="relative mt-6 h-32 w-32 overflow-hidden rounded-full border-4 border-green-700">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-600">{member.position}</p>
                <p className="mt-4 text-gray-500">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
