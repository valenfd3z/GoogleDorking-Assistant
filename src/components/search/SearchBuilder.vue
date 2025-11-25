<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue';
import ExampleQueries from './ExampleQueries.vue';

// Reactive state
const query = ref('');
const copied = ref(false);
const searchUrl = computed(() => 'https://www.google.com/search?q=' + encodeURIComponent(query.value.trim()));

// Methods
const updateSearchPreview = () => {
  // Additional logic if needed
};

const handleExampleQuery = (exampleQuery: string) => {
  query.value = exampleQuery;
  updateSearchPreview();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onUseExample = (query: string) => {
  handleExampleQuery(query);
};

const addOperator = (operator: string) => {
  const textarea = document.querySelector('.query-input') as HTMLTextAreaElement;
  if (!textarea) return;
  
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const before = text.substring(0, start);
  const after = text.substring(end);
  const selectedText = text.substring(start, end);
  
  let newText = '';
  let newCursorPos = start;
  
  switch (operator) {
    case 'AND':
      newText = before + ' AND ' + after;
      newCursorPos = start + 5;
      break;
    case 'OR':
      newText = before + ' OR ' + after;
      newCursorPos = start + 4;
      break;
    case 'filetype:':
      newText = before + 'filetype:' + after;
      newCursorPos = start + 9;
      break;
    case 'site:':
      newText = before + 'site:' + after;
      newCursorPos = start + 5;
      break;
    case 'intitle:':
      newText = before + 'intitle:"' + selectedText + '" ' + after;
      newCursorPos = start + (selectedText ? selectedText.length + 9 : 9);
      break;
    case 'inurl:':
      newText = before + 'inurl:' + after;
      newCursorPos = start + 6;
      break;

    case '""':
      newText = before + '"' + selectedText + '"' + after;
      newCursorPos = start + (selectedText ? selectedText.length + 2 : 2);
      break;
    case '()':
      newText = before + '(' + selectedText + ')' + after;
      newCursorPos = start + (selectedText ? selectedText.length + 2 : 2);
      break;
    default:
      newText = before + operator + after;
      newCursorPos = start + operator.length;
  }
  
  query.value = newText;
  updateSearchPreview();
  
  nextTick(() => {
    const newTextarea = document.querySelector('.query-input') as HTMLTextAreaElement;
    if (newTextarea) {
      newTextarea.focus();
      newTextarea.setSelectionRange(newCursorPos, newCursorPos);
    }
  });
};

const search = () => {
  if (query.value.trim()) {
    window.open(searchUrl.value, '_blank');
  }
};

const clearQuery = () => {
  query.value = '';
  updateSearchPreview();};

const copyToClipboard = async () => {
  if (!query.value.trim()) return;
  
  try {
    await navigator.clipboard.writeText(query.value);
    copied.value = true;
    showNotification('¡Consulta copiada al portapapeles!', 'success');
    setTimeout(() => { copied.value = false; }, 2000);
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
    showNotification('Error al copiar al portapapeles', 'error');
  }
};

const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  console.log(`[${type}] ${message}`);
};

// Lifecycle Hooks
onMounted(() => {
  const textarea = document.querySelector('.query-input') as HTMLTextAreaElement;
  if (textarea) textarea.focus();
});
</script>

<template>
  <div class="space-y-8">
    <!-- Main Query Builder Card -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300">
      <div class="p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-6">
          <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <i class="fas fa-magic text-blue-600 dark:text-blue-400 text-xl"></i>
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Constructor de Consultas</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Construye tu dork de Google seleccionando operadores</p>
          </div>
        </div>
        
        <!-- Operators Section -->
        <div class="mb-8">
          <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Operadores de Búsqueda</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="op in [
                { label: 'filetype:', icon: 'fa-file', color: 'blue' },
                { label: 'site:', icon: 'fa-globe', color: 'indigo' },
                { label: 'inurl:', icon: 'fa-link', color: 'purple' },
                { label: 'intitle:', icon: 'fa-heading', color: 'pink' },
                { label: 'ext:', icon: 'fa-file-code', color: 'cyan' }
              ]"
              :key="op.label"
              @click="addOperator(op.label)"
              class="group relative inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500/30 rounded-lg transition-all duration-200"
            >
              <i :class="['fas', op.icon, `text-${op.color}-500 group-hover:text-${op.color}-600`]"></i>
              <span class="font-mono text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-300">{{ op.label }}</span>
            </button>
          </div>
        </div>
        
        <!-- Input Area -->
        <div class="relative group mb-6">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur"></div>
          <div class="relative">
            <textarea 
              v-model="query"
              class="query-input w-full bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 rounded-xl border-0 ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-0 p-4 font-mono text-sm leading-relaxed shadow-inner min-h-[120px] resize-y transition-all"
              placeholder="Ej: contraseña admin filetype:pdf site:ejemplo.com"
              spellcheck="false"
              @input="updateSearchPreview"
            ></textarea>
            
            <!-- Quick Actions inside textarea -->
            <div class="absolute bottom-3 right-3 flex gap-2">
              <button 
                v-if="query"
                @click="clearQuery"
                class="p-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 shadow-sm"
                title="Limpiar"
              >
                <i class="fas fa-eraser text-base"></i>
              </button>
              <button 
                v-if="query"
                @click="copyToClipboard"
                class="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-sm"
                :title="copied ? '¡Copiado!' : 'Copiar'"
              >
                <i :class="['fas text-base', copied ? 'fa-check' : 'fa-copy']"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Main Actions -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button 
            @click="search"
            class="flex-1 btn-primary flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <i class="fas fa-search"></i>
            <span>Buscar en Google</span>
          </button>
        </div>
      </div>

      <!-- Preview Section -->
      <div class="bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-gray-700 p-4 sm:px-8 py-4">
        <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
          <i class="fas fa-eye"></i>
          <span class="uppercase tracking-wider font-semibold">Vista Previa</span>
        </div>
        <a 
          :href="searchUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block font-mono text-sm text-blue-600 dark:text-blue-400 hover:underline truncate transition-colors"
        >
          {{ searchUrl }}
        </a>
      </div>
    </div>
    
    <!-- ExampleQueries component -->
    <ExampleQueries @use-example="onUseExample" />
  </div>
</template>

<style scoped>
/* Custom scrollbar for textarea if needed */
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-track {
  background: transparent;
}
textarea::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
}
textarea::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.8);
}
</style>
