<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { Plus } from "@lucide/svelte";
    import AddPerson from "./add-associated-person.svelte";

    type NewPerson = {
        id: number,
        personId: string,
        role: string
    }

    let { listed = $bindable() } = $props()
    let count = $state(0)
    let usedIds: string[] = $derived(listed.map((person: NewPerson) => person.personId))

    const updateContributors = () => {
        let result = {
            author: '',
            coauthors: [] as string[],
            mentions: [] as string[],
            recipient: ''
        }

        for (const person of listed) {
            if (!person.personId) { continue }
            switch (person.role) {
                case 'author': result.author = person.personId; break;
                case 'recipient': result.recipient = person.personId; break;
                case 'mentions': result.mentions.push(person.personId); break;
                case 'coauthor': result.coauthors.push(person.personId); break;
            }
        }
        return result
    }

    const addPerson = () => {
        listed = [
            ...listed,
            {id: count++, personId: '', role: ''}
        ]
    }

    const remove = (id: number) => {
        listed = listed.filter((person: NewPerson) => person.id !== id)
    }

</script>

<div class="col-span-3">
    <Label class="pt-2">Associated persons</Label>
    <Separator class="mt-3" orientation="horizontal" />
    {#each listed as person, index}
        <AddPerson
            id={person.id}
            bind:personId={person.personId}
            bind:role={person.role}
            {remove}
            {listed}
            {usedIds}
            />
    {/each}
    <Button
        variant="ghost"
        class="my-2"
        onclick={addPerson}>
        <span>Add person</span>
        <Plus />
    </Button>
    <Separator class="mt-3" orientation="horizontal" />
</div>