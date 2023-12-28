<script>
  import "carbon-components-svelte/css/all.css";
  import { TextInput, Dropdown } from "carbon-components-svelte";

  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  import { Event, InputType } from "$lib/types/enums";

  import { currentEvent } from "../../stores";

  import { getInputType } from "$lib/functions/util/getInputType";

  // refactor this messs TODO
  const eventSelection = [
    Event.Trampoline,
    Event.DoubleMini,
    Event.Tumbling,
  ].map((el) => {
    return {
      id: el,
      text: el,
    };
  });

  // refactor this mess TODO
  let input = "";
</script>

<div id="inputBar" style="display: flex">
  <TextInput
    hideLabel
    on:keydown={(e) => {
      const inputType = getInputType(input);
      if (e.key === "Enter" && browser) {
        switch (inputType) {
          case InputType.Routine:
            goto(`/routine/${encodeURIComponent(input)}`);
            break;
          case InputType.Skill:
            goto(`/skill/${encodeURIComponent(input)}`);
            break;
          default:
            break;
        }
      }
    }}
    labelText="Skill or Routine"
    placeholder="Enter a skill or routine here"
    autocorrect="off"
    autocomplete="off"
    autocapitalize="off"
    spellcheck="false"
    bind:value={input}
  />
  <Dropdown
    hideLabel
    titleText="Choose Event"
    items={eventSelection}
    type="inline"
    bind:selectedId={$currentEvent}
  ></Dropdown>
</div>

<style>
  @media (max-width: 600px) {
    div {
      flex-direction: column;
    }
  }
</style>
