<script lang='ts'>
    let { label, href, icon } = $props();
    import Icon from "$lib/components/elements/Icon.svelte"
</script>

<a href={href}>
<div class="hover:bg-orange-100 ease-in duration-200 rounded-l-none rounded-full p-2 flex flex-row">
    <Icon {icon} />
    <p>{label}</p>
</div>
</a>