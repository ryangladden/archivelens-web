<script lang="ts">
    import Icon from "../elements/Icon.svelte";
	import { mdiAccount } from "@mdi/js";
	import InlinePerson from "../elements/InlinePerson.svelte";

    let { title, date, type, author } = $props()
    let formattedDate: Date = new Date(date)
</script>

<div class="bg-orange-100/75 w-sm h-sm rounded-lg shadow-lg hover:shadow-red-800 duration-200 m-6">
    <img class="object-cover h-48 w-full rounded-t-lg" src="image.png">
    <div class="p-4">
        <h3 class="text-slate-800 font-semibold text-lg">{title}</h3>
        <p class="text-slate-500">{type} • {formattedDate.toLocaleDateString("en-GB", {dateStyle: "long"})}</p>
        <!-- <img class="inline rounded-full h-7 w-7" src={avatarUrl}> -->
         <!-- <svg class="inline rounded-full h-7 w-7" ><path d={mdiAccount} /></svg>
        <p class="inline">{author.first_name + ' ' + author.last_name}</p> -->
        <InlinePerson avatar={author.avatar} first_name={author.first_name} last_name={author.last_name} />
    </div>
</div>

<!-- //date.toLocaleDateString("en-GB", {dateStyle: "long"}) -->