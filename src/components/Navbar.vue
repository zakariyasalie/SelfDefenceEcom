<!-- src/components/Navbar.vue -->
<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}
ul {
  list-style: none;
  display: flex;
  gap: 10px;
}
li {
  margin: 0;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
}
</style>
