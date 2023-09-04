<script setup>
import Category from "@/components/category-component.vue";
</script>

<template>
  <header>
  </header>

  <main>
      <category name="Math" content="This course you'll learn math" :tutorials="[{title:'Calculate 1'},{title:'Calculate 12'}]"/>
      <category name="Literature" content="Literature" :tutorials="[{title:'Spanish'},{title:'English'}]" />
      <category name="Biology" content="molecule structure" :tutorials="[{title:'Macromolecules'},{title:'Organic compounds'}]" />
      <category name="Psychology" content="the scientific study of the mind and behavior" :tutorials="[{title:'Behaviorist'},{title:'Behaviorist'}]"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
