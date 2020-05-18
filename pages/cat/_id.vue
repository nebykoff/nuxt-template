<template>
    <div :class="$style.CatDetail">
        {{ $store.getters.getCat($route.params.id) }}
    </div>
</template>

<script>
    export default {
        name: 'CatDetail'
    };
</script>

<style module lang="scss">
    .CatDetail {
        border: 1px solid magenta;
    }
</style>