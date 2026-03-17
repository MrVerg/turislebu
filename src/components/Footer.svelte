<script lang="ts">
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Mapa', href: '/mapa' },
    { name: 'Favoritos', href: '/favoritos' },
  ];
</script>

<footer class="bg-gray-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About -->
      <div>
        <h3 class="text-xl font-bold mb-4 flex items-center space-x-2">
          <span>🏖️</span>
          <span>Turismo Lebu</span>
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
              class="text-2xl hover:scale-110 transition-transform"
              title={social.name}
            >
              {social.icon}
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
