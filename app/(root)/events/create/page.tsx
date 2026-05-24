import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server"

const CreateEvent = async () => {
  const { sessionClaims } = await auth()
  
  const userId = sessionClaims?.userId as string

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-5">
          <h3 className="text-center sm:text-left text-3xl font-bold">Create Event</h3>
        </div>
      </section>

      <div className="my-8 max-w-7xl mx-auto px-5">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent
