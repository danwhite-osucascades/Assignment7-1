import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";


const limit = 20;
const offset = 151;

export default function TypeSelect(props: {setData: Function}){

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
          then((d)=>props.setData(d))
        }
        else {
          fetch(`/api/pokemon?limit=${limit}&offset=${offset}&type=${types[activeType]}`).
          then((r)=>r.json()).
          then((d)=>props.setData(d))
        }
      }

    return (
        <FormControl fullWidth>
            <InputLabel id="types-select-label">Types</InputLabel>
            <Select
            sx={{textTransform: "capitalize"}}
            labelId="types-select-label"
            id="types-select"
            value={types[activeType]}
            label="Types"
            onChange={(e)=>setActiveType(types.indexOf(e.target.value.toString()))}
            >
            {
            types.map((type, i)=>
                <MenuItem key={i} value={type} sx={{textTransform: "capitalize"}}>{type}</MenuItem>
            )
            }
            </Select>
        </FormControl>
    )
}