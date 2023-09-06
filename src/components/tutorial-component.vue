<template>
    <label class="title">{{ $t('tutorial')}}{{title}}</label>
    <label for="">Count: </label>
    <!-- aria-label: es para que el navegador pueda leer el input -->
    <!-- aria-roledescription: es para que el navegador pueda leer las imagenes -->

    <input type="text" id="count" aria-label="Ingresa la cuenta"/>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "tutorial"
}
</script>

<style scoped>
.title{
    font-style: italic;
}
</style>