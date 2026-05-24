'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../database'
import Event from '../database/models/event.model'
import User from '../database/models/user.model'
import Category from '../database/models/category.model'
import { handleError } from '../utils'

const populateEvent = (query: any) => {
  return query
    .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name' })
}

export async function createEvent({ userId, event, path }: any) {
  try {
    await connectToDatabase()

    const organizer = await User.findOne({ clerkId: userId })
    if (!organizer) throw new Error('Organizer not found')

    const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: organizer._id })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error)
  }
}

export async function getEventById(eventId: string) {
  try {
    await connectToDatabase()

    const event = await populateEvent(Event.findById(eventId))

    if (!event) throw new Error('Event not found')

    return JSON.parse(JSON.stringify(event))
  } catch (error) {
    handleError(error)
  }
}

export async function updateEvent({ userId, event, path }: any) {
  try {
    await connectToDatabase()

    const eventToUpdate = await Event.findById(event._id)
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found')
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedEvent))
  } catch (error) {
    handleError(error)
  }
}

export async function deleteEvent({ eventId, path }: { eventId: string, path: string }) {
  try {
    await connectToDatabase()

    const deletedEvent = await Event.findByIdAndDelete(eventId)
    if (deletedEvent) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}
