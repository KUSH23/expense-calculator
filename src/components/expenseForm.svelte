<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  // onMount(() => {
  //   console.log("form has mounted");
  // });
  // onDestroy(() => {
  //   console.log("form is hidden");
  // });
  // beforeUpdate(() => {
  //   console.count("before update");
  // });
  // afterUpdate(() => {
  //   console.count("after Update");
  // });

  import Title from "./Title.svelte";
  export let name = "";
  export let amount = null;
  export let addExpense;
  export let isEditing;
  export let editExpense;
  export let hideForm;

  $: isEmpty = !name || !amount;

  function handleSubmit(e) {
    if (isEditing) {
      editExpense({ name, amount });
    } else {
      addExpense({ name, amount });
    }

    name = "";
    amount = null;
    hideForm();
  }
</script>

<section class="form">
  <Title title="add expense" />
  <form class="expense-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-control">
      <label for="name">name</label>
      <input type="text" id="name" bind:value={name} />
    </div>
    <div class="form-control">
      <label for="amount">amount</label>
      <input type="number" id="amount" bind:value={amount} />
    </div>
    {#if isEmpty}
      <p class="form-empty">please fill out all form fields</p>
    {/if}
    <button
      type="submit"
      class="btn btn-block"
      class:disabled={isEmpty}
      disabled={isEmpty}
    >
      {#if isEditing}
        edit expense
      {:else}
        add expense
      {/if}
    </button>
    <button type="button" class="close-btn" on:click={hideForm}>
      <i class="fas fa-times" />
      close
    </button>
  </form>
</section>
