import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link'

type CardProps = {
  event: IEvent
  hidePrice?: boolean
  hasOrderLink?: boolean
}

const Card = ({ event, hidePrice }: CardProps) => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link 
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-100 bg-cover bg-center text-gray-500"
      />

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"> 
        <div className="flex gap-2">
          {!hidePrice && <span className="font-semibold text-sm w-min rounded-full bg-green-100 px-4 py-1 text-green-700">
            {event.isFree ? 'FREE' : `$${event.price}`}
          </span>}
          <p className="font-semibold text-sm w-min rounded-full bg-gray-500/10 px-4 py-1 text-gray-500 line-clamp-1 whitespace-nowrap">
            {event.category.name}
          </p>
        </div>

        <p className="text-[16px] font-medium text-gray-500">
          {formatDateTime(event.startDateTime)}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="text-[20px] font-bold line-clamp-2 flex-1 text-black hover:text-primary transition-colors">{event.title}</p>
        </Link>

        <div className="flex-between w-full mt-auto">
          <p className="text-[14px] font-medium text-gray-600">
            By {event.organizer.firstName} {event.organizer.lastName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
