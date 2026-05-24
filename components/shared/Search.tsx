"use client"

import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'

const Search = ({ placeholder = 'Search title...' }: { placeholder?: string }) => {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = ''
      if (query) {
        newUrl = qs.stringifyUrl({
          url: window.location.pathname,
          query: { ...qs.parse(searchParams.toString()), query }
        }, { skipNull: true })
      } else {
        const params = qs.parse(searchParams.toString())
        delete params.query
        newUrl = qs.stringifyUrl({
          url: window.location.pathname,
          query: params
        }, { skipNull: true })
      }

      router.push(newUrl, { scroll: false })
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query, searchParams, router])

  return (
    <div className="flex min-h-[54px] w-full items-center overflow-hidden rounded-full bg-gray-50 px-4 py-2 dark:bg-gray-800">
      <Input 
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-transparent outline-offset-0 placeholder:text-gray-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default Search
