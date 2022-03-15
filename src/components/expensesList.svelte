<script>
  import SectionTitle from "./title.svelte";
  import Expense from "./expense.svelte";
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  export let expenses = [];
</script>

<section>
  <SectionTitle title="expense list" />
  <ul>
    {#each expenses as expense, index (expense.id)}
      <div transition:fly={{ x: 200, delay: index * 300 }} animate:flip>
        <Expense {...expense} />
      </div>
    {:else}
      <h2>no expenses added to the list!</h2>
    {/each}
  </ul>
</section>

<style>
  h2 {
    text-transform: capitalize;
  }
</style>
