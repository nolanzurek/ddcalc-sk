<script lang="ts">
  import TileGrid from "./util/TileGrid.svelte";
  import { Direction } from "$lib/types/enums";

  export let skillData: {
    name: string;
    FIG: string;
    direction: Direction;
  }[];
</script>

<TileGrid
  data={Object.values(skillData).map((el) => {
    return {
      title: el.FIG,
      subtitle: el.name,
      link: `/skill/${
        el.direction ? (el.direction === Direction.Forward ? "f" : "b") : ""
      }${encodeURIComponent(el.FIG)}`,
    };
  })}
></TileGrid>
