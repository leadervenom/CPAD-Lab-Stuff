import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useTodosStore = defineStore('todos', () => {
 // -------- state --------
 const items = ref([
 { id: 1, text: 'Finish Chapter 7 lab', done: false, notes: '' },
 { id: 2, text: 'Commit code to Git', done: false, notes: '' },
 ])
 // -------- getters --------
 const total = computed(() => items.value.length)
 const doneCount = computed(() => items.value.filter(t => t.done).length)
 const activeCount = computed(() => total.value - doneCount.value)
 // -------- actions --------
 function add(text) {
 const clean = text.trim()
 if (!clean) return
 items.value.push({
 id: Date.now(),
 text: clean,
 done: false,
 notes: ''
 })
 }
 function remove(id) {
 items.value = items.value.filter(t => t.id !== id)
 }
 function toggle(id) {
 const t = items.value.find(t => t.id === id)
 if (t) t.done = !t.done
 }
 function updateNotes(id, notes) {
 const t = items.value.find(t => t.id === id)
 if (t) t.notes = notes
 }
 function getById(id) {
 return items.value.find(t => t.id === Number(id))
 }
 return { items, total, doneCount, activeCount,
 add, remove, toggle, updateNotes, getById }
})