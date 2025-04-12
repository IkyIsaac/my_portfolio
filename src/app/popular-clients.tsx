"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "capstone",
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            POPULAR CLIENTS
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Trusted by over 10,000+ <br /> clients
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={480}
              height={480}
              src={`/logos/logo-${logo}.svg`}
              className="w-40 grayscale opacity-75"
            />
          ))}
          <Image
              alt="fiqra"
              width={480}
              height={480}
              src={`/logos/logo-fiqra.png`}
              className="w-40 grayscale opacity-75"
            />
            <Image
              alt="beauty_relief"
              width={480}
              height={480}
              src={`/logos/logo-beauty_relief.png`}
              className="w-40 grayscale opacity-75"
            />
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
