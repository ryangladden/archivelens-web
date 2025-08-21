<script lang="ts">
    import * as Dropdown from "$lib/components/ui/dropdown-menu/index.js"
    import { Button } from "$lib/components/ui/button/index.js";
    import { ChevronDown } from "@lucide/svelte";

    let { type = $bindable() } = $props()
</script>

<Dropdown.Root>
    <Dropdown.Trigger class="w-40">
        {#snippet child({ props })}
            <Button {...props} variant="outline">
                {type ? `${type}` : "Select..."}
                <ChevronDown />
            </Button>
        {/snippet}
    </Dropdown.Trigger>
    <Dropdown.Content>
        <Dropdown.Group>
            <Dropdown.Label>Type</Dropdown.Label>
            <Dropdown.Separator />
            <Dropdown.RadioGroup bind:value={type}>
                <Dropdown.RadioItem value="letter">letter</Dropdown.RadioItem>
                <Dropdown.RadioItem value="journal">journal</Dropdown.RadioItem>
                <Dropdown.RadioItem value="audio">audio</Dropdown.RadioItem>
            </Dropdown.RadioGroup>
        </Dropdown.Group>
    </Dropdown.Content>
</Dropdown.Root>