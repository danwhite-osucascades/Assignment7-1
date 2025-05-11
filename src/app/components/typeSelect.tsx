import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";



export default function TypeSelect(props: {setData: Function}){

    const [types, setTypes] = useState<string[]>(["all"]);
    const [limit, setLimit] = useState<number>(20);
    const [offset, setOffset] = useState<number>(0);
    const [activeType, setActiveType] = useState<number>(0);

    useEffect(()=>{
        fetchPokemon()
        fetch('api/types').then((r)=>r.json()).then((d)=>setTypes([...types, ...d]))
    },[])
    
    useEffect(()=>{
        fetchPokemon()
    },[activeType, limit, offset])
    

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
        <Box sx={{display: "flex", flexDirection: "row", width: "100%", m:2}}>
            <TextField
                id="limit"
                label="Limit"
                type="number"
                variant="outlined"
                value={limit}
                onChange={(e)=>setLimit(parseInt(e.target.value))}
                sx={{width: "100%", m: 2}} />
            <TextField
                id="offset"
                label="Offset"
                type="number"
                variant="outlined"
                value={offset}
                onChange={(e)=>setOffset(parseInt(e.target.value))}
                sx={{width: "100%", m: 2}} />        
            <FormControl fullWidth sx={{m: 2}}>
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
        </Box>
    )
}