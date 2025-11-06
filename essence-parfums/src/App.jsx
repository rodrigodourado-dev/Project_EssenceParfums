import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PerfumeStore() {
  const perfumes = [
    {
      name: "Elysium Essence",
      image: "https://images.unsplash.com/photo-1600181953707-9f3a4a0ff7a2?auto=format&fit=crop&w=800&q=80",
      description: "Uma fragrância sofisticada com notas de âmbar e baunilha.",
      price: "R$ 499,00",
    },
    {
      name: "Noir Mystique",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519f3d52?auto=format&fit=crop&w=800&q=80",
      description: "Perfume intenso e marcante, com toques de sândalo e patchouli.",
      price: "R$ 389,00",
    },
    {
      name: "Blossom Air",
      image: "https://images.unsplash.com/photo-1594041680534-e8c8c06c7e9d?auto=format&fit=crop&w=800&q=80",
      description: "Fragrância leve e floral, ideal para o dia a dia.",
      price: "R$ 299,00",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-800">
      <header className="bg-pink-200 shadow-md py-6 mb-10">
        <h1 className="text-4xl font-bold text-center tracking-tight">Essence Parfums</h1>
        <p className="text-center text-gray-700">Descubra o perfume que combina com sua essência</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {perfumes.map((perfume, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="flex justify-center"
          >
            <Card className="overflow-hidden shadow-lg rounded-2xl">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{perfume.name}</h2>
                <p className="text-gray-600 mb-3">{perfume.description}</p>
                <p className="text-pink-700 font-bold text-lg mb-3">{perfume.price}</p>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
                  Comprar Agora
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      <footer className="bg-pink-200 mt-12 py-6 text-center text-gray-700">
        <p>© 2025 Essence Parfums. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}