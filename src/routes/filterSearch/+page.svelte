<script lang="ts">
  import {
    Dropdown,
    TextInput,
    Button,
    DataTable,
  } from "carbon-components-svelte";
  import CloseFilled from "carbon-icons-svelte/lib/CloseFilled.svelte";
  import SkillGrid from "$lib/components/SkillGrid.svelte";
  import type { SkillFilterFunction } from "$lib";
  import type { Skill } from "$lib/types/types";
  import { Event } from "$lib/types/enums";

  import { skillDB } from "../../../src/stores";
  import { Events } from "carbon-icons-svelte";

  import { eventEnumToText } from "$lib/functions/util/eventEnumToText";

  // TODO: this component is an absolute mess. Refactor it.

  type DropdownField = {
    id: keyof Skill;
    text: String;
    type: "number" | "text" | "boolean";
  };

  type Filter = {
    property: String;
    operator: String;
    skillFilterFunction: SkillFilterFunction;
    value: String | number;
    event?: Event;
  };

  let filters: Filter[] = [];

  let propertyIndex: any = 0;
  let operatorIndex: any = 0;
  let value: string | number = "";
  let localEvent: Event = Event.DoubleMini;

  let propertyError: boolean = false;
  let operatorError: boolean = false;
  let valueError: boolean = false;

  type OperatorFunction = (el1: any, el2: any) => boolean;

  function addFilter() {
    // guard statement for input error

    if (propertyIndex === 0) {
      propertyError = true;
      return;
    } else if (value === "") {
      valueError = true;
      return;
    }

    propertyError = false;
    valueError = false;

    const property_id =
      (fields
        .find((field) => field.id === propertyIndex)
        ?.id.valueOf() as keyof Skill) || "";
    const property_type =
      fields.find((field) => field.id === propertyIndex)?.type || "text";
    const current_value = property_type === "number" ? Number(value) : value;
    const operatorFunction: OperatorFunction =
      property_type === "number"
        ? numberic_operators[operatorIndex].f
        : text_operators[operatorIndex].f;

    const filter: SkillFilterFunction = (skill: Skill) =>
      operatorFunction(
        property_id === "DD"
          ? skill[property_id][localEvent as keyof Skill["DD"]]
          : skill[property_id],
        current_value
      );

    filters = [
      ...filters,
      {
        property: property_id,
        operator:
          property_type === "number"
            ? numberic_operators[operatorIndex].text
            : text_operators[operatorIndex].text,
        skillFilterFunction: filter,
        value: current_value,
        event: property_id === "DD" ? localEvent : undefined,
      },
    ];

    propertyIndex = 0;
    operatorIndex = 0;
    value = "";
  }

  const fields: DropdownField[] = [
    { id: "name", text: "Name", type: "text" },
    { id: "FIG", text: "Fig Notation", type: "text" },
    { id: "DD", text: "DD", type: "number" },
    { id: "shape", text: "Shape", type: "text" },
    { id: "twists", text: "Twists", type: "number" },
    { id: "flips", text: "Flips", type: "number" },
    { id: "direction", text: "Direction", type: "boolean" },
    // { id: "blind", text: "Blind", type: "boolean" },
  ];

  const numberic_operators = [
    {
      id: 0,
      text: "equals",
      f: (el1: number, el2: number): boolean => el1 === el2,
    },
    {
      id: 1,
      text: "does not equal",
      f: (el1: number, el2: number): boolean => el1 !== el2,
    },
    {
      id: 2,
      text: "is greater than",
      f: (el1: number, el2: number): boolean => el1 > el2,
    },
    {
      id: 3,
      text: "isn't less than",
      f: (el1: number, el2: number): boolean => el1 >= el2,
    },
    {
      id: 4,
      text: "is less than",
      f: (el1: number, el2: number): boolean => el1 < el2,
    },
    {
      id: 5,
      text: "isn't more than",
      f: (el1: number, el2: number): boolean => el1 <= el2,
    },
  ];

  // TODO: add some abstraction where the replaceall thing gets applied to the function. Currying?

  const text_operators = [
    {
      id: 0,
      text: "is",
      f: (el1: string, el2: string): boolean =>
        el1?.toLowerCase()?.replaceAll(" ", "")?.replaceAll("-", "") ===
        el2?.toLowerCase()?.replaceAll(" ", "")?.replaceAll("-", ""),
    },
    {
      id: 1,
      text: "is not",
      f: (el1: string, el2: string): boolean => el1 !== el2,
    },
    {
      id: 2,
      text: "does not contain",
      f: (el1: string, el2: string): boolean => !el1.includes(el2),
    },
    {
      id: 3,
      text: "contains",
      f: (el1: string, el2: string): boolean => el1.includes(el2),
    },
    {
      id: 4,
      text: "starts with",
      f: (el1: string, el2: string): boolean => el1.startsWith(el2),
    },
    {
      id: 5,
      text: "ends with",
      f: (el1: string, el2: string): boolean => el1.endsWith(el2),
    },
  ];

  const boolean_operators = [
    {
      id: 0,
      text: "is",
      f: (el1: boolean, el2: boolean): boolean => el1 === el2,
    },
    {
      id: 1,
      text: "is not",
      f: (el1: boolean, el2: boolean): boolean => el1 !== el2,
    },
  ];

  $: skillFilterFunctions = filters.map((filter) => filter.skillFilterFunction);
  $: data = $skillDB.getSkillsByFilter(skillFilterFunctions);
