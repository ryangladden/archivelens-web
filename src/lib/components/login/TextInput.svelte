<script lang="ts">
    import Icon from "$lib/components/elements/Icon.svelte";
    // let { icon, type, value = $bindable() } = $props()
    export let icon: string = '';
	export let type: string;
	export let value: string;
    export let label: string = '';
    export let size: string = 'xs';
</script>
<div>
    {#if label != ''}
        <p class="px-5 text-lg">{label}</p>
    {/if}
    <div class="flex flex-row items-center">
        {#if icon !== ''}
        <div class="border-2 border-r-0 rounded-l-xl h-10 w-10 flex items-center justify-center">
            <Icon {icon}/>
        </div>
        {/if}
        <input {type} bind:value class='w-{size} border-2 {icon === '' ? "rounded-xl" : "rounded-l-none rounded-r-xl"}  h-10 p-2'/>
    </div>
</div>