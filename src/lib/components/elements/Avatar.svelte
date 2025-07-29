<script lang="ts">
    let { src = null, first = '', last = '' } = $props()
    let defaultAvatar = '<p class="h-7 w-7 rounded-full bg-red-500 flex justify-center items-center text-white">' + first + last +'</p>'
</script>

{#if src}
    <img {src} class="h-8 w-8 rounded-full"/>
{:else}
    {@html defaultAvatar}
{/if}