<script lang="ts">
    import NavItem from "$lib/components/sidebar/NavItem.svelte";
	import {mdiBookSearch, mdiBookshelf, mdiAccountSupervisorCircle, mdiFileDocumentMultiple } from "@mdi/js";
</script>

<div class="flex-0 py-10 pr-10 bg-gray-100 m-1 rounded-2xl border-slate-300 border-2">
    <nav>
        <NavItem label="Documents" href="/documents" icon={mdiFileDocumentMultiple}/>
        <NavItem label="Persons" href="/persons" icon={mdiAccountSupervisorCircle}/>
        <NavItem label="Collections" href="/collections" icon={mdiBookshelf}/>
        <NavItem label="Discover" href="/discover" icon={mdiBookSearch}/>
    </nav>
</div>