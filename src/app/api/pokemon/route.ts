import { type NextRequest } from 'next/server'
import { Pokemon } from '@/types/pokemon'

import {fetchSomePokemon} from "@/services/pokemonServices"
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') ?? "10")
  const offset = parseInt(searchParams.get('offset') ?? "0")
  const type = searchParams.get('type')
  let data = await fetchSomePokemon(limit, offset)
  console.log(type)
  if (type != null){
    data = data.filter((pokemon: Pokemon)=>pokemon.types.includes(type))
  }
  return Response.json(data)
}

export async function POST(request: NextRequest){
 const body = await request.json()
 console.log(body)
 return Response.json({response: "POST REQUEST!!! YAY!"})
}
