import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-black">

      {/* HEADER */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap items-center gap-3">
  <span>About</span>

  {/* MA */}
  <span className="italic font-extrabold tracking-wide">
    <span className="text-[#C9A227]">M</span>
    <span className="text-[#00ff88]">A</span>
  </span>

  {/* MOTRIX */}
  <span className="italic font-extrabold text-white tracking-wide">
    MOTRIX
  </span>

  {/* PVT LTD */}
  <span className="text-base md:text-lg text-gray-400 mt-2">
    (Pvt) Ltd.
  </span>
</h1>
          <p className="text-gray-400 max-w-2xl">
            Building the future of industrial manufacturing with precision and innovation.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/about/about-hero.jpg"
              alt="Precision Engineering at MA MOTRIX (PVT) LTD"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

<p className="text-gray-600 mb-6 leading-relaxed">
  MA MOTRIX (PVT) LTD is a trusted industrial company specializing in the
  import, manufacturing, and export of high-quality automotive and
  industrial components.
</p>

<p className="text-gray-600 mb-6 leading-relaxed">
  We source premium-grade parts and raw materials from leading international
  markets including the USA, China, and other global manufacturing hubs.
  These imported components are carefully selected to meet international
  quality standards and are further processed, assembled, and manufactured
  in-house to ensure reliability, durability, and performance.
</p>

<p className="text-gray-600 mb-6 leading-relaxed">
  Our integrated supply chain allows us to offer cost-effective solutions
  without compromising on quality. By combining global sourcing with local
  manufacturing expertise, we serve automotive, hydraulic, and industrial
  sectors efficiently.
</p>

<p className="text-gray-600 leading-relaxed">
  With a strong focus on precision engineering, competitive pricing, and
  timely delivery, MA MOTRIX (PVT) LTD continues to build long-term
  partnerships with clients across domestic and international markets.
</p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-[#00ff88]" />
                ISO-standard manufacturing processes
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-[#00ff88]" />
                Precision-engineered industrial solutions
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-[#00ff88]" />
                Trusted by industrial clients nationwide
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
