"use client";

import FadeUp from "@/components/ui/FadeUp";
import {
  ShieldCheck,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  CreditCard,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Multi-Chain Wallet",
    description:
      "Manage Bitcoin, Ethereum, Solana, BNB Chain and many more in one place.",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Chain Swap",
    description:
      "Swap assets instantly across multiple blockchains with low fees.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    description:
      "Your assets stay protected using industry-leading encryption.",
  },
  {
    icon: CreditCard,
    title: "Buy Crypto",
    description:
      "Purchase crypto easily using bank transfer or debit card.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description:
      "Track your portfolio performance with beautiful real-time charts.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized infrastructure delivers fast transactions every time.",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="..."
>
      <div className="mx-auto max-w-7xl">

        <FadeUp>
          <p className="text-center text-violet-400 font-semibold">
            FEATURES
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
            GoFlazz combines security, speed and beautiful design into one
            modern crypto wallet.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeUp key={feature.title} delay={index * 0.1}>
                <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10">

                  <div className="mb-6 inline-flex rounded-2xl bg-violet-600/20 p-4 text-violet-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {feature.description}
                  </p>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
