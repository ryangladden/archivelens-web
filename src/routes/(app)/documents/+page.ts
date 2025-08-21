import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/v1/documents", {method: "get"});
    if (!response.ok) throw new Error("Failed to fetch documents");
    const documentsPage = await response.json();
    return { documentsPage }
}