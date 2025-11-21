import { useLoaderData, useNavigate } from "react-router"
import BackgroundSvg from "../Assets/back.svg"
import "../Styles/Details.sass"

export default function Details( dog ) {

    const petDetails = useLoaderData()

    // console.log(petDetails)
    // const { id, breed, location, short_description, image } = dog;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    if (!petDetails) {
        return <p>Pet not found</p>;
    }

    return (
        <div className="details">
            
            {/* 1. The Header Area (Curved SVG Background) */}
            <div className="details__header">
                <img src={BackgroundSvg} alt="" className="details__svg-background" />
                
                {/* The main image, positioned to float over the content card */}
                <img className="details__image" src={petDetails.image} alt={`A ${petDetails.breed}`} />
            </div>

            {/* 2. The Content Card (White, overlaps the curve) */}
            <div className="details__content">
                <div className="details__info">
                    <h1 className="details__title">
                        {petDetails.breed}
                    </h1>
                    <p className="details__location">
                        {petDetails.location}
                    </p>
                </div>
                
                <p className="details__description">
                    {petDetails.short_description}
                </p>

                <button 
                    className="details__button"
                    onClick={handleBack}
                >
                    Go back
                </button>
            </div>
        </div>
    )
}