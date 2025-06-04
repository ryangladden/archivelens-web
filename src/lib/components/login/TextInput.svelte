<script lang="ts">
    import Icon from "$lib/components/elements/Icon.svelte";
    // let { icon, type, value = $bindable() } = $props()
    export let icon: string;
	export let type: string = 'text';
	export let value: string;
</script>


<div class="flex flex-row items-center">
    <div class="border-2 border-r-0 rounded-l-xl h-10 w-10 flex items-center justify-center">
        <Icon {icon}/>
    </div>
    <input {type} bind:value class="w-xs border-2 rounded-r-xl h-10 p-2"/>
</div>