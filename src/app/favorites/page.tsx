'use client'

import PokemonTable from "@/app/components/pokemonTable"
import { usePokemonContext } from "../contexts/pokemonContext"

export default function Home() {
    const { favoritePokemonArray } = usePokemonContext()
    return (
        <div>
            <PokemonTable data={favoritePokemonArray} />
        </div>
    )
}