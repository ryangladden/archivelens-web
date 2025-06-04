<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Header from '$lib/components/header/Header.svelte';
	let { children } = $props();
</script>
<Header />
<div class="flex">
<Sidebar />
<div>
{@render children()}
</div>
</div>
