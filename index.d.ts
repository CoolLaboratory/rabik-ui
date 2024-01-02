import { SvelteComponent } from "svelte";

export * from './components/DestinationLink/DestinationLink'
export * from './components/DatePicker/DatePicker'
export * from './components/Avatar/Avatar'

export class IconButton extends SvelteComponent<{as?: 'button'|'a'; to: string|null; label: string; }> {}

export class MyCounterButton extends SvelteComponent<{foo: string}> {}
export class Other extends SvelteComponent {}
