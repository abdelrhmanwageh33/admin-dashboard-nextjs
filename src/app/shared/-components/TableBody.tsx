import { deleteProduct } from "@/app/service/addProductService";
import { Product } from "@/lib/type/Product.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProductsTableBody({ products }: { products: Product }) {
    const queryClient = useQueryClient()
  const mutation = useMutation<any, Error, any>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
     
    }
  })
 
  const handleDelete = (id?: number) => {
    if (!id) return
    mutation.mutate(id)
  }
  return (
    <tbody className="w-full">
      
        <tr key={products?.id} className="border-b hover:bg-gray-50">

          {/* Product */}
          <td className="p-3 flex items-center gap-3">
            <img
              src={products.images?.[0]}
              className="w-10 h-10 rounded object-cover"
            />
            <div>
              <p className="font-medium">{products.title}</p>
              <p className="text-xs text-gray-500">
                products description...
              </p>
            </div>
          </td>

          {/* باقي الأعمدة */}
          <td className="p-3">Category</td>

          <td className="p-3">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
              Active
            </span>
          </td>

          <td className="p-3">100</td>

          <td className="p-3 font-medium">
            ${products?.price}
          </td>

          <td className="p-3">2026</td>

          <td className="p-3 cursor-pointer" onClick={()=>handleDelete(products?.id)}>delete</td>

        </tr>
    
    </tbody>
  )
}