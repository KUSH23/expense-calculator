<script>
  // export let name;

  //components
  import { setContext } from "svelte";
  import Navbar from "./components/navbar.svelte";
  import ExpensesList from "./components/expensesList.svelte";

  //data
  import expenseData from "./data/expenses";

  //variables
  // let fruits = ["apple", "orange", "lemon"];
  let expenses = [...expenseData];

  //functions
  function removeExpense(id) {
    expenses = expenses.filter((item) => item.id != id);
  }

  setContext("remove", removeExpense);
</script>

<Navbar />

<main class="content">
  <ExpensesList {expenses} />
</main>

<style></style>
