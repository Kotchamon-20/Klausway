"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./animation/reveal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Contact from ${firstName} ${lastName}`.trim(),
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:support@klausway.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Reveal className="rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Contact us</h2>

      {submitted ? (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Your email client should open with your message ready to send. If it
          did not open, email us directly at{" "}
          <a
            href="mailto:support@klausway.com"
            className="text-brand-300 hover:text-brand-200"
          >
            support@klausway.com
          </a>
          .
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted-foreground">
                First name
              </span>
              <input
                name="firstName"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-muted-foreground">
                Last name
              </span>
              <input
                name="lastName"
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted-foreground">
              Email<span className="text-brand-300">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted-foreground">
              Message<span className="text-brand-300">*</span>
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full resize-y rounded-xl border border-white/10 bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/30"
            />
          </label>
          <button
            type="submit"
            className="inline-flex rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            Submit
          </button>
        </form>
      )}
    </Reveal>
  );
}
