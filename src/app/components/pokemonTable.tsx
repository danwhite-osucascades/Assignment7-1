import { Pokemon } from "@/types/pokemon";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import { usePokemonContext } from "@/app/contexts/pokemonContext";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PokemonTable(props: {data: Pokemon[]}){

    const { favoritePokemonArray, toggleFavoritePokemon } = usePokemonContext();

    const headers = [
        "ID",
        "Name",
        "Image",
        "Height",
        "Weight",
        "Abilities",
        "Types",
        "Favorite"
    ]
    // TODO: Add a column for favorite and use a heart icon
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
              {props.data.map((d: Pokemon, i)=>
                <TableRow key={i}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.name}</TableCell>
                  <TableCell><img src={d.imgUrl} style={{width: 50}}/></TableCell>
                  <TableCell>{d.height / 10}m</TableCell>
                  <TableCell>{d.weight / 10}kg</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.abilities.join(", ")}</TableCell>
                  <TableCell sx={{textTransform: "capitalize"}}>{d.types.join(", ")}</TableCell>
                  <TableCell>
                    {
                      favoritePokemonArray.find((obj)=>obj.id == d.id) ?
                      <FavoriteIcon onClick={()=>{toggleFavoritePokemon(d)}}style={{color: "red"}}/> :
                      <FavoriteBorderIcon onClick={()=>{toggleFavoritePokemon(d)}}style={{color: "red"}}/>
                    }
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
    )
}