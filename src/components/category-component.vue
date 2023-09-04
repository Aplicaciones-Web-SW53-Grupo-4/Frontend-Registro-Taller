<template>
    <div class="container">
      <label class="name">{{name}}</label>
      <label>{{content}}</label>
      <ul>
        <li v-for="tutorial in tutorials">
            <tutorial :title="tutorial.title" />
        </li>
      </ul>
  </div>
</template>

<script>
import Tutorial from "@/components/tutorial-component.vue";

export default {
    components: {Tutorial},
    props:{
        name : String,
        content: String,
        tutorials: Array
    },
    name: "category"
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    border: #222222;
    background-color: aquamarine;
    margin: 8px;
    padding: 8px;
}
.name {
   font-weight: bold;
    font-size: large;
}

</style>