<script lang="ts">
  import {
    Dropdown,
    TextInput,
    Button,
    Tooltip,
  } from "carbon-components-svelte";
  import { Event } from "$lib/types/enums";

  import { skillDB } from "../../../src/stores";
  import RoutineGrid from "$lib/components/RoutineGrid.svelte";

  let selectedEvent: Event = Event.DoubleMini;
  let inputValue = "";

  let sameDD: {
    name: string;
    skills: string[];
  }[] = [];

  // TODO: this component is an absolute mess. Refactor it.
</script>

<div id="title-container">
  <h1>Search Routines by DD</h1>
  <Tooltip>
    <p>
      Only double mini routines are supported at the moment. <span id="math"
        ><sub>~350</sub>P<sub>10</sub></span
      > is, like, gigantic; generating tumbling and trampoline routines requires
      more creativity and algorithms know-how
    </p>
  </Tooltip>
</div>
<section id="input-section">
  <TextInput id="input" bind:value={inputValue}></TextInput>
  <Dropdown
    items={[
      //   { text: "Trampoline", id: Event.Trampoline },
      { text: "Double Mini", id: Event.DoubleMini },
      //   { text: "Tumbling", id: Event.Tumbling },
    ]}
    bind:selectedId={selectedEvent}
  ></Dropdown>
  <Button
    size="field"
    on:click={() => {
      sameDD = $skillDB.getRoutinesByDD(Number(inputValue), selectedEvent);
      inputValue = "";
    }}>Search</Button
  >
</section>
{#if sameDD.length !== 0}
  <p>{sameDD.length} results</p>
{/if}
<section>
  <RoutineGrid routineData={sameDD} />
</section>

<style>
  #input-section {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  section {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  #title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  sub {
    font-size: 0.9em;
  }

  #math {
    font-family: "computer-modern", "times new roman", times, serif;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    #input-section {
      flex-direction: column;
    }
  }
</style>
