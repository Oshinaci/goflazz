"use client";

import FadeUp from "@/components/ui/FadeUp";
import { Wallet, TrendingUp, ShieldCheck } from "lucide-react";

export default function AppPreview() {
  return (
    <FadeUp>
      <div className="relative mx-auto w-full max-w-md">

        {/* Glow */}
        <div className="absolute -inset-10 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Phone */}
        <div className="relative rounded-[40px] border border-white/10 bg-gradient-to-br from-[#18181B] to-[#09090B] p-6 shadow-2xl">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Balance</p>
              <h2 className="mt-2 text-3xl font-bold">$24,845.22</h2>
            </div>

            <div className="rounded-2xl bg-violet-600/20 p-3">
              <Wallet className="text-violet-400" size={28} />
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-4">
            <div className="mb-4 flex justify-between">
              <span>Bitcoin</span>
              <span>0.542 BTC</span>
            </div>

            <div className="mb-4 flex justify-between">
              <span>Ethereum</span>
              <span>8.12 ETH</span>
            </div>

            <div className="flex justify-between">
              <span>Solana</span>
              <span>124 SOL</span>
            </div>
          </div>

        </div>

        {/* Floating Card 1 */}
        <div className="absolute -left-10 top-20 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <TrendingUp className="mb-2 text-green-400" size={26} />
          <p className="text-sm text-gray-300">Portfolio</p>
          <h3 className="font-bold text-green-400">+18.2%</h3>
        </div>

        {/* Floating Card 2 */}
        <div className="absolute -right-8 bottom-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <ShieldCheck className="mb-2 text-violet-400" size={26} />
          <p className="text-sm text-gray-300">Security</p>
          <h3 className="font-bold">Protected</h3>
        </div>

      </div>
    </FadeUp>
  );
}
