import { Link } from 'react-router-dom';
import StarImg from "../assets/star.jpg";
import LocationImg from "../assets/location.png";

export default function Card(props) {

    let badgeText;

    if (props.sells >= 200) {
        badgeText = "BESTSELLER";
    }

    return (
        <div className="card">
            <div className="card-img-container">
                <img src={`/src/assets/${props.coverImg}`} className="card-img" alt={props.title} />
                {badgeText && <div className="card-badge">{badgeText}</div>}
            </div>
            
            <div className="card-content">
                <Link to={`/${props.url}`}>
                    <h2>{props.title}</h2>
                </Link>
                <div className="card-top">
                    <div className="card-rating">
                        <img src={StarImg} className="star-img" alt="Star" />
                        <h5>{props.rating}</h5>
                    </div>
                    <div className="card-location">
                        <img src={LocationImg} className="location-img" alt="Location" />
                        <h5>{props.country}</h5>
                    </div>
                </div>
                <p>{props.description}</p>
                <div className="card-bottom">
                    <h4>From <span>{props.price}</span>$ per person</h4>
                    <div className='card-btn-container'>
                        <Link to={`/${props.url}`}>
                            <button className="card-btn">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
