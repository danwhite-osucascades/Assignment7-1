'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

import { Pokemon } from '@/types/pokemon';
import { PokeFilter } from '@/types/pokeFilter';

import { useEffect } from 'react';

type PokemonContextType = {
    pokemonArray: Pokemon[];
    favoritePokemonArray: Pokemon[];
    types: string[];
    toggleFavoritePokemon: (pokemon: Pokemon) => void;
    setPokeFilter: (pokeFilter: PokeFilter) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [pokemonArray, setPokemonArray] = useState<Pokemon[]>([])
    const [favoritePokemonArray, setFavoritePokemonArray] = useState<Pokemon[]>([])
    const [pokeFilter, setPokeFilter] = useState<PokeFilter>(
        {
            activeType: 0,
            limit: 20,
            offset: 0,
            types: ['all']
        }
    )

    useEffect(()=>{
        fetchPokemon()
        fetch('api/types').then((r) => r.json()).then((d: string[]) => setPokeFilter((prev) => ({ ...prev, types: [...prev.types, ...d] }))) 
        fetch('api/favorite').then((r) => r.json()).then((data) => setFavoritePokemonArray(data.pokemon))  
    },[])

    useEffect(()=>{
        fetchPokemon()
    }, [pokeFilter])

    useEffect(()=>{
        console.log(favoritePokemonArray)
    }, [favoritePokemonArray])

    function toggleFavoritePokemon(pokemon: Pokemon){
        if (!favoritePokemonArray.find((obj: Pokemon)=>obj.id == pokemon.id)){
            fetch("api/favorite", {
                method: "POST",
                body: JSON.stringify({pokemon: pokemon})
            })
            .then((r)=>r.json())
            .then((data)=>setFavoritePokemonArray(data.pokemon))
        }
        else {
            fetch("api/favorite", {
                method: "DELETE",
                body: JSON.stringify({id: pokemon.id})
            })
            .then((r)=>r.json())
            .then((data)=>setFavoritePokemonArray(data.pokemon))
        }
    }
    
    function fetchPokemon(){
        if (pokeFilter.activeType == 0){
          fetch(`/api/pokemon?limit=${pokeFilter.limit}&offset=${pokeFilter.offset}`).
          then((r)=>r.json()).
          then((d)=>setPokemonArray(d))
        }
        else {
          fetch(`/api/pokemon?limit=${pokeFilter.limit}&offset=${pokeFilter.offset}&type=${pokeFilter.types[pokeFilter.activeType]}`).
          then((r)=>r.json()).
          then((d)=>setPokemonArray(d))
        }
      }

    return (
        <PokemonContext.Provider value={{ 
            pokemonArray: pokemonArray,
            favoritePokemonArray: favoritePokemonArray, 
            types: pokeFilter.types, 
            setPokeFilter: setPokeFilter,
            toggleFavoritePokemon: toggleFavoritePokemon
        }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemon must be used within a PokemonProvider');
    }
    return context;
};