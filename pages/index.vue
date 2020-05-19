<template>
    <div :class="$style.HomePage">
        <div :class="$style.Gallery">
            <nuxt-link v-for="item of $store.state.cats"
                       :key="item.id"
                       :class="{ [$style.bigCat]: item.big}"
                       :to="'/cat/'+ item.id">

                <CatCard :item="item"/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import CatCard from '~/components/pages/home/CatCard';

    export default {
        name: 'HomePage',
        components: {
            CatCard,
        }
    };
</script>

<style lang="scss" module>
    .HomePage {
        .Gallery {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 100%;

            a {
                width: calc(100% / 3 - 30px);
                height: 480px;
                margin-bottom: 56px;

                &.bigCat {
                    width: calc(100% - (100% / 3) - 16px);
                }
            }
        }
    }
</style>
