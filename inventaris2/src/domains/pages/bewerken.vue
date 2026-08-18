<script setup>
import { computed } from 'vue'
import toevoeging from '../../components/toevoeging.vue'
import { useRoute } from 'vue-router'
import { products } from '../store.js'
import { updateProduct } from '../store.js'
const route = useRoute()
function updateTheProduct(product) {
  updateProduct(product)
}
const currentProduct = computed(() => {
  const productId = parseInt(route.params.id)
  return products.find(item => item.id === productId)
})
</script>
<template>
  <toevoeging :newProduct="currentProduct" @addProduct="updateTheProduct" />
</template>