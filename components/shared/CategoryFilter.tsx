"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getAllCategories } from "@/lib/actions/category.actions"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import qs from "query-string"

const CategoryFilter = () => {
  const [categories, setCategories] = useState<any[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories()
      if (categoryList) setCategories(categoryList)
    }

    getCategories()
  }, [])

  const onSelectCategory = (category: string) => {
    let newUrl = ''
    if (category && category !== 'All') {
      newUrl = qs.stringifyUrl({
        url: window.location.pathname,
        query: { ...qs.parse(searchParams.toString()), category }
      }, { skipNull: true })
    } else {
      const params = qs.parse(searchParams.toString())
      delete params.category
      newUrl = qs.stringifyUrl({
        url: window.location.pathname,
        query: params
      }, { skipNull: true })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className="w-full sm:w-[250px] bg-gray-50 dark:bg-gray-800 h-[54px] placeholder:text-gray-500 rounded-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>
        {categories.map((category) => (
          <SelectItem value={category.name} key={category._id} className="select-item p-regular-14">
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategoryFilter
