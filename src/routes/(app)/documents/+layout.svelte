<script lang="ts">
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Header from '$lib/components/header/Header.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col max-h-screen">
	<Header />
	<div class="flex flex-row overflow-hidden w-screen">
		<Sidebar />
		{@render children()}
	</div>
</div>


