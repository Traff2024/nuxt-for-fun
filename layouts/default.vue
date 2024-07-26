<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container flex justify-between p-4 mx-auto">
        <nuxt-link to="/" class="font-bold">Merch</nuxt-link>
        <ul class="flex gap-4">
          <!-- <li><Nuxt-link to="/">Home</Nuxt-link></li>
          <li><Nuxt-link to="/about">About</Nuxt-link></li>
          <li>
            <Nuxt-link to="/products" class="btn-buy">Products</Nuxt-link>
          </li>
          <li><Nuxt-link to="/form">Contact</Nuxt-link></li>
          <li><Nuxt-link to="/dots">Dots Game</Nuxt-link></li> -->
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
