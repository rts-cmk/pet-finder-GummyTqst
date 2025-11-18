import { useLoaderData } from "react-router"
import DogCard from "../Components/DogCard/DogCard";

export default function Home() {
    const pets = useLoaderData()

    console.log(pets);

    return (
        <div className="dog-list-container" style={{ paddingBottom: '100px' }}>
            
            {/* Check if the array is populated */}
            {pets && pets.length > 0 ? (
                pets.map(dog => (
                <DogCard 
                    key={dog.id} 
                    dog={dog} 
                />
                ))
            ) : (
                // Fallback message if the array is empty
                <p>No pets are available for adoption right now.</p>
            )}
        </div>
    )
}