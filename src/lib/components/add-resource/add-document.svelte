<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import * as Tooltip from "$lib/components/ui/tooltip/index";
    import { cn } from "$lib/utils.js";
    import Label from "$lib/components/ui/label/label.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import * as Sheet from "$lib/components/ui/sheet/index.js"
    import { ChevronDown, FilePlus2 } from '@lucide/svelte';
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import CalendarPopover from "$lib/components/reusable/forms/calendar-popover.svelte";
    import type { CalendarDate } from "@internationalized/date";
    import * as Dropdown from "$lib/components/ui/dropdown-menu/index";
    import Button from '$lib/components/ui/button/button.svelte';
    import AddAssociatedPersons from '../reusable/forms/add-associated-persons.svelte';
    import AddDocumentType from '../reusable/forms/add-document-type.svelte';
    import AddFile from '../reusable/forms/add-file.svelte';

    type NewPerson = {
        id: number,
        personId: string,
        role: string
    }

    let title: string = $state("")
    let date: CalendarDate | null = $state(null)
    let location: string | null = $state(null)
    let type: string = $state("")
    let listed: NewPerson[] = $state([])
    let contributors = $derived.by(() => {
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
    })

    let files: FileList | null = $state(null)

    const formatDate = (date: CalendarDate | null) => {
        if (date) {
            return `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`
        }
        return undefined
    }

    const addOptional = (field: string, value: any, formData: FormData) => {
        if (value) {
            if (value.length !== 0) {
                formData.append(field, value)
            }
        }
    }

    const generateForm = () => {
        if (files && title && type) {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("type", type);
            addOptional("date", formatDate(date), formData)
            addOptional("location", location, formData)
            addOptional("author", contributors.author, formData)
            addOptional("coauthors", contributors.coauthors, formData)
            addOptional("mentions", contributors.mentions, formData)
            addOptional("recipient", contributors.recipient, formData)
            formData.append("file", files[0])
            console.log(formData)
            return formData
        }
        return null
    }

    const upload = async (e: Event) => {
        e.preventDefault()
        const formData = generateForm()
        if (formData) {
            const response = await fetch("/api/v1/documents", {
                method: "post",
                body: formData,
            })
            if (response.ok) {
                console.log(response.json)
            } else {
                console.log("failure", response.status)
            }
        } else {
            console.log("fill all required fields")
        }
    }

</script>

<Tooltip.Provider>
    <Tooltip.Root>
        <Tooltip.Trigger>
            <Sheet.Root>
                <Sheet.Trigger class={cn(buttonVariants({ variant: "outline" }),)}>
                    <FilePlus2 strokeWidth=2.5 />
                    <Label>New Document</Label>
                </Sheet.Trigger>
                <Sheet.Content class="w-sm">
                    <Sheet.Header>
                        <Sheet.Title>
                            <div class="flex flex-row gap-4 center p-6">
                            <FilePlus2 />Add a new document
                            </div>
                        </Sheet.Title>
                    </Sheet.Header>

                    <form onsubmit={upload} method="POST" class="flex flex-col gap-4 items-center p-2">
                        <div class="grid grid-cols-3 gap-4 w-xs">
                            <div class="flex flex-col col-span-3 gap-2">
                                <Label>Title<p class="text-red-500">*</p></Label>
                                <Input class="grow"type="text" bind:value={title} required/>
                            </div>
                            <div class="col-span-3 flex flex-row justify-between">
                                <Label>Document type<p class="text-red-500">*</p></Label>
                                <AddDocumentType bind:type />
                            </div>
                            <Label>Date</Label>
                            <CalendarPopover className="col-span-2" bind:value={date}/>
                            <AddAssociatedPersons bind:listed={listed}/>
                            <AddFile bind:files />
                            </div>
                            <Sheet.Close type="submit" class={cn(buttonVariants({  }), "w-3xs")}>
                                Create document
                            </Sheet.Close>
                    </form>
                </Sheet.Content>
            </Sheet.Root>
        </Tooltip.Trigger>
        <Tooltip.Content>
            Add a new document
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>