"use client"

import { useParams } from "next/navigation"

export default function Detalhes() {
    const params = useParams()

    return (
        <h1>Descrição do Sapato: {params.sapato_id}</h1>
    )
}