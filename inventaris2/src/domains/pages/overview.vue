<script setup>
import productList from '../../components/productlist.vue'
import { Allproducts } from '../store.js'

const products = Allproducts
</script>

<template>
    <productList :items="Allproducts" />
</template>