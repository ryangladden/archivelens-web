import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
    const response = await fetch(`/api/v1/documents/${params.id}`, {method: "get"});
    if (!response.ok) throw new Error("Failed to fetch documents");
    const document = await response.json();
    return { document }
}