import { SvelteComponent } from "svelte";


/** 
 * DatePicker
 * 
 * props: min
 * props: max
 * props: lang
 */
export class DatePicker extends SvelteComponent<{min?: string; max?: string; lang?: string; value?: string}> {}
