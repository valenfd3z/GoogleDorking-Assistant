<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" v-if="isOpen" @click.self="close">
    <div class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in">
      <!-- Header -->
      <div class="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur border-b border-gray-100 dark:border-gray-700">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fas fa-question-circle text-blue-600 dark:text-blue-400"></i>
          Guía de Uso
        </h2>
        <button 
          @click="close"
          class="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-8">
        <!-- Intro -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">¿Cómo usar el Constructor?</h3>
          <p class="text-gray-600 dark:text-gray-300">
            El Constructor de Consultas te permite crear búsquedas avanzadas de manera sencilla utilizando operadores específicos.
          </p>
        </div>
        
        <!-- Operators -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Operadores Disponibles</h3>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <code class="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">filetype:</code>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Busca tipos de archivo (pdf, doc, xls)</p>
            </div>
            
            <div class="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <code class="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">site:</code>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Busca en un sitio específico</p>
            </div>
            
            <div class="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <code class="text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">inurl:</code>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Busca términos en la URL</p>
            </div>
            
            <div class="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <code class="text-pink-600 dark:text-pink-400 font-bold bg-pink-50 dark:bg-pink-900/30 px-2 py-1 rounded">intitle:</code>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">Busca en el título de la página</p>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Consejos Pro</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <i class="fas fa-check-circle text-green-500 mt-1"></i>
              <span>Usa comillas para frases exactas: <code class="text-xs bg-gray-100 dark:bg-slate-700 px-1 rounded">"texto exacto"</code></span>
            </li>
            <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <i class="fas fa-check-circle text-green-500 mt-1"></i>
              <span>Excluye términos con guión: <code class="text-xs bg-gray-100 dark:bg-slate-700 px-1 rounded">-palabra</code></span>
            </li>
            <li class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <i class="fas fa-check-circle text-green-500 mt-1"></i>
              <span>Usa comodines (*) para variaciones de palabras</span>
            </li>
          </ul>
        </div>

        <!-- Examples -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ejemplos Prácticos</h3>
          <div class="space-y-4">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
              <h4 class="font-medium text-blue-900 dark:text-blue-100 mb-2">Documentos confidenciales</h4>
              <code class="block w-full bg-white dark:bg-slate-900 p-3 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300 border border-blue-100 dark:border-blue-900/50">filetype:pdf contraseña OR password</code>
            </div>
            
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
              <h4 class="font-medium text-purple-900 dark:text-purple-100 mb-2">Paneles de administración</h4>
              <code class="block w-full bg-white dark:bg-slate-900 p-3 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-purple-900/50">inurl:admin | inurl:login intitle:"admin"</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="sticky bottom-0 p-6 bg-gray-50 dark:bg-slate-800/95 border-t border-gray-100 dark:border-gray-700 flex justify-end rounded-b-2xl">
        <button 
          @click="close"
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
        >
          Entendido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
