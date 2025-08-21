<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { ScrollText, UsersRound, LibraryBig, TextSearch } from "@lucide/svelte";
  import brand from "$lib/assets/archive-lens.svg"

  const items = [
    {
        title: "Documents",
        url: "/documents",
        icon: ScrollText
    },
    {
        title: "Persons",
        url: "/persons",
        icon: UsersRound
    },
    {
        title: "Collections",
        url: "/collections",
        icon: LibraryBig
    },
    {
        title: "Discover",
        url: "/discover",
        icon: TextSearch
    }
  ]
</script>
 
<Sidebar.Root collapsible="icon" variant="floating" size="large">
  <Sidebar.Header>
        <Sidebar.Menu>
            <Sidebar.MenuItem size="large">
                    <Sidebar.MenuButton size="large">
                        {#snippet child({ props })}
                            <a href="/documents" class="flex flex-row items-center h-16 w-xl" {...props}>
                                <img height="100px" src={brand} alt="Archive Lens" class="h-16 flex-shrink-0"/>
                                <span class="font-mono font-semibold text-xl mb-2 text-red-800 p-0 m-0">rchive Lens</span>
                            </a>
                        {/snippet}
                    </Sidebar.MenuButton>
            </Sidebar.MenuItem>
        </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
        <Sidebar.GroupContent>
            <Sidebar.Menu>
                {#each items as item (item.title)}
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton size="large">
                            {#snippet child({ props })}
                                <a href={item.url} {...props}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                {/each}
            </Sidebar.Menu>
        </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Footer />
</Sidebar.Root>