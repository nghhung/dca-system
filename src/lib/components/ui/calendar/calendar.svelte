<script lang="ts">
  import { Calendar as CalendarPrimitive } from "bits-ui";
  import * as Calendar from ".";
  import { cn } from "$lib/utils/style";

  type $$Props = CalendarPrimitive.Props;

  type $$Events = CalendarPrimitive.Events;

  export let value: $$Props["value"] = undefined;
  export let weekdayFormat: $$Props["weekdayFormat"] = "short";

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<CalendarPrimitive.Root
  bind:value
  {weekdayFormat}
  class={cn("p-3", className)}
  {...$$restProps}
  on:keydown
  let:months
  let:weekdays
>
  <Calendar.Header>
    <Calendar.PrevButton />
    <Calendar.Heading />
    <Calendar.NextButton />
  </Calendar.Header>
  <Calendar.Months>
    {#each months as month}
      <Calendar.Grid>
        <Calendar.GridHead>
          <Calendar.GridRow class="flex">
            {#each weekdays as weekday}
              <Calendar.HeadCell>
                {weekday.slice(0, 2)}
              </Calendar.HeadCell>
            {/each}
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody>
          {#each month.weeks as weekDates}
            <Calendar.GridRow class="w-full mt-2">
              {#each weekDates as date}
                <Calendar.Cell {date}>
                  <Calendar.Day {date} month={month.value} />
                </Calendar.Cell>
              {/each}
            </Calendar.GridRow>
          {/each}
        </Calendar.GridBody>
      </Calendar.Grid>
    {/each}
  </Calendar.Months>
</CalendarPrimitive.Root>
