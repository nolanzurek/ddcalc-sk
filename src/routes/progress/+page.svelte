<script>
  import progressData from "../../lib/bloat/progress (MANUAL UPDATE).json";
  import { goto } from "$app/navigation";

  $: dismounts = [
    ...new Set(
      Object.keys(progressData).flatMap((mount) =>
        Object.keys(progressData[mount])
      )
    ),
  ];

  $: {
    console.log(dismounts);
  }
</script>

<h1>Routine Logging Progress</h1>
<br />
<br />
<h2>Double-Mini</h2>
<br />

<table>
  <tr>
    {#each ["-", ...Object.keys(progressData)] as mount}
      <th>{mount}</th>
    {/each}
  </tr>
  {#each dismounts as dismount}
    <tr>
      <td class="rowTitle">{dismount}</td>
      {#each Object.keys(progressData) as mount}
        <td
          style={`background: hsl(${
            (100 + Math.log(progressData[mount][dismount] || 0) * 70) % 360
          }, 80%, 80%)`}
        >
          {#if progressData[mount][dismount]}
            <a href={`/routine/${encodeURIComponent(`${mount} ${dismount}`)}`}>
              {progressData[mount][dismount]}
            </a>
          {:else}
            -
          {/if}
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  th,
  .rowTitle {
    background-color: #333333;
    color: white;
  }

  a {
    color: black;
  }
</style>
