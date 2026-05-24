import Collection from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ProfilePage = () => {
  const mockTickets = [
    {
      _id: "1",
      title: "Global Tech Summit 2026",
      description: "Join the biggest tech innovators for a weekend of learning.",
      createdAt: new Date(),
      imageUrl: "/assets/images/event-1.png",
      startDateTime: new Date("2026-08-15T10:00:00"),
      endDateTime: new Date("2026-08-17T18:00:00"),
      price: "199.00",
      isFree: false,
      url: "https://techsummit.com",
      category: { _id: "cat1", name: "Technology" },
      organizer: { _id: "org1", firstName: "Jane", lastName: "Doe" }
    }
  ]

  const mockOrganizedEvents = [
    {
      _id: "2",
      title: "Sunset Music & Food Festival",
      description: "Enjoy an evening of live music, gourmet food trucks, and great company.",
      createdAt: new Date(),
      imageUrl: "/assets/images/event-2.png",
      startDateTime: new Date("2026-09-05T16:00:00"),
      endDateTime: new Date("2026-09-05T23:00:00"),
      price: "0",
      isFree: true,
      url: "https://sunsetfestival.com",
      category: { _id: "cat2", name: "Festival" },
      organizer: { _id: "org2", firstName: "John", lastName: "Smith" }
    }
  ]

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-center sm:justify-between">
          <h3 className="text-3xl font-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/#events">
              Explore More Events
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 my-8">
        <Collection 
          data={mockTickets}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={1}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 mt-12">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-center sm:justify-between">
          <h3 className="text-3xl font-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/events/create">
              Create New Event
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 my-8">
        <Collection 
          data={mockOrganizedEvents}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={1}
          urlParamName="eventsPage"
          totalPages={1}
        />
      </section>
    </>
  )
}

export default ProfilePage
