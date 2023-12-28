<script lang="ts">
  import TileGrid from "./util/TileGrid.svelte";

  export let skillData: {
    name: string;
    FIG: string;
  }[];
</script>

<TileGrid
  data={Object.values(skillData).map((el) => {
    return {
      title: el.FIG,
      subtitle: el.name,
      link: `/skill/${encodeURIComponent(el.FIG)}`,
    };
  })}
></TileGrid>
