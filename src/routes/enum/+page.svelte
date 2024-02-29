<script lang="ts">
  import {
    Dropdown,
    TextInput,
    Button,
    DataTable,
    Tile,
  } from "carbon-components-svelte";

  import enumerateAllSkills from "$lib/functions/math/enumerateSkills";

  let flips: number;
  let twists: number;

  let result: any;
</script>

<h1>Enumerate Skills</h1>

<section>
  <Tile>
    <div id="inputParams">
      <TextInput id="flips" bind:value={flips} placeholder="Flips"></TextInput>
      <TextInput id="twists" bind:value={twists} placeholder="Twists"
      ></TextInput>
      <Button
        size="field"
        on:click={() => {
          result = enumerateAllSkills(flips, twists);
          flips = twists = undefined; // assignment return values my beloved
        }}>Generate</Button
      >
    </div></Tile
  >
</section>
<section>
  <h1>Results</h1>
  {#if result}
    {#each result as skill}
      <p>
        {`${skill.length * 4}${skill.reduce((a, b) => "" + a + b).replaceAll("0", "-")}`}
      </p>
    {/each}
  {/if}
</section>

<style>
  #inputParams {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  section {
    margin-bottom: 30px;
    margin-top: 30px;
  }
</style>
