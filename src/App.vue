<template>
    <div>hello world</div>
</template>

<script lang="ts">
    import { Vue, Options } from "vue-class-component";
    @Options({
        created(){
            const a:string = '123'
            console.log(a)
        }
    })
    export default class App extends Vue {
        
    }
</script>