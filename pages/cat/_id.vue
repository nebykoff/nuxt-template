<template>
    <div :class="$style.CatDetail">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        {{ cat }}
    </div>
</template>

<script>
    import Breadcrumbs from '~/components/common/Breadcrumbs';

    export default {
        name: 'CatDetail',

        components: {
            Breadcrumbs,
        },

        computed: {
            cat() {
                return this.$store.getters.getCat(this.$route.params.id);
            },
            breadcrumbs() {
                return ['Кошки', this.cat.title];
            }
        }
    };
</script>

<style module lang="scss">
    .CatDetail {
        //
    }
</style>