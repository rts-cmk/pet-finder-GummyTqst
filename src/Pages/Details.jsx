import { useLoaderData, useNavigate } from "react-router"

export default function Details( dog ) {

    const pet = useLoaderData()
    const { id, breed, location, short_description, image } = dog;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    if (!pet) {
        return <p>Pet not found</p>;
    }

    return (
        <>
            <h1>Details Page</h1>

            <button onClick={handleBack}>
                Go back
            </button>
        </>
    )
}