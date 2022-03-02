<script>
  import SectionTitle from "./title.svelte";
  import Expense from "./expense.svelte";
  // import App from "../App.svelte";
  // import Navbar from "./navbar.svelte";
  // import Title from "./title.svelte";
  export let expenses = [];
</script>

<section>
  <SectionTitle title="expense list" />
  <ul>
    {#each expenses as expense, index}
      <Expense {...expense} on:delete />
    {:else}
      <h2>no entries found!</h2>
    {/each}
  </ul>
</section>

<style>
  h2 {
    text-transform: capitalize;
  }
</style>
