const api_url = 'http://localhost:4000/dogs';

export async function petDetailsLoader({ params }) {
    const id = params.petId;
    const url = `${api_url}/${id}`;

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Response('Pet not found ', { status: 404 });
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Loader Error", error)
        throw new Response("Failed to load pet details.", { status: 500 })
    }
}