<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-lg bg-slate-900/80 border-b border-white/10 shadow-lg transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo and Title -->
        <div class="flex items-center gap-4">
          <div class="relative group">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
            <div class="relative w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-xl">
              <img src="/lupa-logo.svg" alt="Logo de Recon Expert" class="w-full h-full object-contain">
            </div>
          </div>
          
          <div class="flex flex-col">
            <h1 class="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
              Recon-Expert
            </h1>
            <h2 class="text-sm font-medium text-gray-300">Asistente de Google Dorking</h2>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <button 
            @click="mostrarAyuda = !mostrarAyuda"
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <i class="fas fa-info-circle"></i>
            <span class="hidden sm:inline">Ayuda</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tarjeta de ayuda -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="mostrarAyuda" class="absolute top-full right-0 left-0 bg-slate-800/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 sm:p-8">
        <div class="max-w-4xl mx-auto relative">
          <button 
            @click="mostrarAyuda = false"
            class="absolute top-0 right-0 text-gray-400 hover:text-white transition-colors"
          >
            <i class="fas fa-times text-xl"></i>
          </button>

          <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <i class="fas fa-graduation-cap text-blue-400"></i>
            Cómo usar Recon-Expert
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Section 1 -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-blue-300 flex items-center gap-2">
                <i class="fas fa-code"></i> Operadores
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li><strong class="text-blue-400">filetype:</strong> Tipos de archivo (pdf, doc)</li>
                <li><strong class="text-blue-400">site:</strong> Sitio específico</li>
                <li><strong class="text-blue-400">inurl:</strong> Palabras en URL</li>
                <li><strong class="text-blue-400">intitle:</strong> Palabras en título</li>
                <li><strong class="text-blue-400">ext:</strong> Extensión de archivo</li>
              </ul>
            </div>

            <!-- Section 2 -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-purple-300 flex items-center gap-2">
                <i class="fas fa-search"></i> Ejemplos
              </h4>
              <div class="space-y-3">
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-blue-500">
                  <p class="text-xs text-gray-400 mb-1">PDFs con contraseñas:</p>
                  <code class="text-xs font-mono text-blue-300">filetype:pdf contraseña</code>
                </div>
                <div class="bg-slate-900/50 p-3 rounded border-l-2 border-purple-500">
                  <p class="text-xs text-gray-400 mb-1">Paneles admin:</p>
                  <code class="text-xs font-mono text-purple-300">inurl:admin intitle:login</code>
                </div>
              </div>
            </div>

            <!-- Section 3 -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-green-300 flex items-center gap-2">
                <i class="fas fa-lightbulb"></i> Tips
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li class="flex items-start gap-2">
                  <i class="fas fa-check text-green-500 mt-1"></i>
                  <span>Usa comillas para <code class="text-xs bg-slate-900 px-1 rounded">"exacto"</code></span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check text-green-500 mt-1"></i>
                  <span>Excluye con guión <code class="text-xs bg-slate-900 px-1 rounded">-palabra</code></span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-check text-green-500 mt-1"></i>
                  <span>Usa <code class="text-xs bg-slate-900 px-1 rounded">OR</code> para múltiples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// TarjetaAnuncio removed as we integrated the help directly for better styling control
// import TarjetaAnuncio from '@/components/ui/AnnouncementCard.vue';

// Estado para controlar la visibilidad de la ayuda
const mostrarAyuda = ref(false);

// Definir los eventos que emite el componente
defineEmits(['mostrar-privacidad']);
</script>
