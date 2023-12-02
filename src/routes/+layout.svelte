<script lang="ts">
  import { QueryClientProvider } from "@tanstack/svelte-query";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<svelte:head>
  <title>Hệ thống kiếm lúa Crypto</title>
</svelte:head>

<QueryClientProvider client={data.queryClient}>
  <slot />
</QueryClientProvider>
