<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    import Separator from '$lib/components/ui/separator/separator.svelte';
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import MetadataSidebar from '$lib/components/documents/metadata-sidebar.svelte';
    import { ArrowLeft } from '@lucide/svelte';

    const { data } = $props()
</script>
<Sidebar.Provider class="flex flex-col">
        <header class="flex h-20 shrink-0 items-center gap-2 border-b px-4">
            <Button variant="ghost"><ArrowLeft strokeWidth={2.5}/></Button>
            <Separator orientation="vertical" class="mr-2 h-4"/>
            <Sidebar.Trigger />
            <MetadataSidebar document={data.document}/>
        </header>
        <div>
            {data.document.title}
        </div>
</Sidebar.Provider>