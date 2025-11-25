<template>
  <section class="mt-12">
    <div class="flex items-center gap-3 mb-6">
      <div class="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
        <i class="fas fa-lightbulb text-yellow-600 dark:text-yellow-400 text-xl"></i>
      </div>
      <div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">Ejemplos de Búsqueda</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Haz clic en una tarjeta para probar el dork</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(example, index) in examples" 
        :key="index"
        class="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/30 cursor-pointer transition-all duration-300 hover:-translate-y-1"
        @click="useExample(example.query)"
      >
        <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="fas fa-arrow-right text-blue-500 transform -translate-x-2 group-hover:translate-x-0 transition-transform"></i>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {{ example.title }}
        </h3>
        
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {{ example.description }}
        </p>
        
        <div class="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-3 border border-gray-100 dark:border-gray-700/50 group-hover:border-blue-100 dark:group-hover:border-blue-500/20 transition-colors">
          <code class="text-xs font-mono text-blue-600 dark:text-blue-400 break-all">
            {{ example.query }}
          </code>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['use-example']);

const examples = ref([
  {
    title: 'Documentos con contraseñas',
    description: 'Encuentra documentos PDF que puedan contener contraseñas.',
    query: 'filetype:pdf inurl:contraseña OR password'
  },
  {
    title: 'Archivos de configuración',
    description: 'Busca archivos de configuración expuestos en directorios web.',
    query: 'intitle:"index of" ".env" | ".htaccess"'
  },
  {
    title: 'Paneles phpMyAdmin',
    description: 'Localiza paneles de administración de bases de datos MySQL.',
    query: 'inurl:phpmyadmin intitle:phpMyAdmin'
  },
  {
    title: 'Paneles de WordPress',
    description: 'Encuentra paneles de administración de WordPress.',
    query: 'inurl:wp-login.php | inurl:wp-admin'
  },
  {
    title: 'Páginas de inicio de sesión',
    description: 'Localiza formularios de inicio de sesión en sitios web.',
    query: 'intitle:"login" | intitle:"sign in" | inurl:login | inurl:signin'
  },
  {
    title: 'Listados de directorios',
    description: 'Encuentra directorios con listado de archivos habilitado.',
    query: 'intitle:"index of" "parent directory"'
  }
]);

const useExample = (query: string) => {
  emit('use-example', query);
  // Desplazarse suavemente hacia arriba
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
