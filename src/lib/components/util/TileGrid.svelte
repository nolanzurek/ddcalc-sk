<script lang="ts">
  import { Tile } from "carbon-components-svelte";
  import { goto } from "$app/navigation";
  export let data: {
    title: string;
    subtitle: string;
    link: undefined | string;
  }[];
</script>

<div id="tileGridContent">
  {#each data as datum}
    <a
      href={datum.link}
      style="color:black; text-decoration:none"
      on:click={//use goto
      (e) => {
        if (datum.link) {
          e.preventDefault();
          goto(datum.link);
        }
      }}
    >
      <Tile style="height:100%;">
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
