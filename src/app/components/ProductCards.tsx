interface ProductCardsProps {
  cardImage: string;
  cardText?: string;
}

export default function ProductCards({ cardImage, cardText }: ProductCardsProps) {

  if (!cardText) {
    cardText = 'The Best Clothes One Piece For Woman';
  }
  return (
    <div className="w-72 overflow-hidden rounded-md bg-white shadow-[0_0_0_3px_#000000,3px_3px_0px_rgba(0,0,0,0.8)]">
      {/* Imagen principal */}
      <div className="w-full border-b-3 border-black">
        <img src={ cardImage } alt="Pink one piece dress" className="w-full h-auto object-cover" />
      </div>

      {/* Título del producto */}
      <div className="p-4 border-b-2 border-black">
        <h3 className="text-lg font-semibold text-black leading-tight">{ cardText }</h3>
      </div>
    </div>
  )
}
