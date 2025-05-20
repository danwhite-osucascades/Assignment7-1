'use client';

import { useState } from "react";
import { Pokemon } from "@/types/pokemon";
import { Box } from "@mui/material";

import TypeSelect from "./components/typeSelect";
import PokemonTable from "./components/pokemonTable";

export default function Home() {


  return (
    <Box>
      <TypeSelect />
      <PokemonTable />
    </Box>
  );
}
