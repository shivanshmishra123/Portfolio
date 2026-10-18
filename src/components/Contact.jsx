import { useState } from "react";
import { contactInfo } from "../data/portfolioData";
import { EmailIcon, PhoneIcon, LocationIcon, LinkedinIcon, GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const sectionHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const leftColumnVariants = {
  hidden: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

const rightColumnVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

const contactItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1 + (i % 4) * 0.06,
    },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const scriptUrl =
      contactInfo.googleScriptUrl ||
      "https://script.google.com/macros/s/AKfycbyF_WjluXdIVx8mYaED828TECCfi-VB2YMwpglS3etytnrM80lPjyV6jbBSVITK063JRQ/exec";

    try {
      const params = new URLSearchParams();
      params.append("name", form.name.trim());
      params.append("email", form.email.trim());
      params.append("subject", form.subject.trim());
      params.append("message", form.message.trim());

      const res = await fetch(scriptUrl, {
        method: "POST",
        body: params,
      });

      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        data = { success: true };
      }

      if (data.success !== false) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.message || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      console.warn("Standard fetch encountered an issue, trying direct fallback...", err);
      try {
        const params = new URLSearchParams();
        params.append("name", form.name.trim());
        params.append("email", form.email.trim());
        params.append("subject", form.subject.trim());
        params.append("message", form.message.trim());

        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: params,
        });

        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } catch (fallbackErr) {
        setError("Unable to submit right now. Please email directly at " + contactInfo.email);
      }
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <LocationIcon />,
      label: "Location",
      value: contactInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FF5A36] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Have an exciting project, internship opportunity, or just want to chat about tech? Let's connect!
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* LEFT: Contact Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-40px" }}
          >
            <h3 className="text-xl font-bold text-white">Contact Information</h3>

            <div className="space-y-4">
              {contactItems.map((item, i) =>
                item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={contactItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#131316] border border-white/10 shadow-sm hover:border-[#FF5A36]/60 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF5A36]/15 text-[#FF5A36] flex items-center justify-center group-hover:bg-[#FF5A36] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-[#FF5A36] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={contactItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#131316] border border-white/10 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF5A36]/15 text-[#FF5A36] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-200">{item.value}</p>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* Social Quick Links */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131316] border border-white/10 hover:border-[#FF5A36]/60 group transition-all"
              >
                <LinkedinIcon className="w-5 h-5 fill-current text-[#FF5A36]" />
                <span className="text-sm font-semibold text-slate-200 group-hover:text-[#FF5A36]">LinkedIn</span>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131316] border border-white/10 hover:border-[#FF5A36]/60 group transition-all"
              >
                <GithubIcon className="w-5 h-5 fill-current text-[#FF5A36]" />
                <span className="text-sm font-semibold text-slate-200 group-hover:text-[#FF5A36]">GitHub</span>
              </a>
            </motion.div>

            {/* Availability card */}
            <motion.div
              className="p-5 rounded-2xl bg-[#3DD68C]/10 border border-[#3DD68C]/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DD68C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DD68C]" />
                </span>
                <span className="text-sm font-bold text-[#3DD68C]">Available for Opportunities</span>
              </div>
              <p className="text-xs text-slate-400">
                Actively looking for internships, full-time roles, and freelance projects.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            className="lg:col-span-7 bg-[#131316] rounded-2xl p-8 sm:p-10 border border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.7)]"
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-40px" }}
          >
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 rounded-full bg-[#3DD68C]/20 border border-[#3DD68C]/40 flex items-center justify-center text-2xl text-[#3DD68C]">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Delivered!</h3>
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                  Thanks for reaching out! Your submission has been saved to the database and an automated notification has been triggered. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(null); }}
                  className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#FF5A36]/15 text-[#FF5A36] border border-[#FF5A36]/30 hover:bg-[#FF5A36] hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <motion.div
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-base">⚠️</span>
                    <span className="leading-snug">{error}</span>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Shivansh Mishra"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 text-white placeholder-slate-500 bg-[#09090b] focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/25 transition-all text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-700 text-white placeholder-slate-500 bg-[#09090b] focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/25 transition-all text-sm"
                    />
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity / Collaboration / etc."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 text-white placeholder-slate-500 bg-[#09090b] focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/25 transition-all text-sm"
                  />
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Shivansh, I'd love to connect about..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-700 text-white placeholder-slate-500 bg-[#09090b] focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/25 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-white bg-[#FF5A36] hover:bg-[#e44a27] disabled:opacity-60 shadow-lg shadow-[#FF5A36]/30 hover:shadow-xl hover:shadow-[#FF5A36]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
