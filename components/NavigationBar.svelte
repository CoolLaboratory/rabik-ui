<script>
  /**@type {number}*/
  let x
</script>

<svelte:window bind:innerWidth={x}/>

<aside class="navigation-bar">

  {#if x > 600 && $$slots.start}
    <section>
      <slot name="start" />
    </section>
  {/if}

  <section>
    <slot></slot>
  </section>
  


  {#if x > 600 && $$slots.end}
    <section class="flex column justify-end">
      <slot name="end" />
    </section>
  {/if}

</aside>

