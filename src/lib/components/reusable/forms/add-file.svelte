<script lang="ts">
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js"
    import { Button } from "$lib/components/ui/button/index.js"
    import { FileMinus2, FilePlus2 } from "@lucide/svelte";

    let { files = $bindable() } = $props()
</script>
    
<div class="flex flex-row justify-center col-span-3">
    <label 
        class="w-full border-gray border-1 rounded-md m-2 px-3 py-2 shadow-xs cursor-pointer flex flex-row items-center gap-1"
        for="avatar">
        <FilePlus2 size={18}/>
        <Label for="file" class="font-normal cursor-pointer">
            {files ? files[0].name : "Upload file"}
        </Label>
    </label>
    <input
        id="file"
        type="file"
        accept=".jpg, .jpeg, .png"
        bind:files
        hidden
        />
        <Tooltip.Provider>
        <Tooltip.Root>
            <Tooltip.Trigger>
                <Button
                    variant="ghost"
                    onclick={() => files = null}>
                    <FileMinus2 size={18} color="red"/>
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                Clear selection
            </Tooltip.Content>
        </Tooltip.Root>
        </Tooltip.Provider>
</div>