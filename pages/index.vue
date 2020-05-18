<template>
    <div :class="$style.HomePage">
        <Gallery :items="$store.state.cats"/>
    </div>
</template>

<script>
    import Gallery from '~/components/common/Gallery/Gallery';

    export default {
        name: 'HomePage',
        components: {
            Gallery,
        }
    };
</script>

<style lang="scss" module>
    .HomePage {
        //
    }
</style>
