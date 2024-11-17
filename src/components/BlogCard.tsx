import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Blog } from "@/types/blog";
import { FC } from "react";
import { format } from "date-fns";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/${blog.entryId}`}>
      <Card className="w-full">
        <div className="relative h-[320px] w-full">
          <Image src={blog.thumbnail} alt="thumbnail" fill className="" />
        </div>
        <CardContent>
          <div className="flex gap-2 py-4">
            <Badge className="rounded-sm bg-green-200 text-green-600">
              {blog.category}
            </Badge>
            <Badge>{format(blog.createdAt, "dd MMM yyyy")}</Badge>
          </div>
          <h2 className="line-clamp-2 text-lg font-bold">{blog.title}</h2>
          <p className="line-clamp-3">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
