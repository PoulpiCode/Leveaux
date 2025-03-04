import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@radix-ui/react-separator";

const posts = [
  {
    id: "post-1",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait2.png",
  },
  {
    id: "post-2",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait3.png",
  },
  {
    id: "post-3",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait4.png",
  },
  {
    id: "post-4",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait5.png",
  },
  {
    id: "post-5",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait6.png",
  },
  {
    id: "post-6",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait7.png",
  },
  {
    id: "post-7",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait8.png",
  },
  {
    id: "post-8",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait9.png",
  },
  {
    id: "post-9",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait10.png",
  },
  {
    id: "post-10",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait11.png",
  },
  {
    id: "post-11",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait12.png",
  },
  {
    id: "post-12",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "refait13.png",
  },
];

const HeroBlog = () => {
  return (
    <>
      <section className="py-12">
        <div className="overflow-hidden border-b border-muted">
          <div className="container">
            <div className="mx-auto flex max-w-5xl flex-col items-center">
              <div className="z-10 items-center text-center">
                <h1 className="mb-3 text-5xl font-bold">Nos Créations</h1>
              </div>
            </div>
            <img
              src="Aubade2_Leveaux3.png"
              alt="placeholder"
              className="mx-auto mt-12 max-h-[700px] w-full max-w-7xl rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
            {posts.map((post) => (
              <a key={post.id} href={post.href} className="group flex flex-col">
                <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                  <div className="h-full w-full transition duration-300 group-hover:scale-105">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[3/2] h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlog;
