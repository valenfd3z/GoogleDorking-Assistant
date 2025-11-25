<template>
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col space-y-16 mb-8">
        <!-- About Section -->
        <div class="flex flex-col items-center text-center space-y-4">
          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">Acerca de</h4>
          <p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl">
            Recon-Expert es una herramienta diseñada para facilitar la creación de consultas avanzadas de Google (Dorks) para profesionales de seguridad y estudiantes.
          </p>
        </div>

        <!-- Contact Section -->
        <div class="flex flex-col items-center text-center space-y-4">
          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">Contacto</h4>
          <div class="flex flex-col space-y-3">
            <a 
              href="https://www.linkedin.com/in/marco-valentin-fernandez-741222352/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105 text-base px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/valenfd3z" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105 text-base px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              GitHub
            </a>
            <a 
              href="mailto:fernandezmarcovalentin@gmail.com" 
              class="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all hover:scale-105 text-base px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              Email
            </a>
          </div>
        </div>

        <!-- Links Section -->
        <div class="flex flex-col items-center text-center space-y-4">
          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">Enlaces</h4>
          <div class="flex flex-col space-y-3">
            <button 
              @click="$emit('show-help')"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105 text-base font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Ayuda
            </button>
            <button 
              @click="$emit('show-privacy')"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105 text-base font-medium px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Política de Privacidad
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-500">
          &copy; 2026 Recon-Expert. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineEmits(['show-help', 'show-privacy']);
</script>
