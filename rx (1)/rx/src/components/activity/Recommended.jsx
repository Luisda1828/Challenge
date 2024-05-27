import "../../index.css";

import { Card } from "../ui/Card.jsx";

export function Recommended({items}) {
  
  return (
    <>
        <h3 className="font-bold text-lg">RECOMMENDED</h3>
        <div className="grid grid-cols-3 gap-3 my-5">
          { items.map( item => <Card key={item.id} title={item.title} description={item.description} image={item.image} />)}
        </div>
    </>
    
  );
}
