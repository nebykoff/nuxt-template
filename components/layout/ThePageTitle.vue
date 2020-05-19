<template>
    <div :class="$style.ThePageTitle">
        <h1>Кошки</h1>
    </div>
</template>

<script>
    export default {
        name: 'ThePageTitleVue',
    };
</script>

<style module lang="scss">
    .ThePageTitle {
        width: 100%;
        padding-top: 40px;
        padding-bottom: 30px;

        h1 {
            font-size: 32px;
        }

        &__breadcrumbs {
            margin-top: 30px;
        }
    }
</style>