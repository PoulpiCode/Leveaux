import { Button } from "@/components/ui/button";

const Hero78 = () => {
  return (
    <section className="dark relative flex h-svh max-h-[1400px] w-svw overflow-hidden bg-[url(/images/block/full-width-backgrounds/pawel-czerwinski-IbHFznCKnqA-unsplash.jpg)] bg-cover bg-center bg-no-repeat font-sans after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-black/20 after:content-[''] md:h-svh">
      <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
        <h1 className="text-center font-serif text-4xl leading-tight text-foreground md:text-6xl xl:text-[4.4rem]">
          Explore the wonders of science.
        </h1>
        <p className="text-center text-base text-foreground">
          From stunning skyscrapers to intricate bridges and innovative
          architectural marvels, each photo invites you to explore the
          artificial wonders of the world.
        </p>
        <Button className="h-fit w-fit rounded-full px-7 py-4 text-sm font-medium leading-tight">
          See all photos
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url(/images/block/noise.png)] bg-repeat opacity-15" />
    </section>
  );
};

export default Hero78;
