'use client'
import { InputPesquisa } from "@/components/InputPesquisa"
import { ItemSapatos } from "@/components/ItemSapatos";
import { SapatoI } from "@/utils/types/sapatos";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner'

export default function Home() {
  const [sapatos, setSapatos] = useState<SapatoI[]>([])

  useEffect(() =>{
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/sapatos`)
      const dados = await response.json()
      //console.log(dados)
      setSapatos(dados)
    }
    buscaDados()
  }, [])

  const listaSapatos = sapatos.map( sapato => (
    <ItemSapatos data={sapato} key={sapato.id} />
  ))

  return (
    <main>
      <InputPesquisa setSapatos={setSapatos} />

      <section className="max-w-screen-xl mx-auto">
        <h1 className="mb-5 mt-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Tênis <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">em destaque</span></h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {listaSapatos}
        </div>

      </section>
      <Toaster position="top-right" richColors />

    </main>
  );
}