</script>

<h1>Skill Search</h1>

<!-- TODO: offload to component -->
<!-- TODO: use data to populate dropdowns instead of hardcoding -->

<section id="filters">
  <section id="filter-select-container">
    <Dropdown
      id="filter-select-property"
      label="Property"
      items={fields}
      bind:selectedId={propertyIndex}
      invalid={propertyError}
      let:item
      ><div>
        <strong>{item.text}</strong>
        <br />
        <em>{item.type}</em>
      </div></Dropdown
    >
    <!-- DD event dropdown -->
    {#if propertyIndex === "DD"}
      <Dropdown
        id="event-operator"
        label="Event"
        items={[
          { id: Event.DoubleMini, text: "Double Mini" },
          { id: Event.Trampoline, text: "Trampoline" },
          { id: Event.Tumbling, text: "Tumbling" },
        ]}
        bind:selectedId={localEvent}
      />
    {/if}

    <Dropdown
      id="filter-select-operator"
      label="Operator"
      items={fields.find((field) => field?.id === propertyIndex)?.type ===
      "number"
        ? numberic_operators
        : fields.find((field) => field?.id === propertyIndex)?.type === "text"
          ? text_operators
          : boolean_operators}
      bind:selectedId={operatorIndex}
    />
    <TextInput
      id="filter-select-value"
      bind:value
      invalid={valueError}
      invalidText="Please enter a value"
    />
    <Button on:click={addFilter} size="field">Add Filter</Button>
  </section>
  <section id="filter-list">
    <!-- Tag View -->
    <!-- {#each filters as filter}
      <Tag style="font-size: 16px;" filter on:close
        >{`${filter.property} ${filter.operator} ${filter.value}`}</Tag
      >
    {/each} -->

    {#if filters.length !== 0}
      <!-- number of results -->
      <p>
        {data.length} result{data.length === 1 ? "" : "s"} found.
      </p>
      <DataTable
        headers={[
          {
            key: "x",
            value: "",
            width: "50px",
          },
          {
            key: "property",
            value: "Property",
          },
          {
            key: "operator",
            value: "Operator",
          },
          {
            key: "value",
            value: "Value",
          },
          {
            key: "matches",
            value: "Matches",
          },
        ]}
        rows={filters.map((filter) => {
          return {
            id:
              "" +
                filter.property +
                filter.operator +
                filter.value +
                filter.event || "",
            property:
              filter.property === "DD"
                ? eventEnumToText(filter.event) + " DD"
                : filter.property,
            operator: filter.operator,
            value: filter.value,
            // TODO: this is a hacky way to get the number of matches
            // it is very inefficient
            matches: `${
              $skillDB.getSkillsByFilter([filter.skillFilterFunction]).length
            }`,
          };
        })}
      >
        <svelte:fragment slot="cell" let:cell let:row>
          {#if cell.key === "x"}
            <Button
              size="small"
              kind="ghost"
              iconDescription="Remove filter"
              icon={CloseFilled}
              on:click={() => {
                filters = filters.filter(
                  (filter) =>
                    (filter.property === "DD"
                      ? eventEnumToText(filter.event) + " DD"
                      : filter.property) !== row.property ||
                    filter.operator !== row.operator ||
                    filter.value !== row.value
                );
              }}
            ></Button>
          {:else}
            {cell.value}
          {/if}
        </svelte:fragment>
      </DataTable>
    {:else}
      No filters applied.
    {/if}
  </section>
</section>
<section id="data">
  <SkillGrid skillData={data} />
</section>

<style>
  #filter-select-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  section {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    #filter-select-container {
      flex-direction: column;
    }
  }

  :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
    height: auto;
  }
</style>
