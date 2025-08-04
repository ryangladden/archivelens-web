<script lang="ts">
    import DocumentGrid from "$lib/components/document-list/DocumentGrid.svelte";
    let { data } = $props()
</script>

<button>button</button>
<DocumentGrid documents={data.documents.documents} />