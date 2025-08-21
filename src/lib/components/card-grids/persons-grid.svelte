<script lang="ts">
    import Person from "$lib/components/cards/person.svelte";

    let { persons } = $props()

</script>

<div class="overflow-y grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {#each persons as person}
        <Person
            firstName={person.first_name}
            lastName={person.last_name}
            birth={person.birth} 
            death={person.death}
            id={person.id}
            avatar={person.avatar}/>
    {/each}
</div>

