<script lang="ts">
    import DocumentCard from "../cards/DocumentCard.svelte";
    let { documents } = $props()
</script>

<div class="flex-1 overflow-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each documents as document}
    <DocumentCard id={document.id} title={document.title} date={document.date} type={document.type} author={document.author}/>
    {/each}
</div>