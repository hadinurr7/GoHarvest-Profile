import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Mr. Budi",
    username: "@mr.budi",
    body: "Since partnering with GoHarvest, my crop yields have significantly increased. The procurement process is quick, and the quality is outstanding!",
    img: "https://avatar.vercel.sh/budi",
  },
  {
    name: "Ms. Siti",
    username: "@ms.siti",
    body: "GoHarvest makes it easy to get quality fertilizers at competitive prices. Our farming operations are now more efficient.",
    img: "https://avatar.vercel.sh/siti",
  },
  {
    name: "Mr. Joko",
    username: "@mr.joko",
    body: "The timely service from GoHarvest allows us to maximize our planting seasons. Highly recommended!",
    img: "https://avatar.vercel.sh/joko",
  },
  {
    name: "Mrs. Tini",
    username: "@mrs.tini",
    body: "Getting farming tools has become so much easier with GoHarvest. Their support has been invaluable to us.",
    img: "https://avatar.vercel.sh/tini",
  },
  {
    name: "Mr. Rahmat",
    username: "@mr.rahmat",
    body: "GoHarvest offers highly competitive prices, and the goods always arrive on time. Our business has grown rapidly!",
    img: "https://avatar.vercel.sh/rahmat",
  },
  {
    name: "Ms. Dewi",
    username: "@ms.dewi",
    body: "GoHarvest has been a great help in providing us with top-quality seeds. Our harvest has improved significantly.",
    img: "https://avatar.vercel.sh/dewi",
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
      <blockquote className="mt-3 text-base">{body}</blockquote>{" "}
    </figure>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12">
   
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Testimonials;
