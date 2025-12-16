import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-black">

      {/* HEADER */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-[#00ff88]">MA MOTRIX (PVT) LTD</span>
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
              MA MOTRIX (PVT) LTD is a premier manufacturer and supplier of high-quality
              industrial components. With years of experience, we specialize in
              automotive spare parts, hydraulic systems, and precision-engineered fittings.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              By combining advanced manufacturing technology with strict quality control,
              we ensure every product meets international standards of performance,
              durability, and reliability.
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
