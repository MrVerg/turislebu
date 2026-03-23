<script lang="ts">
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' },
    { name: 'Instagram', href: '#', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' },
    { name: 'Twitter', href: '#', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Mapa', href: '/mapa' },
    { name: 'Favoritos', href: '/favoritos' },
  ];
</script>

<footer class="bg-lebu-dark text-white border-t border-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- About -->
      <div>
        <h3 class="font-extrabold mb-6 flex items-center space-x-2">
          <img src="/logo.png" alt="Turismo Lebu Logo" class="h-20 md:h-24 w-auto object-contain brightness-0 invert" />
        </h3>
        <p class="text-gray-400 text-sm">
          Descubre la belleza natural de Lebu, Chile. Playas, montañas, cultura 
          y tradición te esperan en esta hermosa ciudad costera.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
        <ul class="space-y-2">
          {#each quickLinks as link}
            <li>
              <a
                href={link.href}
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
        <div class="flex space-x-4">
          {#each socialLinks as social}
            <a
              href={social.href}
              class="text-gray-400 hover:text-white transition-colors"
              title={social.name}
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 mt-8 pt-8 text-center">
      <p class="text-gray-400 text-sm">
        &copy; {currentYear} Turismo Lebu. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>
