'use client';

import { Box } from "@mui/material";

import TypeSelect from "./components/typeSelect";
import PokemonTable from "./components/pokemonTable";

import { usePokemonContext } from "./contexts/pokemonContext";

export default function Home() {

  const { pokemonArray } = usePokemonContext();

  return (
    <Box>
      <TypeSelect />
      <PokemonTable data={pokemonArray} />
    </Box>
  );
}
