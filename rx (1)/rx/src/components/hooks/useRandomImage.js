export const useRandomImage = () => {
    const randomImage = () => {
        return "https://picsum.photos/200?random=" + Math.random(6, 1000);
    }

    return{
        randomImage
    }
}