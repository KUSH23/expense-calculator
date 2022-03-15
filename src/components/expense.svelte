<script>
  import { blur, slide, scale, fade, fly } from "svelte/transition";
  import { getContext } from "svelte";

  //   export let expense;
  //   let { name, amount, id } = expense;
  export let id;
  export let name = "";
  export let amount = 0;
  const removeExpense = getContext("remove");

  const setModifiedExpense = getContext("modify");
  // const dispatch = createEventDispatcher();

  let displayAmount = false;
  function toggleA() {
    displayAmount = !displayAmount;
  }
</script>

<article class="single-expense">
  <div class="expense-info">
    <h2>
      {name}
      <button class="amount-btn" on:click={toggleA}>
        <i class="fas fa-caret-down" /> I
      </button>
    </h2>
    {#if displayAmount}
      <h4 transition:slide>amount : ${amount}</h4>
    {/if}
  </div>
  <div class="expense-buttons">
    <button class="expense-btn edit-btn" on:click={setModifiedExpense(id)}>
      <i class="fas fa-pen" />
    </button>
    <button class="expense-btn delete-btn" on:click={removeExpense(id)}>
      <i class="fas fa-trash" />
    </button>
    <!-- <button
      class="expense-btn delete-btn"
      on:click={dispatch("delete", { id, name })}
    > 
    <i class="fas fa-trash" />
    </button> -->
  </div>
</article>
