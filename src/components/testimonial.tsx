"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

type ReviewType = {
  name: string;
  username: string;
  body: string;
  img: string;
};

const reviews = [
  {
    body: "Since partnering with GoHarvest, my crop yields have significantly increased. The procurement process is quick, and the quality is outstanding!",
  },
  {
    body: "GoHarvest makes it easy to get quality fertilizers at competitive prices. Our farming operations are now more efficient.",
  },
  {
    body: "The timely service from GoHarvest allows us to maximize our planting seasons. Highly recommended!",
  },
  {
    body: "Getting farming tools has become so much easier with GoHarvest. Their support has been invaluable to us.",
  },
  {
    body: "GoHarvest offers highly competitive prices, and the goods always arrive on time. Our business has grown rapidly!",
  },
  {
    body: "GoHarvest has been a great help in providing us with top-quality seeds. Our harvest has improved significantly.",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative mx-6 w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="rounded-full"
          width="48"
          height="48"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-base">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  const [dynamicReviews, setDynamicReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6");
      const fetchedUsers = response.data.results;

      const combinedReviews = fetchedUsers.map((user: any, index: number) => ({
        name: `${user.name.first} ${user.name.last}`,
        username: `@${user.login.username}`,
        img: user.picture.medium,
        body: reviews[index % reviews.length].body,
      }));

      setDynamicReviews(combinedReviews);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12">
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <Marquee pauseOnHover className="[--duration:30s]">
          {dynamicReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      )}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Testimonials;
