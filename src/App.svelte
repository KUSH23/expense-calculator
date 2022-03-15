<script>
  // export let name;
  import { setContext } from "svelte";
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  //components
  import Navbar from "./components/navbar.svelte";
  import ExpensesList from "./components/expensesList.svelte";
  import Totals from "./components/totals.svelte";
  import ExpenseForm from "./components/expenseForm.svelte";
  import Modal from "./misc/Model.svelte";
  //data
  // import expenseData from "./data/expenses";
  import { current_component } from "svelte/internal";

  //variables
  // let fruits = ["apple", "orange", "lemon"];
  let expenses = [];

  let setId = null;
  let setName = "";
  let setAmount = null;

  let isFormOpen = false;

  $: isEditing = setId ? true : false;
  $: total = expenses.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);
  //functions
  function showForm() {
    isFormOpen = true;
  }

  function hideForm() {
    isFormOpen = false;
    setId = null;
    setAmount = null;
    setName = "";
  }

  function removeExpense(id) {
    expenses = expenses.filter((item) => item.id != id);
  }

  function clearExpenses() {
    expenses = [];
  }

  function addExpense({ name, amount }) {
    let expense = {
      id: Math.floor(Math.random() * Date.now()),
      name,
      amount,
    };
    expenses = [expense, ...expenses];
  }

  function setModifiedExpense(id) {
    let expense = expenses.find((item) => item.id === id);

    setId = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
    showForm();
  }

  function editExpense({ name, amount }) {
    expenses = expenses.map((item) => {
      return item.id === setId ? { ...item, name, amount } : { ...item };
    });
    setId = null;
    setAmount = null;
    setName = "";
  }

  // function deleteExpense(event) {
  //   const { id, name } = event.detail;
  //   console.log(name);
  //   removeExpense(id);
  // }

  setContext("remove", removeExpense);
  setContext("modify", setModifiedExpense);

  function setLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  onMount(() => {
    expenses = localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : [];
  });
  afterUpdate(() => {
    setLocalStorage();
  });
</script>

<Navbar {showForm} />

<main class="content">
  {#if isFormOpen}
    <Modal>
      <ExpenseForm
        {addExpense}
        name={setName}
        amount={setAmount}
        {isEditing}
        {editExpense}
        {hideForm}
      />
    </Modal>
  {/if}
  <Totals title="total expenses" {total} />
  <ExpensesList {expenses} />
  <button
    type="button"
    class="btn btn-primary btn-block"
    on:click={clearExpenses}
  >
    clear expenses
  </button>
</main>

<style></style>
