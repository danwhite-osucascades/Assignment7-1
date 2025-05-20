import { Pokemon } from "@/types/pokemon";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import { usePokemonContext } from "@/app/contexts/pokemonContext";

export default function PokemonTable(){

    const { pokemonArray } = usePokemonContext();

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
              {pokemonArray.map((d: Pokemon, i)=>
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
    )
}