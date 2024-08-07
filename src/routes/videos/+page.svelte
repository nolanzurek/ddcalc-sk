<script lang="ts">
  import {
    Dropdown,
    TextInput,
    Button,
    DataTable,
  } from "carbon-components-svelte";
</script>

<h1>Video Search</h1>

<!-- TODO: offload to component -->
<!-- TODO: use data to populate dropdowns instead of hardcoding -->

<section id="filters">
  <section id="search-bar">
    <TextInput />
    <Button size="field">Add Filter</Button>
  </section>
  <section id="dropdowns">
    <Dropdown id="select-event" label="Event" />
    <Dropdown id="select-countr" label="Country" />
  </section>
</section>

<style>
  #search-bar,
  #dropdowns {
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
