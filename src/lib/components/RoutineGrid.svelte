<script lang="ts">
  import TileGrid from "./util/TileGrid.svelte";

  export let routineData: {
    name: string;
    skills: string[];
  }[];
</script>

<TileGrid
  data={Object.values(routineData).map((el) => {
    return {
      title: el.skills.join(" "),
      subtitle: el.name,
      link: `/routine/${encodeURIComponent(el.skills.join(" "))}`,
    };
  })}
></TileGrid>
