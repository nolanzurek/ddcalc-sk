<script lang="ts">
  export let flips: number;
  export let twists: number[];

  $: totalTwists = twists.reduce((a, b) => a + b);
</script>

<div class="chip-container">
  <span>
    <span class="flip-digit">{flips * 4}</span>
    {#each twists as twist, i}
      <span
        style={`background:hsl(${(360 * (totalTwists - twist)) / (totalTwists + 1) || 0} 100% 75% / ${twist !== 0 ? 0.5 + (0.5 * twist) / totalTwists : 0});`}
        >{twist !== 0 ? twist : "-"}</span
      >
    {/each}</span
  >
</div>

<style>
  .chip-container {
    background: #eeeeee;
    font-size: 1.2em;
    margin: 5px;
    padding: 15px;
  }

  .flip-digit {
    color: black;
    font-weight: bold;
  }
</style>
