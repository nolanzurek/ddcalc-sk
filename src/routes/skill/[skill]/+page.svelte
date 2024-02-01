<script lang="ts">
  import { skillDB } from "../../../stores";
  import { currentEvent } from "../../../stores";

  import { findVideoSkill } from "$lib/bloat/findVideo";

  import SameDDGrid from "$lib/components/SkillGrid.svelte";
  import NotableRoutinesGrid from "$lib/components/RoutineGrid.svelte";
  import SkillTitleSection from "$lib/components/SkillTitleSection.svelte";
  import VideoDisplay from "$lib/components/VideoDisplay.svelte";

  import type { Direction } from "$lib/types/enums";

  //import onmount
  import { onMount } from "svelte";

  export let data;

  $: skillData = $skillDB.generateSkill(
    decodeURIComponent(data.skill),
    $currentEvent,
    data.direction
  );
  // TODO: make all these depend on event
  $: videos = findVideoSkill(
    skillData.FIG,
    $currentEvent,
    data.direction || skillData.direction
  );
  $: namedRoutines = $skillDB.getNamedRoutines(
    skillData.FIG,
    $currentEvent,
    data.direction || skillData.direction
  );
  $: sameDD = $skillDB
    .getSkillsByDD(skillData.DD[$currentEvent], $currentEvent)
    .filter((skill) => skill.dominant)
    .map((skill) => {
      return {
        name: skill.name,
        FIG: skill.FIG,
        direction: skill.direction,
      };
    });
</script>

<!-- Title Section -->

<section>
  <SkillTitleSection {skillData} currentEvent={$currentEvent} />
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
    <SameDDGrid skillData={sameDD} />
  </section>
{/if}

<!-- named routine section -->

{#if namedRoutines.length > 0}
  <section>
    <h2>Notable Routines</h2>
    <NotableRoutinesGrid routineData={namedRoutines} />
  </section>
{/if}

<style>
  section {
    margin-bottom: 30px;
  }

  section > h2 {
    margin-bottom: 15px;
  }
</style>
