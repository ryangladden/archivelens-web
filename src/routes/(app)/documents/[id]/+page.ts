import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
    console.log(params)
    const response = await fetch(`/api/v1/documents/${params.id}`, {method: "get"});
    if (!response.ok) throw new Error("Failed to fetch documents");
    return { document: await response.json() }
}