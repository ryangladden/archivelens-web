<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import Header from '$lib/header/header.svelte';
	let { children } = $props();
</script>
<Header />
<div class="flex-inline">
<Sidebar />
{@render children()}
</div>
