import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Collection from "@/components/shared/Collection";

export default function Home() {
  const mockEvents = [
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
    },
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
  ];

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper max-w-7xl mx-auto px-5 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="text-lg md:text-xl text-gray-500">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <div className="flex justify-center items-center w-full">
             <Image 
               src="/assets/images/hero.png"
               alt="Hero"
               width={1000}
               height={1000}
               className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-2xl shadow-xl"
             />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper max-w-7xl mx-auto px-5 my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="text-3xl font-bold">Trust by <br /> Thousands of Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="w-full bg-gray-50 h-14 rounded-full flex items-center px-4 text-gray-400 border shadow-sm">Search placeholder</div>
          <div className="w-full md:w-56 bg-gray-50 h-14 rounded-full flex items-center px-4 text-gray-400 border shadow-sm">Filter placeholder</div>
        </div>

        <Collection 
          data={mockEvents}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={1}
        />
      </section>
    </>
  );
}
