"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/services/newsletter/subscribe";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await subscribeNewsletter(email);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("🎉 Successfully subscribed!");
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h2 className="text-center text-3xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Subscribe to receive GoFlazz updates, beta invitations and release
          announcements.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 md:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
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
