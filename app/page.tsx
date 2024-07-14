import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils/shadcn";

const links = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/vivid344",
    icon: <Facebook />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vivid_344",
    icon: <Twitter />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vivid344",
    icon: <Instagram />,
  },
  {
    name: "GitHub",
    href: "https://github.com/vivid344",
    icon: <Github />,
  },
];

const Home = () => {
  return (
    <>
      <Wrapper
        className="flex h-full w-auto flex-col justify-start gap-4"
        x={-100}
        y={0}
      >
        <h3 className="font-poppins text-2xl max-sm:text-xl">
          My Name is
        </h3>
        <h1 className="name_underline font-rubik text-8xl text-primary max-sm:text-6xl">
          Ryoya Miyoshi
        </h1>
        <div className="py-4 font-poppins text-base text-gray-700 [text-wrap:balance] sm:text-2xl">
          I am a Web Frontend Engineer
        </div>
        <div className="flex h-fit w-full gap-3 p-4">
          {links.map((link, index) => {
            const delay = 0.55 + index * 0.125;
            return (
              <Wrapper key={link.name} delay={delay} y={50}>
                <Link
                  target="blank"
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                    }),
                  )}
                >
                  {link.icon}
                </Link>
              </Wrapper>
            );
          })}
        </div>
      </Wrapper>
      <Wrapper
        className="relative block h-full w-[47%] min-w-[250px] max-lg:hidden"
        x={100}
        y={0}
      >
        <Image
          src="/image.webp"
          alt="三好良弥 | Ryoya Miyoshi"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
      </Wrapper>
    </>
  );
};

export default Home;
