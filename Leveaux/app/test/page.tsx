"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Mail, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex w-full flex-col items-start gap-3 md:flex-row">
          <div className="w-full flex-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative w-full">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        id="emailInput"
                        placeholder="Enter your mail"
                        className="block h-fit w-full rounded-lg bg-input py-5 pl-11 pr-5 text-primary"
                      />
                    </FormControl>
                    <Mail className="absolute left-5 top-1/2 size-4 -translate-y-1/2 stroke-gray-400" />
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full shrink-0 md:w-fit">
            <Button
              type="submit"
              className="h-fit w-full text-nowrap rounded-lg px-8 py-5 font-semibold md:w-fit"
            >
              Get Started
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const Hero172 = () => {
  return (
    <section className="bg-background py-12 font-dm_sans md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center gap-20 lg:grid-cols-2">
          <div>
            <div className="flex max-w-[40.625rem] flex-col gap-8">
              <h1 className="font-serif text-4xl text-foreground lg:text-5xl xl:text-6xl">
                Automate and enhance your customer service
              </h1>
              <p className="text-balance text-lg text-muted-foreground">
                Ditch pen-and-paper bookings and focus on growing your business
                or relishing your newfound free time.
              </p>
              <HeroFrom />

              <div className="flex flex-col gap-1.5 py-4">
                <div className="flex items-center gap-2">
                  <Check className="size-4 stroke-muted2-foreground" />
                  <p className="text-lg font-medium text-muted2-foreground">
                    No credit card required
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 stroke-muted2-foreground" />
                  <p className="text-lg font-medium text-muted2-foreground">
                    14 days free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mx-auto aspect-[0.990343348_/_1] w-full max-w-[42.5rem]">
              <div className="absolute left-[4.33%] top-[5.04%] z-20 w-[42.25%]">
                <AspectRatio
                  ratio={0.857142857 / 1}
                  className="overflow-hidden"
                >
                  <img
                    src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                    alt=""
                    className="block size-full object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="absolute bottom-[12.87%] right-[8.23%] z-20 w-[42.25%]">
                <AspectRatio
                  ratio={0.789473684 / 1}
                  className="overflow-hidden"
                >
                  <img
                    src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                    alt=""
                    className="block size-full object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="absolute bottom-[5%] left-[10.94%] z-30 w-[42.25%]">
                <AspectRatio
                  ratio={0.894495413 / 1}
                  className="overflow-hidden"
                >
                  <img
                    src="https://shadcnblocks.com/images/block/placeholder-dark-3.svg"
                    alt=""
                    className="block size-full object-cover"
                  />
                </AspectRatio>
              </div>

              <Star className="absolute right-[16%] top-[15%] size-[4%] stroke-sky-500" />
              <svg
                className="absolute left-0 top-[10%] z-10 w-[70%]"
                viewBox="0 0 588 655"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M319 645.463C229 659.797 41.4 652.163 11 506.963C-27 325.463 100.5 299.463 177 288.963C253.5 278.463 341.5 307 454.5 288.963C486.365 283.877 585 242.009 583.5 119.009C582.3 20.6093 583 2.5 583 0.498047"
                  stroke="#5DCA8A"
                  strokeWidth="8"
                />
              </svg>
              <svg
                className="absolute bottom-0 left-[5%] z-20 w-[7%]"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 3L18 5.5M42.5 18L2 42M49.5 28.5L32.5 52M58.5 34L56 61"
                  stroke="#5DCA8A"
                  strokeWidth="6"
                />
              </svg>
              <svg
                className="absolute left-0 top-0 size-[6%] stroke-amber-500"
                viewBox="0 0 153 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72 9C68.4932 44.3333 50.7836 115 8 115"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 192C76 163.333 96.2 106 145 106"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 8C76 40.6667 96.2 106 145 106"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path
                  d="M72 192C68.4931 166.333 50.7836 115 8 115"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="absolute bottom-[3.5%] right-[2%] w-[12%]"
                viewBox="0 0 111 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.7298 64.2409C79.8305 65.844 77.5907 69.3884 74.4111 72.8859C71.2651 76.4113 67.183 79.817 63.7301 82.0851C61.7439 83.4125 59.6722 84.6193 57.5273 85.6817C56.4581 86.2136 55.372 86.6747 54.2912 87.1704C53.207 87.652 52.0948 88.0533 51.0005 88.4923C46.5667 90.148 42.0082 91.3659 37.4134 92.2539C28.2113 94.0268 18.9309 94.5091 9.76702 94.6103C6.8995 94.6457 2.04267 94.7689 2.10262 93.2898C2.16332 91.7506 5.38459 90.7806 10.3362 90.6529C16.3325 90.4964 22.3213 90.2577 28.2441 89.5883C34.1657 88.9522 40.0216 87.7984 45.5911 85.9545C49.648 84.5918 53.6182 82.9142 57.3198 80.8988C61.0082 78.8535 64.4708 76.3735 67.5837 73.5299C70.6917 70.6785 73.4641 67.4603 75.7326 63.936C77.9948 60.4103 79.7498 56.5644 80.7419 52.5457C81.6559 48.944 81.912 45.2076 81.5287 41.5417C81.4193 40.612 81.3121 39.7297 81.0978 38.8758C80.8913 38.017 80.636 37.1668 80.31 36.3603C79.6553 34.7599 78.7493 33.288 77.5814 32.3035C76.4385 31.2981 75.0339 30.8071 73.5918 30.9032C72.1463 30.985 70.6396 31.6685 69.3543 32.6921C68.7116 33.2038 68.1224 33.8018 67.6081 34.4509C67.3502 34.7786 67.1114 35.1108 66.9032 35.4837C66.6964 35.8502 66.4531 36.2014 66.2703 36.5803C65.512 38.096 65.1136 39.7902 64.9573 41.5078C64.4395 48.0084 68.1788 54.9143 73.9006 57.7466C76.797 59.2112 80.1285 59.7939 83.4301 59.5928C85.0891 59.5143 86.7238 59.1689 88.3335 58.7306C89.9399 58.2781 91.4783 57.602 92.9569 56.8383C95.4892 55.4384 97.7493 53.6867 99.6167 51.4408C101.478 49.2203 103.027 46.6784 104.105 43.9187C105.206 41.1712 105.924 38.2331 106.219 35.2424C106.396 33.7505 106.409 32.2405 106.39 30.7292C106.316 29.2188 106.207 27.7199 105.943 26.2248C105.727 24.808 105.294 23.2868 104.791 21.7554C104.273 20.2275 103.655 18.6962 103.068 17.2388C102.126 14.8076 100.075 10.9438 98.7361 8.6937C98.1755 7.71813 97.5637 6.70374 96.8779 5.83268C95.2833 3.84388 94.3027 2.57537 94.0608 1.7819C93.8174 0.99478 94.2891 0.697275 95.4958 0.833768C96.0295 0.899034 96.1168 0.243258 97.1261 1.07659C97.1645 1.11242 97.2493 1.17922 97.2877 1.21505C100.523 3.6568 102.459 7.32622 104.389 10.9072C106.78 15.3197 108.617 20.0909 109.571 25.0895C110.536 30.0974 110.528 35.3118 109.46 40.337C108.395 45.3496 106.238 50.2193 102.902 54.2423C101.251 56.2512 99.2665 58.0544 97.0732 59.4938C94.8847 60.941 92.4909 62.0654 89.9862 62.8356C88.4564 63.3329 86.862 63.6208 85.2619 63.8471C83.653 63.9977 82.0272 64.0773 80.4014 63.9293C77.1628 63.6631 73.9157 62.7788 71.0633 61.0701C68.1762 59.3665 65.7929 56.9445 64.0497 54.1641C62.3314 51.3628 61.2107 48.2132 60.801 44.9161C60.6224 43.1131 60.5427 41.2596 60.8632 39.4132C60.9609 38.4853 61.2549 37.5769 61.5206 36.6751C61.6485 36.2164 61.8814 35.7958 62.065 35.3568C62.2676 34.9224 62.4449 34.4819 62.7191 34.0844L62.6852 34.1434C63.5965 32.3757 64.8698 30.7199 66.4387 29.4015C68.0125 28.091 69.9233 27.0271 72.1343 26.6231C74.224 26.2508 76.5556 26.5581 78.461 27.5955C80.4135 28.6038 81.8569 30.1821 82.9297 31.8272C83.9712 33.4917 84.7152 35.2536 85.1957 37.0541C85.4533 37.9517 85.6258 38.8694 85.7744 39.7749C85.8801 40.6635 86.0142 41.5454 86.052 42.4382C86.1891 44.2181 86.165 46.0003 86.0125 47.759C85.8791 49.5221 85.5792 51.2528 85.1871 52.9484C84.4028 56.3397 83.1368 59.5305 81.6016 62.4706C81.3769 62.9133 81.1142 63.5747 80.7298 64.2409Z"
                  fill="#0F1F2C"
                />
                <path
                  d="M24.1792 97.846C25.5763 98.1411 30.5082 99.2074 33.6818 99.8065C41.0391 101.209 48.3881 102.589 55.6621 104.374C56.7964 104.647 58.7477 105.006 58.4548 106.45C58.1486 107.952 56.6762 108.603 54.6783 108.187C49.8404 107.176 45.0196 105.922 40.1392 105.263C33 104.3 25.9925 102.692 18.9454 101.309C15.7762 100.691 12.619 100.022 9.46478 99.3403C8.66867 99.1664 7.90764 99.0142 7.0574 98.8143C6.215 98.6094 5.32147 98.3658 4.40515 97.9628C3.95016 97.762 3.4851 97.5187 3.03981 97.2198C2.56429 96.9071 2.12907 96.5369 1.74684 96.1122C0.988735 95.2643 0.326901 94.1779 0.20547 92.7297C0.163247 92.1975 0.220304 91.6418 0.371041 91.1147C0.556478 90.4687 0.891585 89.898 1.26776 89.4374C1.64393 88.9768 2.05632 88.6184 2.46013 88.325C3.26625 87.7446 4.05 87.3732 4.76657 87.0596L8.75998 85.3405C11.4035 84.2079 14.0581 83.0846 16.7345 82.0401C21.6012 80.138 26.5945 78.5804 31.5009 76.7948C32.6571 76.3771 33.9361 75.5798 35.199 75.1068C36.2418 74.7159 37.9795 74.0465 39.0506 73.7628C39.5153 73.6377 39.9975 73.5235 40.4181 73.301C42.3249 72.283 43.0467 72.5733 42.9916 74.4018C42.9767 74.8067 43.3284 75.1907 42.9406 75.6151C42.9234 75.6312 42.894 75.6711 42.8768 75.6872C41.7882 77.2123 40.1113 77.367 38.6069 77.9841C31.2247 81.0154 23.8048 83.9507 16.4028 86.9238L9.57737 89.6374L7.87624 90.3221C7.31978 90.5528 6.71442 90.7921 6.22103 91.0108C5.71981 91.2344 5.27083 91.4637 4.94689 91.7022C4.6166 91.9392 4.44904 92.1676 4.42367 92.2755C4.40986 92.3057 4.41808 92.3278 4.41845 92.3546C4.44645 92.4349 4.47855 92.4692 4.58718 92.6622C4.68759 92.8331 4.85222 93.0727 5.03139 93.3358L5.02653 93.328C5.17061 93.4556 5.32066 93.5578 5.49908 93.6534C5.69503 93.7597 5.913 93.8579 6.14516 93.9527C6.6188 94.131 7.16486 94.2862 7.771 94.4422C8.33907 94.5892 8.98439 94.7209 9.6536 94.8649C10.3165 95.0074 10.9745 95.1421 11.6374 95.2846C12.9661 95.5569 14.3012 95.8307 15.6235 96.1016C18.2746 96.6448 20.8974 97.1947 23.4003 97.77C23.6078 97.7987 23.8922 97.7852 24.1792 97.846Z"
                  fill="#0F1F2C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero172;
