<script>
  import { createEventDispatcher } from 'svelte';
  import translations from './DatePicker.json';
  import './DatePicker.css';

  export let value = ''
  export let lang = 'en-US'
  
  const dispatch = createEventDispatcher();

  const today_DateObject = new Date() 

  /**
   * 
   * @param {string|number} year
   * @param {string|number} month
   * @param {string|number} date
   */
  const valueFormater = (year, month, date) => {
    if(!Number(year) || !Number(month) || !Number(date)) throw new Error('Dates are NO Numbers.')

    return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`
  }

  /** @param {Date} date */
  const lastDayOfMonth = (date) => new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    );
  
  

  let currentYear = '2024'
  let currentMont = '01'
  let currentDate = '02'
  
  
  $: displayLang = translations[lang] || translations['en-US']

  $: weekDays = displayLang.daysOfWeek.shortFormat
	$: month = displayLang.months.nominativeCase[(new Date()).getMonth()]


  
  $: monthInView_DateObject = today_DateObject
  $: monthInView_index = monthInView_DateObject.getMonth()

  $: pastMonthsDays = Array.from(Array(monthInView_DateObject.getDay()));
  $: daysOfMonth = Array.from(
    Array(Number(lastDayOfMonth(monthInView_DateObject).getDate()))
  );

  
  const isToday = (date) => date === monthInView_DateObject.getDate();
  const isPastDate = (date) => date < monthInView_DateObject.getDate();
</script>



<div class="date-picker">
  <header>
    <section class="toolbar">
      <button>
        <span style="display: contents;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </span>
      </button>
      
      <span class="title large" style="color: CanvasText;">{month}</span>
    
      <button>
        <span style="display: contents;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
        </span>
      </button>
    </section>

    <section class="days py">
      {#each weekDays as weekDay}
         <span>{weekDay}</span>
      {/each}
    </section>
  </header>

  <main>
    {#each pastMonthsDays as pastDay}<span />{/each}
    {#each daysOfMonth as day, i}
      {@const date = i + 1}
      <button 
        class:today={isToday(date)}
        data-date={valueFormater(2024, 1, date)}
        disabled={isPastDate(date)}
        on:click={ () => {
          value = valueFormater(2024, 1, date)
          dispatch('change', {value}); 
        }}
      >{date}</button>
    {/each}
  </main>

  <footer class="py text-center">
    <p class="body small" style="color: GrayText;">Select the date you like to leave.</p>
  </footer>
</div>

