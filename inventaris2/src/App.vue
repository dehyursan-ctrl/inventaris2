<script>
import { RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <button class="button-38" @click="$router.push('/overview')">Overzicht</button>
        <button class="button-38" @click="$router.push('/toevoegen')">Toevoegen</button>
        <button class="button-38" @click="$router.push('/bestellen')">Bestellen</button>
    </nav>
    <main>
        <router-view />
    </main>
</template>
    