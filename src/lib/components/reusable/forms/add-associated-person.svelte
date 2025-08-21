<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import { CheckIcon, ChevronsUpDownIcon, ChevronDown, X } from "@lucide/svelte";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { tick } from "svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import * as Dropdown from "$lib/components/ui/dropdown-menu/index.js"

    type NewPerson = {
        id: number,
        personId: string,
        role: string
    }

    const persons = [
        {
            value: "019885ea-71ef-796a-9abb-98a1ece9d07a",
            label: "Ryan Gladden"
        },
        {
            value: "01988664-7f87-7daf-ac78-c8506371ea86",
            label: "Gabi Gladden"
        },
        {
            value: "01988666-91c9-7f26-8984-1055f0601626",
            label: "Karry Gladden"
        },
        {
            value: "01988668-1de6-7d6d-80a0-28ff69f16481",
            label: "Amy Gladden"
        },
        {
            value: "01988669-58ed-7825-b73b-d1d52903b106",
            label: "Jair Vieira"
        },
        {
            value: "0198866d-f927-734f-848f-3dc93b9f0087",
            label: "Patricia Vieira"
        },
    ]
    
    let open = $state(false)
    let { id, role = $bindable(), personId = $bindable(), listed, remove, usedIds } = $props()
    let triggerRef= $state<HTMLButtonElement>(null!);
    let author = $derived(listed.find((person: NewPerson) => person.role === "author")?.id ?? null)
    let recipient = $derived(listed.find((person: NewPerson) => person.role === "recipient")?.id ?? null)

    const selectedValue = $derived(
        persons.find((f) => f.value === personId)?.label
    );

    function closeAndFocusTrigger() {
        open = false;
        tick().then(() => {
            triggerRef.focus();
        });
    }

</script>

<!-- <div class="flex flex-row justify-between mt-3"> -->
<div class="flex flex-row gap-1 justify-between mt-3">
    <Popover.Root bind:open>
        <Popover.Trigger bind:ref={triggerRef} class="w-40">
            {#snippet child({ props })}
                <Button
                    variant="outline"
                    class="shrink-0 flex flex-row justify-between"
                    {...props}
                    role="combobox"
                    aria-expanded={open}>
                        {selectedValue || "Select person..."}
                        <ChevronDown class="opacity-50" />
                </Button>
            {/snippet}
        </Popover.Trigger>
        <Popover.Content>
            <Command.Root>
                <Command.Input placeholder="Type to filter..." />
                <Command.List>
                    <Command.Empty>No persons found.</Command.Empty>
                    <Command.Group>
                        {#each persons.filter((person) => person.value === personId || !usedIds.includes(person.value)) as person}
                            <Command.Item
                                value={person.label}
                                onSelect={() => {
                                    personId = person.value;
                                    closeAndFocusTrigger();
                                    }}>
                                <CheckIcon 
                                    class="mr-2 size-4 {personId !== person.value && 'text-transparent'}"
                                />
                                {person.label}
                            </Command.Item>
                        {/each}
                    </Command.Group>
                </Command.List>
            </Command.Root>
        </Popover.Content>
    </Popover.Root>
    <div class="flex flex-row justify-end col-span-2">
        <Dropdown.Root>
            <Dropdown.Trigger>
                {#snippet child({ props })}
                    <Button class="shrink-0 w-30 flex flex-row justify-between" {...props} variant="outline">
                        {role ? `${role}` : "select role"}
                        <ChevronDown />
                    </Button>
                {/snippet}
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Group>
                    <Dropdown.Label>Select role</Dropdown.Label>
                    <Dropdown.Separator />
                    <Dropdown.RadioGroup bind:value={role}>
                        <Dropdown.RadioItem disabled={author !== null && author !== id} value="author">author</Dropdown.RadioItem>
                        <Dropdown.RadioItem value="coauthor">coauthor</Dropdown.RadioItem>
                        <Dropdown.RadioItem disabled={recipient && recipient !== id} value="recipient">recipient</Dropdown.RadioItem>
                        <Dropdown.RadioItem value="mentioned">mentioned</Dropdown.RadioItem>
                    </Dropdown.RadioGroup>
                </Dropdown.Group>
            </Dropdown.Content>
        </Dropdown.Root>
    </div>
    <Button class="w-6" onclick={() => remove(id)} variant="ghost">
        <X color="red"/>
    </Button>
</div>
