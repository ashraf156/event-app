import { IEvent } from '@/lib/database/models/event.model'
import Card from './Card'

type CollectionProps = {
  data: any[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit?: number,
  page?: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[200px] w-full gap-3 rounded-[14px] bg-gray-50 py-28 text-center">
          <h3 className="text-xl font-bold md:text-2xl">{emptyTitle}</h3>
          <p className="text-sm text-gray-500">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  )
}

export default Collection
