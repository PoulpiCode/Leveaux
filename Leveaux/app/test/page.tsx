"use client";
import { MessagesSquare, Play } from "lucide-react";
import { Fragment, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero135 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className="py-1">
        <div className="container">
          <div className="flex flex-col justify-center lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="relative w-full overflow-hidden rounded-3xl">
				  <div className="size-half py-2">
					<video
					  src="/HeroSection.mp4"
					  muted
					  autoPlay
					  loop
					  className="size-half object-cover object-center rounded-3xl"
					/>
					                    <Button
                      size="icon"
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute top-96 left-0 m-8 flex size-fit w-fit items-center gap-4 rounded-full bg-white py-3 pl-3 pr-8 transition-transform hover:scale-105 hover:bg-white"
                    >
                      <div className="flex h-20 w-20 rounded-full bg-primary">
                        <Play className="m-auto !size-7 fill-white stroke-white" />
                      </div>
                      <div>
                        <div className="text-left text-base font-semibold text-foreground">
                          Vidéo d'entreprise
                        </div>
                        <div className="text-left text-base font-medium text-muted-foreground">
                          Broderie Leveaux
                        </div>
                      </div>
                    </Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Presentation Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
          <iframe
  className="h-full w-full"
  src="https://www.youtube.com/embed/0-Qn_07TpQo"  // URL modifiée pour l'iframe
  title="Presentation Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Hero135;
