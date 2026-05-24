'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'
import Order from '@/lib/database/models/order.model'
import Event from '@/lib/database/models/event.model'

export const createUser = async (user: any) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
  }
}

export const updateUser = async (clerkId: string, user: any) => {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true });
    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
  }
}

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase();
    const userToDelete = await User.findOne({ clerkId })
    if (!userToDelete) throw new Error('User not found')
    
    // Unlink relationships
    await Promise.all([
      Event.updateMany(
        { _id: { $in: userToDelete.events || [] } },
        { $pull: { organizer: userToDelete._id } }
      ),
      Order.updateMany({ _id: { $in: userToDelete.orders || [] } }, { $unset: { buyer: 1 } }),
    ])

    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    console.log(error);
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
  }
}
