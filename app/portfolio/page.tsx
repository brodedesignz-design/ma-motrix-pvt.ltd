"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  img: string;
  title: string;
  detail: string;
}

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      img: "/samples/sample1.jpg",
      title: "Hydraulic Hose Assembly Project",
      detail:
        "This project involved the complete manufacturing and installation of custom hydraulic hose assemblies for a high-pressure industrial unit. The system improved operational efficiency by 30% and significantly reduced leakage risks across operations.",
    },
    {
      id: 2,
      img: "/samples/sample2.jpg",
      title: "Industrial Fittings Modernization",
      detail:
        "We modernized outdated industrial fittings by replacing them with stainless steel precision-engineered components. This upgrade increased durability, improved thermal resistance, and extended equipment lifespan by more than 50%.",
    },
    {
      id: 3,
      img: "/samples/sample3.jpg",
      title: "Automotive Spare Part Production",
      detail:
        "Our engineering team produced high-precision automotive spare parts with tolerance accuracy up to 0.02mm. These components are now actively used in commercial and industrial vehicles across multiple regions.",
    },
    {
      id: 4,
      img: "/samples/sample4.jpg",
      title: "Hydraulic Press Line Installation",
      detail:
        "We designed and installed a complete hydraulic press production line, including high-pressure pipelines, fittings, and hose systems. This installation boosted overall production output by approximately 45%.",
    },
  ];

  useEffect(() => {
    if (!selected) return;

    if (index < selected.detail.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + selected.detail[index]);
        setIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [index, selected]);

  const handleSelect = (project: Project) => {
    setSelected(project);
    setTypedText("");
    setIndex(0);
  };

  return (
    <div className="bg-zinc-50 min-h-screen text-black">
      {/* Page Header */}
      <div className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Showcasing our successful projects and industrial implementations.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => handleSelect(p)}
              className="group cursor-pointer relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#00ff88] text-sm font-bold uppercase tracking-wider block mb-2">
                  Industrial Sector
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-zinc-900 text-white rounded-lg max-w-3xl w-full p-8 relative">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Full Image */}
            <div className="relative w-full h-72 rounded-lg overflow-hidden mb-6">
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4">
              {selected.title}
            </h2>

            {/* Typewriter Detail */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
