import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/v1/documents", {method: "get"});
    if (!response.ok) throw new Error("Failed to fetch documents");
    const documents = await response.json();
    console.log(documents)
    return { documents }
}