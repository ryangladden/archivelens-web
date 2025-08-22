<script lang="ts">
    import { Button } from '$lib/components/ui/button/index.js';
    import Separator from '$lib/components/ui/separator/separator.svelte';
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import MetadataSidebar from '$lib/components/documents/metadata-sidebar.svelte';
    import { ArrowLeft, Info } from '@lucide/svelte';

    const { data } = $props()
    let open = $state(true);

    const toggleSidebar = () => {
        if (open) {
            open = false;
            return
        }
        open = true;
    }

</script>
<Sidebar.Provider class="flex flex-col" style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;" {open}>
        <header class="flex h-20 shrink-0 items-center gap-2 border-b px-4">
            <Button variant="ghost"><ArrowLeft strokeWidth={2.5}/></Button>
            <Separator orientation="vertical" class="mr-2 h-4"/>
            <Button onclick={toggleSidebar} variant="ghost"><Info /></Button>
            <MetadataSidebar document={data.document}/>
        </header>
        <div>
            {data.document.title}
        </div>
</Sidebar.Provider>