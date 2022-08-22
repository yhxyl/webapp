<template>
  <router-view />
</template>

<script lang="ts">
    import { Vue, Options } from "vue-class-component";
    @Options({
        created() {
            const test: string = 'yhxyl'
            console.log(test)
        }
    })
    export default class App extends Vue {
        
    }
</script>