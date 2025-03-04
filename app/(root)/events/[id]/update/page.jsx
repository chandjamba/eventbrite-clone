import EventForm from "../../../../../components/shared/EventForm.jsx"
import { getEventById } from "../../../../../lib/actions/event.actions.js"
import { auth } from "@clerk/nextjs";


const UpdateEvent = async ({ params: { id } }) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId;
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </>
  )
}

export default UpdateEvent