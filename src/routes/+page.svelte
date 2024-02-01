<script>
  import "carbon-components-svelte/css/all.css";

  import InputBar from "$lib/components/InputBar.svelte";
  // TODO: use utility functions here to make this cleaner
  // TODO: make this input work for routines and sets too
</script>

<h1>Welcome to <strong>ddcalc.net</strong></h1>
<p>
  <b>ddcalc.net</b> provides various tools for calculating and interacting with
  technical information for trampoline gymnastics. Learn more about us on our
  <a href="/about">about page</a>.
</p>
<p>
  Familiar with FIG trampoline notation? Try entering a skill in FIG below, or a
  bunch of skills (separated by spaces or commas) to form a routine. Not
  familiar with FIG notation? Try using the <a href="/filterSearch"
    >filter search page</a
  > to search for skills
</p>
<InputBar></InputBar>
<p></p>

<style>
  h1,
  p {
    margin-bottom: 20px;
  }
</style>
