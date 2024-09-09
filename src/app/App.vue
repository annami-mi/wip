<script setup lang="ts">
import './styles/index.scss'
import {useSessionStore} from "@/entities/Session/model/stores";

const sessionStore = useSessionStore()
sessionStore.authUser()
console.log(sessionStore.token)
</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style>
