<script lang="ts">
  import TileGrid from "./util/TileGrid.svelte";

  export let skillData: {
    name: string;
    FIGString: string;
  }[];
</script>

<TileGrid
  data={Object.values(skillData).map((el) => {
    return {
      title: el.FIGString,
      subtitle: el.name,
      link: `/skill/${encodeURIComponent(el.FIGString)}`,
    };
  })}
></TileGrid>
