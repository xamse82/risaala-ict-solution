import Link from "next/link";

export default function HomePage() {
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

        <nav className="flex items-center gap-7 text-sm font-semibold">
          <a href="#about" className="hidden hover:text-[#bd7848] sm:block">
            About
          </a>
          <a href="#contact" className="hidden hover:text-[#bd7848] sm:block">
            Contact
          </a>
          <Link
            href="/terms"
            className="border border-[#123047] px-4 py-3 transition hover:bg-[#123047] hover:text-white"
          >
            GaadhiHel Terms ↗
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-12 sm:px-10 lg:min-h-[650px] lg:grid-cols-2 lg:pt-0">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#bd7848]">
            DIGITAL SOLUTIONS FOR REAL WORK
          </p>

          <h1 className="mt-8 text-[clamp(3.8rem,7.5vw,7rem)] font-bold leading-[1.03] tracking-[-0.075em]">
            Building what
            <br />
            comes{" "}
            <em className="font-serif font-normal text-[#bd7848]">next.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Risaala ICT Solution creates practical digital products for people
            and businesses. We are the company behind GaadhiHel.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-12 bg-[#123047] px-6 py-5 text-sm font-bold text-white transition hover:bg-[#1c4864]"
          >
            Contact our team <span className="text-lg">↗</span>
          </a>
        </div>

        <div
          aria-hidden="true"
          className="relative flex aspect-square max-h-[480px] items-center justify-center overflow-hidden bg-[#e8efeb]"
          style={{
            backgroundImage:
              "linear-gradient(#d4e0d9 1px, transparent 1px), linear-gradient(90deg, #d4e0d9 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        >
          <div className="absolute aspect-square w-[78%] rounded-full border border-[#aabeb3]" />
          <div className="absolute aspect-square w-[53%] rounded-full border border-[#aabeb3]" />
          <div className="relative z-10 flex h-30 w-30 items-center justify-center bg-[#123047] font-serif text-8xl text-white">
            R
          </div>
          <span className="absolute right-[6%] top-[15%] bg-white px-4 py-3 text-xs font-bold tracking-widest">
            RISAALA / ICT
          </span>
          <span className="absolute bottom-[13%] left-[6%] bg-white px-4 py-3 text-xs font-bold tracking-widest">
            IDEAS INTO REALITY
          </span>
        </div>
      </section>

      <section id="about" className="bg-[#123047] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#e8aa7e]">
              01 / WHO WE ARE
            </p>
            <h2 className="mt-8 text-[clamp(3rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-[-0.06em]">
              A technology firm focused on{" "}
              <em className="font-serif font-normal text-[#e8aa7e]">
                useful ideas.
              </em>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              Risaala ICT Solution develops digital solutions that make
              everyday work easier and connect businesses with the people they
              serve.
            </p>

            <div className="mt-10 border border-slate-500 p-8">
              <span className="text-xs font-bold tracking-[0.2em] text-[#e8aa7e]">
                OUR PRODUCT
              </span>
              <h3 className="mt-5 text-3xl font-bold">GaadhiHel</h3>
              <p className="mt-4 leading-7 text-slate-300">
                GaadhiHel is owned and operated by Risaala ICT Solution.
              </p>
              <Link
                href="/terms"
                className="mt-5 inline-block border-b border-[#e8aa7e] pb-2 text-sm font-bold"
              >
                View terms and conditions ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-28 sm:px-10">
        <p className="text-xs font-bold tracking-[0.22em] text-[#bd7848]">
          02 / CONTACT
        </p>

        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="text-[clamp(3rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-[-0.06em]">
            Let’s start a
            <br />
            <em className="font-serif font-normal text-[#bd7848]">
              conversation.
            </em>
          </h2>
          <p className="max-w-sm text-lg leading-8 text-slate-600">
            Have a question about Risaala ICT Solution or GaadhiHel? Reach us
            through the details below.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="min-h-52 border border-slate-200 bg-white p-7">
            <span className="text-xs font-bold tracking-widest text-[#bd7848]">
              EMAIL
            </span>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="mt-14 block break-all text-xl font-bold hover:text-[#bd7848]"
            >
              hamseeid16@gmail.com
            </a>
          </div>

          <div className="min-h-52 border border-slate-200 bg-white p-7">
            <span className="text-xs font-bold tracking-widest text-[#bd7848]">
              PHONE
            </span>
            <a
              href="tel:+252"
              className="mt-14 block text-xl font-bold hover:text-[#bd7848]"
            >
              +252 63 4836239 , 65 4836239
            </a>
          </div>

          <div className="min-h-52 border border-slate-200 bg-white p-7">
            <span className="text-xs font-bold tracking-widest text-[#bd7848]">
              ADDRESS
            </span>
            <p className="mt-14 text-xl font-bold">
              Hargeisa, Somaliland
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#123047] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 text-sm sm:flex-row sm:items-center sm:px-10">
          <strong className="tracking-widest">RISAALA ICT SOLUTION</strong>
          <Link href="/terms" className="hover:text-[#e8aa7e]">
            GaadhiHel Terms
          </Link>
          <span className="text-slate-300">
            © {new Date().getFullYear()} Risaala ICT Solution
          </span>
        </div>
      </footer>
    </main>
  );
}