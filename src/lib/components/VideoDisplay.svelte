<script lang="ts">
  import { Tabs, Tab, TabContent } from "carbon-components-svelte";
  import Youtube from "svelte-youtube-embed";

  import type { RoutineVideo, SkillVideo } from "$lib/types/types";

  export let videos: RoutineVideo[] | SkillVideo[];
</script>

<!-- TODO: fix the title styling! -->

{#if videos && videos.length > 1}
  <Tabs autoWidth type="container">
    {#each videos as video, i}
      <Tab
        label={`${video.first_name} ${video.last_name} (${video.country})`}
      />
    {/each}
    <svelte:fragment slot="content">
      {#each videos as video}
        <TabContent style="padding: 0">
          <Youtube id={video.id} />
        </TabContent>
      {/each}
    </svelte:fragment>
  </Tabs>
{/if}
{#if videos && videos.length === 1}
  <Youtube id={videos[0].id} animations={false} />
{/if}
