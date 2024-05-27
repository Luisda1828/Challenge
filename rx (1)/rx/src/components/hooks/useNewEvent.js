import { useRandomImage } from "./useRandomImage";
export const useNewEvent = () => {
    
    const randomImage = useRandomImage();
    
    const newEvent = { 
        "id":Math.random(6, 1000),
        "title": "Beginner's guide to React",
        "firstname": "Gary",
        "lastname": "Ganks",
        "image": randomImage
    };

    return{
        newEvent
    }
}