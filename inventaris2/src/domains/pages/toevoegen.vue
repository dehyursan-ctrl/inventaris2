<script setup>
import { reactive } from 'vue'
import toevoeging from '../../components/toevoeging.vue'
import { addProduct } from '../store.js'
function addTheProduct(product) {
  addProduct(product)
}

const product = reactive({
  id: Date.now(),
  name: '',
  actualAmount: 0,
  minAmount: 0
})
</script>
<template>
    <toevoeging :newProduct="product" @addProduct="addTheProduct" />
</template>