<script lang="ts">
    import Calendar from "$lib/components/ui/calendar/calendar.svelte"
    import Button from "$lib/components/ui/button/button.svelte"
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { getLocalTimeZone } from "@internationalized/date";
    import { CalendarMinus, CalendarPlus, X } from "@lucide/svelte";
    import * as Tooltip from "$lib/components/ui/tooltip/index";

    let open = $state(false)
    let { value = $bindable(), className } = $props()  // $state<CalendarDate | undefined>();
    let longDate = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }

    const clearDate = () => {
        value = null
    }

</script>
<Popover.Root bind:open>
    <div class={`flex flex-row ${className}`}>
        <Popover.Trigger id="date">
        {#snippet child({ props })}
            <Button
            {...props}
            variant="outline"
            class={`w-full flex-1`}
            >
            {value
                ? `${value.toDate(getLocalTimeZone()).toLocaleDateString(undefined, longDate)}`
                : "Select date"}
                <CalendarPlus />
            </Button>
        {/snippet}
        </Popover.Trigger>
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <Button variant="ghost" onclick={clearDate} class="w-8"><CalendarMinus color="red"/></Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    Clear selected date
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </div>
    <Popover.Content class="w-auto overflow-hidden p-0" align="start">
    <Calendar
        type="single"
        bind:value={value}
        onValueChange={() => {
        open = false;
        }}
        captionLayout="dropdown"
    />
    </Popover.Content>
</Popover.Root>