const api_url = 'http://localhost:4000/dogs';


export async function petsLoader() {
    try {
        const response = await fetch(api_url);

        if (!response.ok) {
            throw new Error('Failed to fetch pets data')
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Loader Error", error)
        throw new Response("Failed to load dogs data.", { status: 500 })
    }
}