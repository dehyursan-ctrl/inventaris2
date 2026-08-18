<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const props = defineProps({
      newProduct : Object,
    })

const emit = defineEmits(['addProduct'])
const router = useRouter()
const submitProduct = () => {
  emit('addProduct', { ...form})
  router.push('/overview')
}
const form = reactive({
  ...props.newProduct
})
</script>
<template>
<form>
    <input v-model="form.name" />
    <input type="number" v-model.number="form.actualAmount" />
    <input type="number" v-model.number="form.minAmount" />
    <button  class="button-3" @click.prevent="submitProduct">Toevoegen</button>
    <button id="annuleren" class="button-3-2" @click="router.push('/overview')">Annuleren</button>
</form>
</template>