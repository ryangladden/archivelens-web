<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    let { id = 0, firstName = "Joe", lastName = "Mama", birth = new Date, death = new Date, avatar = null } = $props()

    const getYear = (date: string) => {
        if (date === '0001-01-01T00:00:00Z') {
            return null
        }
        return new Date(date).getFullYear()
    }

    let birthdate = getYear(birth)
    let deathdate = getYear(death)

</script>

<Card.Root class="w-50 hover:shadow-slate-500 duration-120 shadow-lg m-6">
    <a href="/persons/{id}">
        <Card.Header class=" flex flex-col items-center text-center">
            <Avatar.Root class="w-32 h-32 text-6xl">
                <Avatar.Image src={avatar}/>
                <Avatar.Fallback initials="{firstName} {lastName}">{firstName[0]}{lastName[0]}</Avatar.Fallback>
            </Avatar.Root>
            <Card.Title class="text-2xl font-light text-center">{firstName} {lastName}</Card.Title>
        </Card.Header>
        <Card.Content class="text-gray-600 dark:text-gray-100 text-center">
            {#if !birthdate && !deathdate}
                <span>Unknown</span>
            {:else if birthdate && !deathdate}
                <span>{birthdate}</span>
            {:else if !birthdate && deathdate}
                <span>Unknown - {deathdate}</span>
            {:else}
                <span>{birthdate}-{deathdate}</span>
            {/if}
        </Card.Content>
    </a>
</Card.Root>
