<script lang="ts">


let tag: 'button'|'a'|'div' = 'button'

export let user: { displayName: string; photoURL?: string; [key: string]: any; }


$: [first, last] = user.displayName.split(' ')
$: fallback = first[0] + last[0]

</script>

<svelte:element this={tag} class="avatar">
  <span class="indicatore">
    
    {#if user.photoURL}
       <!-- content here -->
       <img src={user.photoURL} alt={user.displayName}>
    {:else}
       <span class="fallback">{fallback}</span>
    {/if}
  </span>
</svelte:element>

<style lang="postcss">

  .avatar {
    aspect-ratio: 1;
    inline-size: 40px;
    block-size: 40px;
    border-radius: 25px;
    padding: 0;
    overflow: hidden;

    & .indicatore {
      position: relative;
      display: inline-grid;
      grid-template-areas: 'stack';
      place-items: center;
      width: 100%;
      height: 100%;

      &::before {
        position: absolute;
        inset: 0;
        content: "";
        transform-origin: 50% 50%;
        transition: transform .14s ease;
        transform: scale(.3, .3);  


      }

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  

  .fallback { grid-area: stack; }

</style>