<template>
  <section class="wrap">
    <h1>Todos</h1>

    <form @submit.prevent="submit" class="add-form">
      <input
        v-model="text"
        placeholder="What needs doing?"
        autofocus
      />

      <button
        type="submit"
        :disabled="!text.trim()"
      >
        Add
      </button>
    </form>

    <p v-if="store.total === 0" class="empty">
      Nothing yet — add your first todo above.
    </p>

    <ul v-else class="list">
      <TodoItem
        v-for="t in store.items"
        :key="t.id"
        :todo="t"
        @toggle="store.toggle"
        @remove="store.remove"
      />
    </ul>

    <p class="stats">
      {{ store.activeCount }} active ·
      {{ store.doneCount }} done ·
      {{ store.total }} total
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'
import TodoItem from '@/components/TodoItem.vue'

const store = useTodosStore()
const text = ref('')

function submit() {
  store.add(text.value)
  text.value = ''
}
</script>

<style scoped>
.wrap {
  max-width: 520px;
  margin: 2rem auto;
  padding: 1rem;
}

h1 {
  color: #35495e;
}

.add-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.add-form input {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
}

.add-form button {
  background: #42b883;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.add-form button:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
}

.list {
  list-style: none;
  padding: 0;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.empty {
  color: #64748b;
  font-style: italic;
}

.stats {
  margin-top: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  text-align: center;
}
</style>