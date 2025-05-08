
import {fetchTypes} from "@/services/pokemonServices"
export async function GET() {
  return Response.json(await fetchTypes())
}
