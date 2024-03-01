<script lang="ts">
  export let flips: number;
  export let twists: number[];
</script>

<p>
  <span style="background: #eeeeee; padding: 10px">
    <span style="color:black">{flips * 4}</span>
    {#each twists as twist, i}
      <span
        style={`font-weight: bold;color:hsl(${i * (360 / twists.length)} 80% 60%);  -webkit-text-stroke-width: 0.5px;-webkit-text-stroke-color: black;`}
        >{twist}</span
      >
    {/each}</span
  >
</p>

<style>
  p {
    padding: 10px;
  }
</style>
