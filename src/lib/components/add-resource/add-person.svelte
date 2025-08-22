<script lang="ts">
    import AddAvatar from "$lib/components/reusable/forms/add-avatar.svelte";
    import CalendarPopover from "$lib/components/reusable/forms/calendar-popover.svelte";
    import type { CalendarDate } from "@internationalized/date";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import { UserRoundPlus } from "@lucide/svelte";
    import { invalidateAll } from '$app/navigation';
    import * as Tooltip from "$lib/components/ui/tooltip/index";
    import { cn } from "$lib/utils.js";
    import Label from "$lib/components/ui/label/label.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import * as Sheet from "$lib/components/ui/sheet/index.js"

    let first: string = $state("")
    let last: string = $state("")
    let birthdate: CalendarDate | null = $state(null)
    let deathdate: CalendarDate | null = $state(null)
    let file: File | null = $state(null)

    const addDate = (date: CalendarDate | null, field: string, formData: FormData) => {
        if (date) {
            formData.append(field, `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`)
        }
    }

    const upload = async (e: Event) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("first_name", first);
        formData.append("last_name", last);
        addDate(birthdate, "birth", formData);
        addDate(deathdate, "death", formData);
        if (file) {
            console.log("Form added")
            formData.append("file", file)
        }
        const response = await fetch("/api/v1/persons", {
            method: "post",
            body: formData,
        })
        if (response.ok) {
            console.log(response.json)
            invalidateAll()
        } else {
            console.log("failure", response.status)
        }
    }

</script>

<Tooltip.Provider>
    <Tooltip.Root>
        <Tooltip.Trigger>
            <Sheet.Root>
                <Sheet.Trigger class={cn(buttonVariants({ variant: "outline" }),)}>
                    <UserRoundPlus strokeWidth=2.5 />
                    <Label>New Person</Label>
                </Sheet.Trigger>
                <Sheet.Content>
                    <Sheet.Header>
                        <Sheet.Title>
                            <div class="flex flex-row gap-4 center p-6">
                            <UserRoundPlus />Add a new person
                            </div>
                        </Sheet.Title>
                    </Sheet.Header>

                    <form onsubmit={upload} method="POST" class="flex flex-col gap-4 items-center p-6">
                        <div class="grid grid-cols-3 gap-4">
                            <Label>First name<p class="text-red-500">*</p></Label>
                            <Input class="col-span-2"type="text" bind:value={first} required/>
                            <Label>Last name<p class="text-red-500">*</p></Label>
                            <Input class="col-span-2" type="text" bind:value={last} required/>
                            <Label>Date of birth</Label>
                            <CalendarPopover className="col-span-2" bind:value={birthdate}/>
                            <Label>Date of death</Label>
                            <CalendarPopover className="col-span-2" bind:value={deathdate}/>
                            <Label>Picture</Label>
                            <AddAvatar className="col-span-2" {first} {last} bind:file/>
                        </div>
                        <Sheet.Close type="submit" class={cn(buttonVariants({  }), "w-3xs")}>
                            Create Person
                        </Sheet.Close>
                    </form>
                </Sheet.Content>
            </Sheet.Root>
        </Tooltip.Trigger>
        <Tooltip.Content>
            Add a new person
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>