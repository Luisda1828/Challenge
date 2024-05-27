//import library to set required props
import PropTypes from 'prop-types'

import "../../index.css";

export function Card({title, description, image}){
    return(
        <div className="rounded-lg shadow-lg">
            <img className="rounded-t-lg" src={`${image}`} alt="event" />
            <div className="p-4">
                <h4 className="font-bold text-sm">{title}</h4>
                <p className="font-normal text-xs text-gray-800">{description}</p>
            </div>
        </div>
    )
}

//set required props
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

//set default values for props
Card.defaultProps = {
    title: 'Card title',
    description: 'Card description',
    image: 'Card image'
}