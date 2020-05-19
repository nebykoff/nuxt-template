<template>
    <div :class="$style.CatDetail">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        <div :class="$style.CatDetail__wrapper">
            <section :class="$style.CatDetail__content">
                {{ cat }}
            </section>
            <TheSidebar :class="$style.CatDetail__sidebar">
                <div>БЛОК 1</div>
                <div>БЛОК 2</div>
                <div>БЛОК 3</div>
            </TheSidebar>
        </div>
    </div>
</template>

<script>
    import Breadcrumbs from '~/components/common/Breadcrumbs';
    import TheSidebar from '~/components/layout/TheSidebar';

    export default {
        name: 'CatDetail',

        components: {
            TheSidebar,
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
        &__wrapper {
            display: flex;
            justify-content: space-between;
        }

        &__content {
            flex-grow: 1;
        }
    }
</style>