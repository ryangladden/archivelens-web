<script lang="ts">
    import PersonsGrid from "$lib/components/card-grids/persons-grid.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    const { data } = $props()
</script>
    <div>
        <h1 class="font-semibold text-3xl p-4">Persons</h1>
        <Separator orientation="horizontal" />
        <div class="h-10"></div>
        <PersonsGrid persons={data.personsPage.persons} />
    </div>


