import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = [
  { name: "Industries", values: ["None", "Beauty", "Car dealerships"] },
  { name: "Use cases", values: ["None", "HR & Recruiting"] },
  { name: "Functions", values: ["None", "Automations", "Integrations"] },
  { name: "Company size", values: ["None", "1-10, 11-50", "51-200", "200+"] },
];

const posts = [
  {
    id: "post-1",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-3",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-4",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-5",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-6",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

const Blog1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="mb-6 w-full text-4xl font-medium md:mb-14 md:text-5xl lg:mb-16 lg:text-6xl">
            All case studies
          </h2>
          <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-3">
            {filters.map((filter) => (
              <div key={filter.name} className="shrink-0 md:w-52 lg:w-56">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={filter.name} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-accent p-6"
            >
              <div>
                <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {post.title}
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                {post.summary}
              </div>
              <div>
                <Badge>{post.label}</Badge>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog1 ;
