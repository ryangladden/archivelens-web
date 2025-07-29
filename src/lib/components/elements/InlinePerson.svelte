<script lang="ts">
	import Avatar from "./Avatar.svelte";

    let { src = null, first_name = '', last_name = '', id } = $props()

    const getFirstLetter = (word: string) => {
        if (word === '' || word === null) {
            return ''
        }
        return Array.from(word)[0]

    }

    let first: string = getFirstLetter(first_name)
    let last: string = getFirstLetter(last_name)
    
    
</script>

<div class="flex flex-row gap-2">
    <a href="/persons/{id}">
        <Avatar src={src} {first} {last}/>
        <p class="inline">{first_name} {last_name}</p>
    </a>
</div>