<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Label from "../ui/label/label.svelte";

    let { id = '0000', title = "Placeholder Title", date = '2002', type, author, persons } = $props()
    let longDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

</script>

<Card.Root class="h-85 w-2xs hover:shadow-slate-500 duration-120 shadow-lg m-6 overflow-hidden p-0">
    <a href="/documents/{id}">
        <Card.Content class="p-0">
            <img
                src="https://placehold.co/300x185"
                alt="{title} thumbnail"
                class="inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            <Card.Header class="pt-3">
                <Card.Title class="text-xl">{title}</Card.Title>
                <Separator orientation="horizontal" />
                <Label class="text-gray-500 text-sm">{type} {date ? `• ${new Date(date).toLocaleDateString(undefined, longDate)}` : ''}</Label>
            </Card.Header>
            <div class="px-5 py-2 flex flex-row">
                <!-- <Avatar.Root>
                    <Avatar.Image src={author.avatar} />
                    <Avatar.Fallback initials="{author.first_name} {author.last_name}">{author.first_name[0]}{author.last_name[0]}</Avatar.Fallback>
 -->
                <Avatar.Root>
                    <Avatar.Image src={author.avatar} />
                    <Avatar.Fallback initials="{author.first_name} {author.last_name}">{author.first_name[0]}{author.last_name[0]}</Avatar.Fallback>
                </Avatar.Root>
                <Label class="px-2 text-md">{author.first_name} {author.last_name}</Label>
            </div>
        </Card.Content>
    </a>
</Card.Root>