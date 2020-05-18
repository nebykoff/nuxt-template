<template>
    <div :class="$style.Gallery">
        <nuxt-link v-for="item of items" :key="item.id" :to="'/'+ path + '/'+ item.id">
            <GalleryItem :item="item"/>
        </nuxt-link>
    </div>
</template>

<script>
    import GalleryItem from '~/components/common/Gallery/GalleryItem';
    export default {
        name: 'Gallery',
        components: {
            GalleryItem,
        },
        props: {
            items: {
                type: Array,
                required: true,
            },
            path: {
                type: String,
                required: true,
            }
        }
    };
</script>

<style module lang="scss">
    .Gallery {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>