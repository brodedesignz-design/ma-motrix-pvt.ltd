import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Automotive Spare Parts",
    description: "High-quality spare parts for various automotive applications.",
    image: "/automotive-spare-parts-gear-engine.jpg",
    category: "Automotive"
  },
  {
    id: 2,
    name: "Hydraulic Hose Pipes",
    description: "Durable hydraulic hoses designed for high-pressure systems.",
    image: "/hydraulic-hose-pipe-industrial.jpg",
    category: "Hydraulic"
  },
  {
    id: 3,
    name: "Teflon Pipes",
    description: "Chemical resistant Teflon pipes for specialized industrial use.",
    image: "/teflon-pipe-white-industrial.jpg",
    category: "Pipes"
  },
  {
    id: 4,
    name: "SS Bellow Hose Pipes",
    description: "Stainless steel bellow hoses for flexibility and durability.",
    image: "/stainless-steel-bellow-hose-metal.jpg",
    category: "Hoses"
  },
  {
    id: 5,
    name: "Industrial Fittings",
    description: "Precision-engineered fittings for seamless connections.",
    image: "/industrial-metal-fittings-brass-steel.jpg",
    category: "Fittings"
  },
  {
    id: 6,
    name: "Crimping Machines",
    description: "Advanced crimping machines for hose assembly.",
    image: "/crimping-machine-industrial.jpg",
    category: "Machinery"
  },
  {
    id: 7,
    name: "General Order Items",
    description: "Custom manufacturing for general industrial orders.",
    image: "/industrial-manufacturing-parts-pile.jpg",
    category: "General"
  }
]

export default function ProductsPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our comprehensive range of industrial solutions, engineered for performance and reliability.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#00ff88] uppercase tracking-wider mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-6 text-sm line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-sm font-bold text-black hover:text-[#00ff88] transition-colors"
                >
                  ENQUIRE NOW <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
