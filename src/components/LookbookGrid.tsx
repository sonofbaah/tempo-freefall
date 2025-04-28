import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
}

interface LookbookGridProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "BLACK GOLD HOODIE",
    price: "₵850",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    description:
      "Premium heavyweight cotton hoodie with reflective gold Adinkra symbol print. Limited to 50 pieces worldwide.",
    available: true,
  },
  {
    id: "2",
    name: "ACCRA NIGHTS TEE",
    price: "₵450",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
    description:
      "Oversized cotton tee featuring Accra skyline silhouette with gold foil details. Each piece individually numbered.",
    available: true,
  },
  {
    id: "3",
    name: "HERITAGE CARGO PANTS",
    price: "₵950",
    image:
      "https://images.unsplash.com/photo-1509551388413-e18d05a2016a?w=800&q=80",
    description:
      "Technical cargo pants with traditional Kente-inspired pocket details and adjustable ankles.",
    available: false,
  },
  {
    id: "4",
    name: "ADINKRA SNAPBACK",
    price: "₵350",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    description:
      "Black snapback cap with embroidered Adinkra symbols representing strength and wisdom.",
    available: true,
  },
  {
    id: "5",
    name: "GOLD DUST BOMBER",
    price: "₵1250",
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
    description:
      "Premium satin bomber jacket with hand-painted gold accents inspired by traditional Ashanti goldwork.",
    available: true,
  },
  {
    id: "6",
    name: "FREEDOM SOCKS",
    price: "₵150",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&q=80",
    description:
      "Premium knit socks with reflective gold threading and FreeFall logo. Comes in a collector's box.",
    available: true,
  },
];

const LookbookGrid: React.FC<LookbookGridProps> = ({
  products = defaultProducts,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          DROP 001: <span className="text-amber-500">BLACK GOLD</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card
                className="bg-zinc-900 border-zinc-800 overflow-hidden group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-500 font-medium">
                          {product.price}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center text-white"
                        >
                          <span className="mr-1">View</span>
                          <ChevronRight size={16} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex justify-between items-center">
                    <span
                      className={`text-sm ${product.available ? "text-green-500" : "text-red-500"}`}
                    >
                      {product.available ? "Available" : "Sold Out"}
                    </span>
                    <div className="h-1 w-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProduct?.name}
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              FIGURE OF ART: BLACK GOLD COLLECTION
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="overflow-hidden rounded-md">
              {selectedProduct && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 mb-4">
                  {selectedProduct?.description}
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                  <span className="text-zinc-400">Limited Edition</span>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Price</h4>
                  <p className="text-2xl font-bold text-amber-500">
                    {selectedProduct?.price}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                  disabled={selectedProduct?.available === false}
                >
                  {selectedProduct?.available ? "Add to Cart" : "Sold Out"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>

          <DialogClose className="absolute right-4 top-4" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LookbookGrid;
