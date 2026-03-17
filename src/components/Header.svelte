<script lang="ts">
  import { onMount } from 'svelte';

  let isOpen = false;
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Mapa', href: '/mapa' },
    { name: 'Favoritos', href: '/favoritos' },
  ];
</script>

<nav class="duration-300 {scrolled ? 'fixed top-0 w-full z-50 shadow-md bg-white' : 'absolute bg-transparent'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <span class="text-2xl">🏖️</span>
        <span class="font-bold text-xl text-gray-800">Turismo Lebu</span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        on:click={() => isOpen = !isOpen}
        aria-label="Toggle menu"
      >
        {#if isOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    class="md:hidden fixed inset-0 top-16 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 {isOpen ? 'translate-x-0' : '-translate-x-full'}"
  >
    <div class="flex flex-col p-4 space-y-4">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors"
          on:click={() => isOpen = false}
        >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</nav>
