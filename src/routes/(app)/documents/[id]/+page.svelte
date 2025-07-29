<script lang="ts">
	import InlinePerson from '$lib/components/elements/InlinePerson.svelte';
	import { mdiAccountPlus } from '@mdi/js';
    import type { PageProps } from './$types'
	import Icon from '$lib/components/elements/Icon.svelte';
    let { data }: PageProps = $props()
    console.log(data.document)
</script>
<iframe src={data.document.url} width="800" height="500">Object</iframe>
<div>
    <h2>{data.document.title}</h2>
    <p>{data.document.location}</p>
    {#if data.document.author !== null}
    <p>Author: </p>
    <InlinePerson first_name={data.document.author.first_name} last_name={data.document.author.last_name} src={data.document.author.avatar} id={data.document.author.avatar} />
    {:else}
    <Icon icon={mdiAccountPlus} />
    {/if}
</div>