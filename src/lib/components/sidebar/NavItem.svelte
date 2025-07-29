<script lang='ts'>
    let { label, href, icon } = $props();
    import Icon from "$lib/components/elements/Icon.svelte"
</script>

<a href={href}>
<div class="hover:bg-slate-200 ease-in duration-100 py-4 rounded-l-none rounded-full p-2 flex flex-row w-40">
    <Icon {icon} />
    <p>{label}</p>
</div>
</a>