<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { Calendar1, Map, UsersRound } from "@lucide/svelte";

  let { document } = $props()

      let longDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

</script>

<Sidebar.Root side="right">
    <Sidebar.Header>
        <Sidebar.Group>
            <span class="p-6"></span>
            <span class="pl-2 font-semibold text-lg">{document.title}</span>
            <Sidebar.GroupLabel>{document.type}</Sidebar.GroupLabel>
        </Sidebar.Group>
    </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
        <Sidebar.Menu>
            <Sidebar.MenuItem>
                <div class="flex flex-row p-1 items-center">
                    <Calendar1 size={20}/>
                    <span class="text-sm pl-2">{document.date ? new Date(document.date).toLocaleDateString(undefined, longDate) : "No date"}</span>
                </div>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
                <div class="flex flex-row p-1 items-center">
                    <Map size={20}/>
                    <span class="text-sm pl-2">{document.location ? document.location : "No location"}</span>
                </div>
            </Sidebar.MenuItem>
        </Sidebar.Menu>
    </Sidebar.Group>
    <Sidebar.Group>
        <Sidebar.Menu>
            <Sidebar.MenuItem>
                <div class="flex flex-row p-1 items-center">
                    <UsersRound />
                    <span class="text-md pl-2">Persons</span>
                </div>
            </Sidebar.MenuItem>
        </Sidebar.Menu>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>