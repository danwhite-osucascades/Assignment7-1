import { NextRequest } from "next/server"

import { setFavoriteInCache, getFavoriteCache, deleteFavoriteFromCache } from "@/services/favoriteCache"

export async function POST(request: NextRequest){
 const data = await request.json()
 if (!data || !data.pokemon){
    return Response.json({error: "No Pokemon in request"})
 }

 setFavoriteInCache(data.pokemon)

 return Response.json({success: true, pokemon: getFavoriteCache()})
}

export async function GET(){
    return Response.json({pokemon: getFavoriteCache()}) 
}

export async function DELETE(request: NextRequest){
    const data = await request.json()
     if (!data || !data.id){
        return Response.json({error: "No id in request"})
     }
    return Response.json({success: deleteFavoriteFromCache(data.id), pokemon: getFavoriteCache()})
 }