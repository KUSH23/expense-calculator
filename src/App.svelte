<script>
  // export let name;
  import Navbar from "./components/navbar.svelte";
  import expenseData from "./data/expenses";
  import Title from "./components/title.svelte";

  // let fruits = ["apple", "orange", "lemon"];
  let expenses = [...expenseData];
  console.log(expenses);
</script>

<Navbar />

<ul>
  {#each expenses as item}
    <Title title={item.name} />
  {/each}
</ul>

<style>
</style>
