import { useFetchData } from "../hooks/useFetchData.js";
import { useRandomImage } from "../hooks/useRandomImage.js";

import { Events } from "./Events.jsx";
import { CreateEvent } from "./CreateEvent.jsx";
import { Loading } from "../ui/Loading.jsx";

import "../../index.css";

export function Upcoming() {
  
  const evenets = useFetchData();
  const { randomImage } = useRandomImage();

  const createEvents = (items) => {
    return items.map( item => <Events 
        key={item.id}
        title={item.company.catchPhrase}
        speaker={item.firstname+" "+item.lastname}
        image={randomImage()}

        /* title={item.title}
        speaker={item.speaker} */
        />)
  }



  return (
    <>
        <h2 className="font-bold text-2xl">UPCOMING</h2>
        <div className="grid gap-4 my-5">
            { createEvents(evenets.data) }
        </div>
        
        <CreateEvent addEvent={evenets.createNewEvents} />
    </>
  );
}
