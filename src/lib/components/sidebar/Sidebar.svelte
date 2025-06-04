<script lang="ts">
    import NavItem from "$lib/components/sidebar/NavItem.svelte";
	import {mdiBookSearch, mdiBookshelf, mdiAccountSupervisorCircle, mdiFileDocumentMultiple } from "@mdi/js";
</script>

<div>
<h1>
    Sidebar
</h1>
<nav>
    <NavItem label="Documents" href="/documents" icon={mdiFileDocumentMultiple}/>
    <NavItem label="Persons" href="/persons" icon={mdiAccountSupervisorCircle}/>
    <NavItem label="Collections" href="/collections" icon={mdiBookshelf}/>
    <NavItem label="Discover" href="/discover" icon={mdiBookSearch}/>
</nav>
</div>