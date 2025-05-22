import { Pokemon } from "@/types/pokemon";

const favoriteCache = new Map<number, Pokemon>()

export function setFavoriteInCache(pokemon: Pokemon){
    favoriteCache.set(pokemon.id, pokemon)
}

export function getFavoriteFromCache(id: number) {
    return favoriteCache.get(id)
}

export function deleteFavoriteFromCache(id: number) {
    return favoriteCache.delete(id)
}

export function getFavoriteCache(){
    return Array.from(favoriteCache.values())
}