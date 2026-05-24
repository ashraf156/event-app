import { getEventById } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils'
import Image from 'next/image';

type EventDetailsProps = {
  params: Promise<{ id: string }>
}

const EventDetails = async ({ params }: EventDetailsProps) => {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) return <div className="wrapper mt-10 text-center text-xl font-semibold">Event not found</div>

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image 
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold md:text-4xl">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="font-bold text-xl rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </p>
                  <p className="font-medium text-lg rounded-full bg-gray-500/10 px-5 py-2 text-gray-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="text-lg font-medium text-gray-500 mt-2 sm:mt-0 sm:ml-4">
                  by{' '}
                  <span className="text-primary">{event.organizer.firstName} {event.organizer.lastName}</span>
                </p>
              </div>
            </div>

            {/* Checkout Button Placeholder */}
            <div className="w-full max-w-[200px]">
               <div className="bg-primary text-white text-center rounded-full py-3 font-semibold cursor-not-allowed opacity-80 shadow-md">
                 Buy Ticket
               </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <div className="flex flex-col text-lg font-medium text-gray-600">
                  <p>
                    <span className="font-bold text-black">Starts:</span> {formatDateTime(event.startDateTime)}
                  </p>
                  <p>
                    <span className="font-bold text-black">Ends:</span> {formatDateTime(event.endDateTime)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-lg font-medium text-gray-600"><span className="font-bold text-black">Location:</span> {event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold text-gray-600">What You'll Learn:</p>
              <p className="text-lg font-medium leading-relaxed">{event.description}</p>
              {event.url && (
                <a href={event.url} target="_blank" className="text-primary underline mt-2 truncate">
                  {event.url}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventDetails
