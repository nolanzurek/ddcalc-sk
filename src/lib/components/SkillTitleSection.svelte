<script lang="ts">
  import { Tag , Dropdown } from "carbon-components-svelte";
  import { Direction, type Event } from "$lib/types/enums";
  import getDDByEvent from "../../../src/lib/functions/util/getDDByEvent";
  import shapeEnumToText from "$lib/functions/util/shapeEnumToText";
  import type { Skill } from "$lib/types/types";

  export let skillData: Skill;
  export let currentEvent: Event;

  export let currentDirection: Direction = skillData.direction;
</script>

<!-- TODO: abstract all of the ternaries into functions -->

<div id="fullTitleSection">
  <div id="ddSquare">
    {getDDByEvent(skillData, currentEvent)?.toFixed(1)}
  </div>
  <div id="titleAndTags">
    <div id="titleAndDirectionDropdown">
      <h1><strong>{skillData.name}</strong></h1>
      <Dropdown bind:selectedId={currentDirection} items={[{id: Direction.Forward, text: "Forward"}, {id: Direction.Backward, text: "Backward"}]}
      type="inline" />
    </div>
    <h2><strong>{skillData.FIG}</strong></h2>
    <div id="tags">
      <Tag style="font-size: 15px">{shapeEnumToText(skillData.shape)}</Tag>
      <Tag style="font-size: 15px">
        {skillData.direction}
      </Tag>
      <Tag style="font-size: 15px">
        {`${skillData.flips} flip${skillData.flips === 1 ? "" : "s"}`}
      </Tag>
      <Tag style="font-size: 15px">
        {`${skillData.twists} twist${skillData.twists === 1 ? "" : "s"}`}
      </Tag>
      {#if skillData.blind}
        <Tag style="font-size: 15px">Blind</Tag>
      {/if}
    </div>
  </div>
</div>

<style>
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

  #titleAndDirectionDropdown {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
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
