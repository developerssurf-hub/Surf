import { motion } from "framer-motion"
import Logobg from "../../components/ui/logobg"

export interface Product {
  id: number;
  image: string;
  text: string;
  Description: string;
  category: string[];
  imgsmolde: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function FilterProductCard({ product, onClick }: ProductCardProps) {

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(product)}
      className="cursor-pointer"
    >
      <div className="relative  w-full overflow-hidden">
        <Logobg bgimage={product.image || "/placeholder.svg"} width={"100%"} />
      </div>
      <div >
        <h3 className="font-semibold text-lg">{product.text}</h3>
        <p className="text-sm my-2 text-gray-500">{product.Description}</p>
        <div className="flex items-center gap-2">
          {product.category.map((category) => (
            <span key={category} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full capitalize">
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
