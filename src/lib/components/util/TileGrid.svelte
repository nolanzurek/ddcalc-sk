<script lang="ts">
  import { Tile } from "carbon-components-svelte";
  export let data: {
    title: string;
    subtitle: string;
    link: undefined | string;
  }[];
</script>

<div id="tileGridContent">
  {#each data as datum}
    <a href={datum.link} style="color:black; text-decoration:none">
      <Tile style="height:100%">
        <p style="font-weight:bold">{datum.title}</p>
        <p>{datum.subtitle}</p>
      </Tile></a
    >
  {/each}
</div>

<style>
  #tileGridContent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 20px;
  }
</style>
