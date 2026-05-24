'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import { CldUploadWidget } from 'next-cloudinary'
import { createEvent } from "@/lib/actions/event.actions"
import { useRouter } from "next/navigation"

type EventFormProps = {
  userId: string
  type: "Create" | "Update"
  event?: any
  eventId?: string
}

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const router = useRouter();
  
  const initialValues = event && type === 'Update' 
    ? { ...event, startDateTime: new Date(event.startDateTime), endDateTime: new Date(event.endDateTime) }
    : eventDefaultValues;

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    if (type === 'Create') {
      try {
        const newEvent = await createEvent({
          event: { ...values },
          userId,
          path: '/profile'
        })
        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        
        {/* Title and Category */}
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event title" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Category Dropdown (placeholder) */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Category" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Description and Image Upload */}
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                   <Input placeholder="Description" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="h-[54px] flex items-center bg-gray-50 rounded-full px-4 text-gray-500">
                    <CldUploadWidget 
                      uploadPreset="event_app_uploads"
                      onSuccess={(result: any) => {
                         field.onChange(result.info.secure_url);
                      }}
                    >
                      {({ open }) => (
                         <button type="button" onClick={() => open()} className="w-full text-left font-medium">
                           {field.value ? "Image Uploaded Successfully!" : "Upload Event Image (Cloudinary)"}
                         </button>
                      )}
                    </CldUploadWidget>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event location or Online" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Pricing and Link */}
        <div className="flex flex-col gap-5 md:flex-row">
           <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="number" placeholder="Price ($)" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event Link / URL" {...field} className="bg-gray-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-gray-500 rounded-full px-4 py-3 border-none focus-visible:ring-transparent" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full font-bold text-md mt-4"
        >
          {form.formState.isSubmitting ? 'Submitting...' : `${type} Event`}
        </Button>
      </form>
    </Form>
  )
}

export default EventForm
