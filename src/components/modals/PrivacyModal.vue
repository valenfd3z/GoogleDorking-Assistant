<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" v-if="isOpen" @click.self="close">
    <div class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in">
      <!-- Header -->
      <div class="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur border-b border-gray-100 dark:border-gray-700">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fas fa-shield-alt text-blue-600 dark:text-blue-400"></i>
          Política de Privacidad
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
        <!-- Section 1 -->
        <div class="space-y-3 pb-6 border-b border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">1</span>
            Descargo de Responsabilidad
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed pl-8">
            Esta herramienta está diseñada exclusivamente para fines educativos, de investigación en seguridad informática y pruebas de penetración autorizadas. El mal uso de esta herramienta puede violar leyes de privacidad y seguridad cibernética.
          </p>
        </div>
        
        <!-- Section 2 -->
        <div class="space-y-3 pb-6 border-b border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">2</span>
            Uso Aceptable
          </h3>
          <div class="pl-8">
            <p class="text-gray-600 dark:text-gray-300 mb-3">Al utilizar esta herramienta, aceptas:</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-check text-green-500 mt-1 text-sm"></i>
                <span>Utilizarla solo en sistemas sobre los que tengas autorización explícita</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-check text-green-500 mt-1 text-sm"></i>
                <span>Cumplir con todas las leyes y regulaciones aplicables</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-check text-green-500 mt-1 text-sm"></i>
                <span>No realizar actividades maliciosas o ilegales</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Section 3 -->
        <div class="space-y-3 pb-6 border-b border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">3</span>
            Privacidad y Datos
          </h3>
          <div class="pl-8">
            <p class="text-gray-600 dark:text-gray-300 mb-3">Esta aplicación respeta tu privacidad:</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-lock text-blue-500 mt-1 text-sm"></i>
                <span>No recopilamos ni almacenamos tus búsquedas</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-lock text-blue-500 mt-1 text-sm"></i>
                <span>No utilizamos cookies de seguimiento</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <i class="fas fa-lock text-blue-500 mt-1 text-sm"></i>
                <span>Todas las búsquedas se realizan directamente desde tu navegador</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Section 4 -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">4</span>
            Limitación de Responsabilidad
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed pl-8">
            Los desarrolladores de esta herramienta no se hacen responsables por el mal uso de la misma, daños causados por el uso inadecuado, o consecuencias legales derivadas de actividades no autorizadas.
          </p>
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
import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue';

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

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
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
