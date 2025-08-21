<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import Label from "$lib/components/ui/label/label.svelte";
    import { ImageMinus, ImagePlus, ImagePlusIcon } from "@lucide/svelte";
    import * as Tooltip from "$lib/components/ui/tooltip/index";

    // let avatar: string | null = $state(null);
    // let fileinput: HTMLInputElement | null = null;
    let { file = $bindable<File|null>(), first = '', last = '', className = '' } = $props()
    let preview: string | null = $state(null)
    const onFileSelected = (e: Event) => {
        const target = e.target as HTMLInputElement;
        let image = target.files?.[0];
        if (!image) {preview = null; return};
        file = image;
        let reader = new FileReader();
        reader.readAsDataURL(image)
        reader.onload = (e: ProgressEvent<FileReader>) => {
            preview = e.target?.result as string;
        }

        target.value = '';
    }

    const deleteImage = () => {file = null; preview = null}


</script>

<div class={`flex flex-col items-center ${className}`}>
    <Avatar.Root class="h-32 w-32 text-6xl m-2">
        {#key preview}
            <Avatar.Image src={preview} />
        {/key}
        <Avatar.Fallback initials="{first} {last}">
            {first[0]}{last[0]}
        </Avatar.Fallback>
    </Avatar.Root>
    <div class="flex flex-row items-center">
        <label 
            class="border-gray border-1 rounded-md m-2 px-3 py-2 shadow-xs cursor-pointer flex flex-row items-center gap-1"
            for="avatar">
            <ImagePlus size={18}/>
            <Label for="avatar" class="font-normal cursor-pointer">Upload image</Label>
        </label>
        <input
            id="avatar"
            type="file"
            accept=".jpg, .jpeg, .png"
            onchange={onFileSelected}
            hidden
            />
         <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <Button
                        variant="ghost"
                        onclick={deleteImage}>
                        <ImageMinus size={18} color="red"/>
                    </Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    Clear image
                </Tooltip.Content>
            </Tooltip.Root>
         </Tooltip.Provider>
    </div>
    <!-- <Button on:click={()=>{fileinput.click();}}>Choose Image</Button> -->

</div>