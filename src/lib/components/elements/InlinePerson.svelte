<script lang="ts">
    let { avatar = null, first_name, last_name } = $props()
    let [first] = first_name
    let [last] = last_name
    let defaultAvatar = '<p class="h-7 w-7 rounded-full bg-red-500 flex justify-center items-center text-white">' + first + last +'</p>'
</script>

<div class="flex flex-row gap-2">
    {#if avatar}
        <img src={avatar} />
    {:else}
        {@html defaultAvatar}
    {/if}
    <p class="inline">{first_name} {last_name}</p>
</div>