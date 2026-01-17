import React, { useState, useCallback } from "react";
import { Toast } from "../components/Toast";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleCloseToast = useCallback(() => setShowToast(false), []);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  const phoneRegex =
    /^(?:\+20|20|01)\d{9}$|^(?:\+971|971|05)\d{8}$|^(?:\+966|966|05)\d{8}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", phone: "" });
    setIsLoading(true);
    const timestamp = new Intl.DateTimeFormat("en-US", {
      timeZone: "Africa/Cairo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format();
    const name = e.target.Name.value;
    const phone = e.target.Phone.value;
    if (name.trim() === "") {
      setErrors({ ...errors, name: "Name is required" });
      setIsLoading(false);
      return;
    }

    if (phone.trim() === "") {
      setErrors({ ...errors, phone: "Phone is required" });
      setIsLoading(false);
      return;
    }

    // check if phone is valid phone number not including text
    if (!phoneRegex.test(phone)) {
      setErrors({
        ...errors,
        phone: "Invalid phone number. Please enter a valid phone number.",
      });
      setIsLoading(false);
      return;
    } else {
      setErrors({ ...errors, phone: "" });
    }

    if (errors.name || errors.phone) {
      setIsLoading(false);
      return;
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbxbTSlToGSNCGFKf9qBsnDqNC95xpOX3xzevcuw9BM5-VRKRXZeyHI2NoNdy5lQsdig1A/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `Timestamp=${timestamp}&Name=${name}&Phone=${phone}`,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        setSubmitted(true);
        setIsLoading(false);
        setShowToast(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };
  return (
    <section className="py-24 px-6 md:px-20 bg-background-dark relative overflow-hidden">
      {showToast && <Toast onClose={handleCloseToast} />}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 relative z-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            Ready to Build Your{" "}
            <span className="text-primary italic">Success Story?</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl">
            Whether you're looking to elevate your brand, generate more leads,
            or create engaging content, Marketivya is here to turn your next big
            idea into measurable results.
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">
                  call
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">
                  Phone (UAE)
                </p>
                <p className="text-white text-xl font-bold">+971 56 107 3053</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">
                  mail
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:marketivyaagency@gmail.com"
                  className="text-white text-xl font-bold hover:text-primary transition-all"
                >
                  marketivyaagency@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 glass-card p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.02]">
          {/* <div className="mb-8">
            <div className="size-20 rounded-3xl bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/30 mx-auto mb-6">
              <svg
                className="w-12 h-12 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-4 italic text-white">
              Let's Start a Conversation
            </h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto">
              Get in touch with us directly on WhatsApp for instant support and
              personalized assistance.
            </p>
          </div> */}
          <h3 className="text-2xl font-black mb-8 italic">
            Request a Performance Audit
          </h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary transition-all text-white placeholder-slate-600"
              placeholder="Name"
              name="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <input
              className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary transition-all text-white placeholder-slate-600"
              placeholder="Phone Number"
              type="tel"
              name="Phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-background-dark font-black py-5 rounded-2xl text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              {isLoading ? "Submitting..." : "Start Your Journey"}
            </button>
          </form>

          {/* <a
            href="https://wa.me/971561073053"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-[#25D366] text-white font-black py-5 px-8 rounded-2xl text-lg uppercase tracking-widest shadow-2xl shadow-[#25D366]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 hover:bg-[#20BA5A]"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Chat on WhatsApp</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-slate-500 text-sm mt-6 font-medium">
            +971 56 107 3053
          </p> */}
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute -bottom-24 -right-24 size-[500px] bg-primary/10 blur-[120px] rounded-full z-0" />
    </section>
  );
};
