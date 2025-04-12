"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase.svg",
  "spotify.svg",
  "pinterest.svg",
  "google.svg",
  // "fiqra.png",
  "capstone.png",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h6 className="text-blue-gray-500 mb-8">My awesome clients</h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}`}
            />
          ))}
          <Image
            alt="fiqra"
            width={468}
            height={468}
            className="w-40"
            src={`/logos/logo-fiqra.png`}
          />
          <Image
            alt="beauty_relief"
            width={768}
            height={768}
            src={`/logos/logo-beauty_relief.png`}
            className="w-40"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
