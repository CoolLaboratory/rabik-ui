import { SvelteComponent } from "svelte";

export class Avatar extends SvelteComponent<{user: { displayName: string; photoURL?: string; [key: string]: any; }; as?: 'button'|'a'|'div';}> {}
