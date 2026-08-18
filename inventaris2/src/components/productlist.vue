<script setup>
    const props = defineProps({
        items: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Naam</th>
                    <th>hoeveelheid</th>
                    <th>minimumhoeveelheid</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in items" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td><input type="number" v-model="product.actualAmount" /></td>
                    <td>{{ product.minAmount }}</td>
                    <td><button class="button-7" @click="$router.push(`/bewerken/${product.id}`)">Bewerken</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>