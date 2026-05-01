import { ArrowUpRight } from 'lucide-react';

interface Product {
  id: number;
  image: string;
  text?: string;
  category?: string;
}

interface ProductCardsProps {
  product: Product
}


export default function RoundedCards({ product }: ProductCardsProps) {

  if (!product.text) {
    product.text = 'The Best Clothes One Piece For Woman';
  }

  return (
    <div className="w-72 overflow-hidden rounded-md rounded-t-full bg-white shadow-[0_0_0_3px_#000000,3px_3px_0px_rgba(0,0,0,0.8)]">
      {/* Imagen principal */}
      <div className="w-full border-b-3 border-black">
        <img src={ product.image } alt="Pink one piece dress" className="w-full h-auto object-cover" />
      </div>

      {/* Título del producto */}
      <div className="flex border-b-2 border-black">
        <h3 className="flex justify-centertext-lg font-semibold text-black leading-tight p-3 w-3/4">{ product.text }</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full capitalize hidden">
            { product.category }
          </span>
        </div>
        <a className="border-l-3 border-black bg-amber-300 hover:bg-amber-400 transition-colors flex items-center justify-center w-1/4 cursor-pointer">
          <ArrowUpRight />
        </a>
      </div>
    </div>
  )
}
