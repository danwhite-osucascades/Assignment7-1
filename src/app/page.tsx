'use client';

import { useEffect, useState } from "react";

import { Pokemon } from "@/types/pokemon";

import {
    Box, 
    TableContainer, 
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    FormControl,
    InputLabel,
    MenuItem,
    Select
   } from "@mui/material";

const limit = 20;
const offset = 151;

export default function Home() {

  const [data, setData] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<string[]>(["all"]);
  const [activeType, setActiveType] = useState<number>(0);

  useEffect(()=>{
    fetchPokemon()
    fetch('api/types').then((r)=>r.json()).then((d)=>setTypes([...types, ...d]))
  },[])

  useEffect(()=>{
    fetchPokemon()
  },[activeType])


  function fetchPokemon(){
    if (activeType == 0){
      fetch(`/api/pokemon?limit=${limit}&offset=${offset}`).
      then((r)=>r.json()).
      then((d)=>setData(d))
    }
    else {
      fetch(`/api/pokemon?limit=${limit}&offset=${offset}&type=${types[activeType]}`).
      then((r)=>r.json()).
      then((d)=>setData(d))
    }
  }

  const headers = [
    "ID",
    "Name",
    "Image",
    "Height",
    "Weight",
    "Abilities",
    "Types"
]

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="types-select-label">Types</InputLabel>
        <Select
          labelId="types-select-label"
          id="types-select"
          value={types[activeType]}
          label="Types"
          onChange={(e)=>setActiveType(types.indexOf(e.target.value.toString()))}
        >
        {
          types.map((type, i)=>
            <MenuItem key={i} value={type}>{type}</MenuItem>
          )
        }
        </Select>
      </FormControl>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, i)=>
              <TableCell key={i}>{header}</TableCell>
              )}
              
            </TableRow>
          </TableHead>
          <TableBody>
              {data.map((d: Pokemon, i)=>
                <TableRow key={i}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.name}</TableCell>
                  <TableCell><img src={d.imgUrl} style={{width: 50}}/></TableCell>
                  <TableCell>{d.height / 10}m</TableCell>
                  <TableCell>{d.weight / 10}kg</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.abilities.join(", ")}</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.types.join(", ")}</TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
