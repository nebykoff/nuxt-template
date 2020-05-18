<template>
    <div :class="$style.Gallery">
        <GalleryItem v-for="item of items" :key="item.id" :item="item"/>
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
        }
    };
</script>

<style module lang="scss">
    .Gallery {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > div {
            margin-bottom: 56px;
        }
    }
</style>