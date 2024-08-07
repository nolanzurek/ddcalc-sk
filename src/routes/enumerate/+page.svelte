<script lang="ts">
  import {
    Dropdown,
    TextInput,
    Button,
    DataTable,
    Tile,
  } from "carbon-components-svelte";

  import {
    enumerateNormalSkills,
    enumerateAllSkills,
  } from "$lib/functions/math/enumerateSkills";

  import FIGNotationChip from "../../lib/components/FIGNotationChip.svelte";

  let flips: number;
  let twists: number;

  let normalResults: any;
  let allResults: any;
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
          normalResults = enumerateNormalSkills(Number(flips), Number(twists));
          allResults = enumerateAllSkills(Number(flips), Number(twists));
          flips = twists = undefined; // assignment return values my beloved
        }}>Generate</Button
      >
    </div></Tile
  >
</section>
<section>
  {#if allResults}
    {#if normalResults}
      <h2>"Normal" Skills</h2>
      <div class="list-of-FIG-chips">
        {#each normalResults as skill}
          <FIGNotationChip flips={skill.length} twists={skill} />
        {/each}
      </div>
      <h2>All Skills</h2>
      <div class="list-of-FIG-chips">
        {#each allResults as skill}
          <FIGNotationChip flips={skill.length} twists={skill} />
        {/each}
      </div>
    {/if}
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

  .list-of-FIG-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0px;
  }
</style>
