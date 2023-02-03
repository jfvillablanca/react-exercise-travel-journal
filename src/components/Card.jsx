import MapPin from "../assets/map-pin.svg";
import MapIcon from "../assets/map.svg";

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card--image'>
                <img src={props.imageUrl} alt='{props.title}' />
            </div>
            <div className='card--info'>
                <div>
                    <div className='card--location'>
                        <img src={MapPin} alt='' />
                        <h3>{props.location}</h3>
                    </div>
                    <div className='card--google-maps'>
                        <img src={MapIcon} alt='' />
                        <a href='props.googleMapsUrl'>View on Google Maps</a>
                    </div>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <p className='card--dates'>
                    {props.startDate} - {props.endDate}
                </p>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    );
}
