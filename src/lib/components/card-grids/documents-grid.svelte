<script lang="ts">
    import Document from "$lib/components/cards/document.svelte";


    let { documents } = $props()

</script>

<div class="flex-1 overflow-auto grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    {#each documents as document}
        <Document
            id={document.id}
            title={document.title}
            date={document.date}
            type={document.type}
            author={document.author}
            persons={document.persons}
        />
    {/each}
</div>