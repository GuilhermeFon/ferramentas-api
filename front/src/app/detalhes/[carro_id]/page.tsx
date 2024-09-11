"use client"

import { useParams } from "next/navigation"

export default function Detalhes() {
    const params = useParams()

    return (
        <h1>Detalhes do Carro: {params.carro_id}</h1>
    )
}