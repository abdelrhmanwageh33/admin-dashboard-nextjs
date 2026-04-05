import axios from "axios";

export const addProduct=async(productData:any)=>{
  const { data } = await axios.post('https://api.escuelajs.co/api/v1/products', productData);
  return data

}
export const deleteProduct=async(id:number)=>{
  const { data } = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
  return data

}