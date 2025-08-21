<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import AddPersonSheet from "$lib/components/add-resource/add-person.svelte";
    import AddDocumentSheet from "$lib/components/add-resource/add-document.svelte";

    let { children } = $props();
</script>

<Sidebar.Provider>
    <AppSidebar />
        <Sidebar.Inset class="flex flex-col w-full h-screen">
            <header class="flex flex-row justify-between h-20 shrink-0 items-center gap-2 border-b px-4">
                <div>
                    <Sidebar.Trigger class="-m1-1" />
                </div>
                <div class="flex flex-row gap-3 mx-4">
                    <AddPersonSheet />
                    <AddDocumentSheet />
                </div>
            </header>
                <main class="flex-1">
                    {@render children?.()}
                </main>
        </Sidebar.Inset>
</Sidebar.Provider>