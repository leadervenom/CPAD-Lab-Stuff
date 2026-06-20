<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  color: #1f2937;
}

header {
  background: #35495e;
  padding: 1rem;
}

nav {
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}

nav a.router-link-active {
  color: #42b883;
}
</style>