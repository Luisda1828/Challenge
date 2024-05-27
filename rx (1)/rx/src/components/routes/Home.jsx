import { Header } from "../ui/Header.jsx";
import { Recommended } from "../activity/Recommended.jsx";
import { Upcoming } from "../activity/Upcoming.jsx";

export function Home() {

    const events = [
        { "id":1, "title":"UI/UX", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"},
        { "id": 2, "title": "React JS", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"},
        { "id":3, "title": "Webflow", "description": "20+ events", "image": "https://images.squarespace-cdn.com/content/v1/60794dbc8615125d3ad57026/adf94af6-7aab-4503-9569-527b9faec977/react1logo.png"}
    ]

    return (
        <>
            <Header />
            <Recommended items={events} />
            <Upcoming />
        </>
    )
}