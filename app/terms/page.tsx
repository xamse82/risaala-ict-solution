import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "About GaadhiHel",
    text: "GaadhiHel is a car rental booking platform owned and operated by Risaala ICT Solution. It helps users find and book vehicles listed by participating rental companies.",
  },
  {
    number: "02",
    title: "Bookings",
    text: "Before confirming a booking, please review the vehicle, rental dates, price, and information shown during the booking process. A vehicle may be unavailable if it has already been booked for the selected period.",
  },
  {
    number: "03",
    title: "Rental companies",
    text: "Vehicles listed on GaadhiHel are provided by participating rental companies. The rental company should explain its pickup, return, vehicle use, and damage conditions to the renter.",
  },
  {
    number: "04",
    title: "Your information",
    text: "Please provide accurate contact information when booking so the rental company can reach you about your rental.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] text-[#123047]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-[#123047] font-serif text-3xl text-white">
            R<span className="text-[#d29363]">.</span>
          </span>
          <span className="text-sm font-extrabold leading-tight tracking-[0.15em]">
            RISAALA
            <span className="block text-[10px] tracking-[0.24em]">
              ICT SOLUTION
            </span>
          </span>
        </Link>

        <Link
          href="/#contact"
          className="border border-[#123047] px-4 py-3 text-sm font-bold"
        >
          Contact us ↗
        </Link>
      </header>

      <section className="bg-[#e8efeb] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Link href="/" className="text-sm font-bold hover:text-[#bd7848]">
            ← Back to home
          </Link>

          <p className="mt-20 text-xs font-bold tracking-[0.22em] text-[#bd7848]">
            GAADHIHEL / LEGAL
          </p>

          <h1 className="mt-7 text-[clamp(3.8rem,7.5vw,7rem)] font-bold leading-[1.03] tracking-[-0.075em]">
            Terms &amp;
            <br />
            <em className="font-serif font-normal text-[#bd7848]">
              Conditions.
            </em>
          </h1>

          <p className="mt-7 text-xl text-slate-600">
            GaadhiHel is owned and operated by Risaala ICT Solution.
          </p>
          <p className="mt-6 text-sm text-slate-500">Last updated: [DATE]</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden self-start lg:sticky lg:top-8 lg:block">
          <p className="text-xs font-bold tracking-widest text-[#bd7848]">
            ON THIS PAGE
          </p>
          <div className="mt-7 flex flex-col gap-5 text-sm">
            <a href="#section-01">01 — About GaadhiHel</a>
            <a href="#section-02">02 — Bookings</a>
            <a href="#section-03">03 — Rental companies</a>
            <a href="#section-04">04 — Your information</a>
            <a href="#contact">05 — Contact</a>
          </div>
        </aside>

        <div>
          {sections.map((section) => (
            <section
              id={`section-${section.number}`}
              key={section.number}
              className="scroll-mt-8 border-b border-slate-200 py-10 first:pt-0"
            >
              <span className="text-sm font-bold text-[#bd7848]">
                {section.number}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {section.text}
              </p>
            </section>
          ))}

          <section id="contact" className="scroll-mt-8 py-10">
            <span className="text-sm font-bold text-[#bd7848]">05</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Contact</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              For questions about GaadhiHel or these terms, contact Risaala ICT
              Solution.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Email:{" "}
              <a
                className="underline"
                href="mailto:hamseeid16@gmail.com"
              >
                hamseeid16@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a className="underline" href="tel:+252XXXXXXXXX">
                +252 63 4836239 ,  65 4836239
              </a>
              <br />
              Address: Hargeisa, Somaliland
            </p>
          </section>
        </div>
      </section>

      <footer className="bg-[#123047] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 text-sm sm:flex-row sm:items-center sm:px-10">
          <strong className="tracking-widest">RISAALA ICT SOLUTION</strong>
          <Link href="/" className="hover:text-[#e8aa7e]">
            Back to home ↑
          </Link>
          <span className="text-slate-300">
            © {new Date().getFullYear()} Risaala ICT Solution
          </span>
        </div>
      </footer>
    </main>
  );
}