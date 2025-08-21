import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/v1/persons", {method: "get"});
    if (!response.ok) throw new Error("Failed to fetch persons");
    const personsPage = await response.json();
    return { personsPage }
}