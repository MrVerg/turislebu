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

<nav class="duration-500 transition-all {scrolled ? 'fixed top-0 w-full z-50 shadow-lg bg-white/80 backdrop-blur-md py-1' : 'absolute w-full z-50 bg-transparent py-4'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-2 h-auto">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 group shrink-0">
        <img src="/logo.png" alt="Turismo Lebu Logo" class="h-28 md:h-40 w-auto object-contain transition-transform group-hover:scale-105" />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-1">
        {#each navLinks as link}
          <a
            href={link.href}
            class="{scrolled ? 'text-gray-700 hover:text-lebu-magenta' : 'text-gray-100 hover:text-white hover:bg-white/20'} font-semibold px-4 py-2 rounded-full transition-all duration-300"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-lg {scrolled ? 'text-lebu-dark hover:bg-gray-100' : 'text-white hover:bg-white/20'} transition-colors"
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
