<script lang="ts">
    import DocumentsGrid from "$lib/components/card-grids/documents-grid.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    const { data } = $props()
</script>

<div>
    <h1 class="font-semibold text-3xl p-4">Documents</h1>
    <Separator orientation="horizontal" />
    <div class="h-10"></div>
    <DocumentsGrid documents={data.documentsPage.documents} />
</div>