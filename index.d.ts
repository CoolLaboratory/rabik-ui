import { SvelteComponent } from "svelte";

export class Avatar extends SvelteComponent<{user: { displayName: string; photoURL?: string; [key: string]: any; }; as?: 'button'|'a'|'div';}> {}
export class DestinationLink extends SvelteComponent<{to: string; icon: string; label: string}> {}
export class IconButton extends SvelteComponent<{as?: 'button'|'a'; to: string|null; label: string; }> {}

export class MyCounterButton extends SvelteComponent<{foo: string}> {}
export class Other extends SvelteComponent {}
