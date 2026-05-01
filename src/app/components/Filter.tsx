import { motion } from "framer-motion"

interface FilterProps {
  categoriaSeleccionada: string
  setCategoriaSeleccionada: (categoria: string) => void
}

export function Filter({ categoriaSeleccionada, setCategoriaSeleccionada }: FilterProps) {
  const categorias = ["todos", "buzos", "camperas", "remeras", "chombas"]

  return (
    <div className="">
      <div className="flex flex-wrap gap-2 relative py-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className="relative flex items-center px-0 py-0 rounded-[25px] text-sm font-medium"
          >
            {categoriaSeleccionada === categoria && (
              <motion.div
                layoutId="activePill"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-surf-red rounded-[25px]"
              />
            )}
            <span
              className={`relative z-10 px-4 py-3 capitalize transition-colors ${categoriaSeleccionada === categoria
                ? "text-white"
                : "text-gray-700 hover:bg-gray-100 rounded-[25px]"
                }`}
            >
              {categoria}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
