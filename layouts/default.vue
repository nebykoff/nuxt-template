<template>
    <div :class="$style.page">
        <TheHeader/>

        <main :class="$style.main">
            <nuxt/>
        </main>

        <TheFooter/>
        <TheSprite/>
        <!--        <TheModal />-->
    </div>
</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheFooter from '~/components/layout/TheFooter';
    import TheSprite from '~/components/layout/TheSprite';
    // import TheModal from '~/components/common/TheModal';

    export default {
        components: {
            TheHeader,
            TheFooter,
            TheSprite,
            // TheModal
        },
    };
</script>

<style lang="scss" module>
    .page {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 50px;
    }

    .main {
        min-height: calc(100vh - #{$footer-h});
    }
</style>
