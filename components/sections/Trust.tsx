"use client";

import FadeUp from "@/components/ui/FadeUp";
import {
  Users,
  Globe,
  ShieldCheck,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    title: "Community Members",
  },
  {
    icon: Globe,
    value: "20+",
    title: "Blockchain Networks",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    title: "Wallet Security",
  },
  {
    icon: Star,
    value: "24/7",
    title: "Community Support",
  },
];

const partners = [
  "Ethereum",
  "Arbitrum",
  "Polygon",
  "Optimism",
  "Base",
  "BNB Chain",
];

export default function Trust() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <FadeUp>
          <p className="text-center text-violet-400 font-semibold">
            TRUSTED PLATFORM
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold">
            Built for the Next Generation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
            GoFlazz is designed with security, performance, and scalability at
            its core, preparing for a future with multi-chain assets, DeFi, NFTs,
            AI, and seamless digital payments.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={index * 0.1}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                  <Icon className="mb-5 text-violet-400" size={34} />

                  <h3 className="text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {item.title}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-24">
            <p className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-gray-500">
              Future Network Support
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-gray-300 transition hover:border-violet-500 hover:text-white"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
