<script lang="ts">
  import { skillDB } from "../../../stores";
  import { currentEvent } from "../../../stores";
  import shapeEnumToText from "$lib/functions/util/shapeEnumToText";
  import { Tag } from "carbon-components-svelte";
  import getDDByEvent from "$lib/functions/util/getDDByEvent";
  import type { Skill } from "$lib/types/types";
  import type { Event } from "$lib/types/enums";

  import { findVideoRoutine } from "$lib/bloat/findVideo";

  import RoutineGrid from "$lib/components/RoutineGrid.svelte";
  import VideoDisplay from "$lib/components/VideoDisplay.svelte";

  export let data;
  $: routineData = $skillDB.generateRoutine(
    decodeURIComponent(data.routine).split(" "),
    $currentEvent
  );
  // TODO: make all these depend on event
  $: videos = findVideoRoutine(
    routineData.skills.map((el) => el.FIG).join(" "),
    $currentEvent
  );
  $: sameDD = $skillDB.getRoutinesByDD(routineData.doubleMiniDD, $currentEvent);
</script>

<!-- Title Section -->
<section>
  <div id="fullTitleSection">
    <div id="ddSquare">
      {getDDByEvent(routineData, $currentEvent)?.toFixed(1)}
    </div>
    <div id="titleAndTags">
      <h1>
        <strong>{routineData.skills.map((el) => el.FIG).join(" ")}</strong>
      </h1>
      <h2>
        <strong>{routineData.name}</strong>
      </h2>
    </div>
  </div>
</section>

<!-- Videos Section -->

{#if videos}
  <section>
    <VideoDisplay {videos}></VideoDisplay>
  </section>
{/if}

<!-- Same DD Section -->

{#if sameDD}
  <section>
    <h2>Same DD</h2>
    <RoutineGrid routineData={sameDD}></RoutineGrid>
  </section>
{/if}

<style>
  section {
    margin-bottom: 30px;
  }

  section > h2 {
    margin-bottom: 15px;
  }

  #fullTitleSection {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }

  #fullTitleSection h2 {
    color: var(--cds-hover-primary);
  }

  #ddSquare {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--cds-hover-primary);
    width: 130px;
    height: 130px;
    font-size: 55px;
    font-weight: bold;
    color: var(--cds-ui-background);
  }

  @media (max-width: 600px) {
    #fullTitleSection {
      flex-direction: column;
    }

    #ddSquare {
      height: 130px;
      width: 100%;
    }
  }
</style>
