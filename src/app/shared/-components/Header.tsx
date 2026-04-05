"use client"
import { useForm } from "react-hook-form"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addProduct } from "@/app/service/addProductService"

export default function ProductsHeader() {
  const { register, handleSubmit, reset } = useForm()
  const queryClient = useQueryClient()

  // Mutation
  const mutation = useMutation<any, Error, any>({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      reset()
    }
  })

  // onSubmit تستخدم mutation فقط
  const onSubmit = (data: any) => {
    const payload = {
      title: data.title,
      price: Number(data.price),
      description: data.description || "No description",
      images: ["https://i.imgur.com/QkIa5tT.jpeg"], // صورة افتراضية
      categoryId: Number(data.categoryId) || 1,      // رقم افتراضي صالح
    }
    mutation.mutate(payload)
    console.log("Payload sent:", payload) // تشوف القيم قبل الإرسال
  }

  return (
    <section className="space-y-4 w-full">
      {/* Top Row */}
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="text-gray-500 text-sm">
            Browse and manage your product catalog.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">Add product</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill the form below to add a new product.
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form className="space-y-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
              <Input {...register("title")} placeholder="Title" required />
              <Input {...register("price")} type="number" placeholder="Price" required />
              <Input {...register("description")} placeholder="Description" />
              <Input {...register("categoryId")} placeholder="Category ID" />
              <div className="flex justify-end gap-2 mt-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Add
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <Button variant="secondary">All</Button>
        <Button variant="ghost">Active</Button>
        <Button variant="ghost">Draft</Button>
        <Button variant="ghost">Archived</Button>
      </div>

      {/* Search + Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 w-full max-w-md">
          <Input placeholder="Search products..." />
          <Button variant="outline">Category</Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Columns</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
    </section>
  )
}