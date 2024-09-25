import { SapatoI } from "@/utils/types/sapatos";
import Link from "next/link";

export function ItemSapatos({data}: {data: SapatoI}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" 
        src={data.foto} 
        alt={`Imagem do ${data.modelo}`} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.marca.nome} {data.modelo}
        </h5>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          R$ {Number(data.preco).toLocaleString("pt-br",
            //{maximumFractionDigits: 2}
          )}
        </p>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 truncate">
          {data.descricao}
        </p>
      </div>
    </div>
  )
}