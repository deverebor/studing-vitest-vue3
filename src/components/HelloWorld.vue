<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      create-vue </a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <section>
    <h1>Pokemon choose</h1>
    <ul :key="pokemon.id" v-for="pokemon in allPokemons">
      <li>{{ pokemon.name }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

interface IPokemon {
  id: number;
  name: string;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },

  setup({ msg }) {
    let allPokemons = ref([] as IPokemon[]);

    function getAllPokemons() {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=3")
        .then((res) => res.json())
        .then((data) => {
          return (allPokemons.value = data.results);
        });
    }

    onMounted(() => {
      getAllPokemons();
    });

    return {
      msg,
      count: ref(0),
      allPokemons,
      getAllPokemons,
    };
  },
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
