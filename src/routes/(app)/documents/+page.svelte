<script lang="ts">
    import DocumentCard from "$lib/components/cards/DocumentCard.svelte"
    let { data } = $props()
    console.log(data)
</script>
 
<div class="grid grid-cols-3">
    {#each data.documents.documents as document}
    <DocumentCard title={document.title} date={document.date} type={document.type} author={document.author}/>
    {/each}
</div>