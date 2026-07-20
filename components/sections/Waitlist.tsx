"use client";

import { useState } from "react";
import { joinWaitlist } from "@/services/waitlist/join";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await joinWaitlist(name, email);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("🎉 Successfully joined the waitlist!");
      setName("");
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <section
  id="waitlist"
  className="mx-auto max-w-xl px-6 py-24"
>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

        <h2 className="text-center text-3xl font-bold">
          Join the Waitlist
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Be among the first users to experience GoFlazz.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-sm text-violet-300">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
