<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useTemaStore } from '@/stores/theme';
import AppHeader from '@/components/AppHeader.vue';
import SearchBuilder from '@/components/search/SearchBuilder.vue';
import AppFooter from '@/components/AppFooter.vue';
import HelpModal from '@/components/modals/HelpModal.vue';
import PrivacyModal from '@/components/modals/PrivacyModal.vue';

export default defineComponent({
  name: 'Aplicacion',
  components: {
    AppHeader,
    SearchBuilder,
    AppFooter,
    HelpModal,
    PrivacyModal
  },
  setup() {
    // Estado de los modales
    const mostrarModalAyuda = ref(false);
    const mostrarModalPrivacidad = ref(false);

    // Usar el store de tema
    const tiendaTema = useTemaStore();

    // Inicializar tema al cargar
    onMounted(() => {
      tiendaTema.inicializarTema();
    });

    return {
      mostrarModalAyuda,
      mostrarModalPrivacidad,
      tiendaTema
    };
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <AppHeader />
    
    <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBuilder />
    </main>
    
    <AppFooter 
      @show-help="mostrarModalAyuda = true"
      @show-privacy="mostrarModalPrivacidad = true"
    />
    
    <button 
      id="cambiar-tema" 
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900" 
      @click="tiendaTema.alternarTema"
      :aria-label="tiendaTema.tema === 'oscuro' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
      :title="tiendaTema.tema === 'oscuro' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    >
      <i :class="['fas', tiendaTema.tema === 'oscuro' ? 'fa-sun' : 'fa-moon']"></i>
      <span class="sr-only">Cambiar tema</span>
    </button>
    
    <!-- Modales -->
    <Transition name="fade">
      <HelpModal v-if="mostrarModalAyuda" @close="mostrarModalAyuda = false" />
    </Transition>
    <Transition name="fade">
      <PrivacyModal v-if="mostrarModalPrivacidad" @close="mostrarModalPrivacidad = false" />
    </Transition>
  </div>
</template>

<style>
/* Global transitions handled by Tailwind utility classes where possible */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
