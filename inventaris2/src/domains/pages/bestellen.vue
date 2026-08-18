<script setup>
import productlist from '../../components/productlist.vue'
import alldone from '../../components/alldone.vue'
import { Allproducts } from '../store.js'
import { computed } from 'vue'
const tooLow = computed(() => {
    return Allproducts.value.filter(product => product.actualAmount < product.minAmount)
})

</script>
<template>
<productlist v-if="tooLow.length > 0" :items="tooLow"/>
<alldone v-else />
</template>