<script>
  import { page } from '$app/stores'
  

  /**@type {string} */
  export let to

  /**@type {string} */
  export let icon

  /**@type {string} */
  export let label
</script>


<a class="destination-link" href={to} {...$$restProps} aria-current={to && $page.url.pathname === to || false }>
    
  <span class="indicatore">
    <span class="material-symbols-rounded">{icon}</span>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"/></svg> -->
  </span>

  <span class="label small">{label ?? 'label'}</span>
</a>



<style>


  .destination-link {
    display: inline-grid;
    justify-items: center;
    gap: 8px;
    color: currentColor;
    text-decoration: none;
  }

  .destination-link .indicatore {
    position: relative;
    display: inline-grid;
    place-items: center;
    width: 56px;
    height: 32px;
    border-radius: 16px;
    background-color: Buttonface;
    overflow: hidden;
  }

  .destination-link .indicatore::before {
    position: absolute;
    inset: 0;
    content: "";
    transform-origin: 50% 50%;
    transition: transform .14s ease;
    transform: scale(.3, .8);  
  }

  .destination-link:hover .indicatore::before {
    background-color: rgba(0 0 0 / 0.08);
    transform: scale(1, 1);  
  }
  .destination-link:active .indicatore::before {
    background-color: rgb(0 0 0 / .1);
    transform: scale(1 ,1);  
  }

  .destination-link[aria-current="true"] .indicatore {
    background-color: var(--md-sys-color-secondary-container, rgb(56, 56, 180));
  }

  .destination-link[aria-current="true"] .material-symbols-rounded {
    font-variation-settings: 'FILL' 1;
  }
</style>