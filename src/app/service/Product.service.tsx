
import axios from "axios"

export const getProducts = async (endPOint:string) => {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/${endPOint}`
  )
  return data
}