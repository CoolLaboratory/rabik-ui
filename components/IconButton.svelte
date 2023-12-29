
<script>
  import { page } from "$app/stores";

  
  /**@type {'button'|'a'} */
  let tag = 'button'

  /**@type {string|null} */
  export let to = null

  /**@type {string} */
  export let icon

  export {tag as as}
</script>

<svelte:element 
  class="icon-button" 
  this={tag} 
  href={to} 
  role="button" 
  tabindex="0" {...$$restProps} 
  aria-current={to && $page.url.pathname === to || false }
  on:click 
  {...$$restProps}
>

  <span class="indicatore">
    <span class="material-symbols-rounded">{icon}</span>
  </span>

</svelte:element>


<style>

  .icon-button {
    aspect-ratio: 1;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: ButtonFace;
    color: currentColor;
    text-decoration: none;
    border-radius: 25px;
    overflow: hidden;
    padding: 0;
  }

  .icon-button .indicatore {
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
  /* .icon-button .indicatore svg { width: 24px; } */


  .icon-button .indicatore::before {
    position: absolute;
    inset: 0;
    content: "";
    transform-origin: center center;
    transition: transform .14s ease;
    transform: scale(.03, .03);  
  }
  .icon-button:hover .indicatore::before {
    background-color: rgb(29 27 32 / .08);
    transform: scale(1 ,1);  
  }
  .icon-button:active .indicatore::before {
    background-color: rgb(29 27 32 / .1);
    transform: scale(1 ,1);  
  }

  .icon-button[aria-current="true"] {
    background-color: var(--md-sys-color-secondary-container, rgb(56, 56, 180));
  }
  .icon-button[aria-current="true"] .material-symbols-rounded {
    font-variation-settings: 'FILL' 1;
  }
</style>
